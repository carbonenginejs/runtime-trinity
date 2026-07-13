// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveBezierCurve.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveBezierCurve.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveBezierCurve_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { sph3 } from "@carbonenginejs/core-math/sph3";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "../EveChildTransform.js";


@type.define({
  className: "EveBezierCurve",
  family: "eve/child/lineSetPaths"
})
export class EveBezierCurve extends EveChildTransform
{
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  display = true;

  @io.notify
  @io.persist
  @type.vec3
  translation = vec3.create();

  @io.notify
  @io.persist
  @type.quat
  rotation = quat.create();

  @io.notify
  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.read
  @type.boolean
  isVisible = true;

  @io.notify
  @io.persist
  @type.vec3
  point1 = vec3.create();

  @io.notify
  @io.persist
  @type.vec3
  point2 = vec3.create();

  @io.notify
  @io.persist
  @type.vec3
  bezierPoint = vec3.create();

  @io.notify
  @io.persist
  @type.float32
  completeness = 1;

  @io.notify
  @io.persist
  @type.float32
  segments = 24;

  @io.notify
  @io.persist
  @type.float32
  segmentOffset = 0;

  @io.notify
  @io.persist
  @type.float32
  lineWidth = 1;

  @io.notify
  @io.persist
  @type.boolean
  scaleSegmentsByCompleteness = true;

  @io.notify
  @io.persist
  @type.boolean
  scaleEndpoints = true;

  @io.notify
  @io.persist
  @type.boolean
  billboardObjects = true;

  @io.persist
  @type.vec3
  objectScale = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.float32
  movementSpeed = 0;

  @io.read
  @type.float32
  animValue = 0;

  #points = [];

  #parentTransform = mat4.create();

  #boundingSphere = vec4.create();

  #meshSize = 0;

  #regeneratePoints = true;

  @carbon.method
  @impl.implemented
  Initialize()
  {
    this.#regeneratePoints = true;
    return true;
  }

  @carbon.method
  @impl.adapted
  OnModified(properties = null)
  {
    if (CjsModel.hasModifiedProperty(properties, "completeness"))
    {
      this.completeness = Math.min(2, Math.max(0, this.completeness));
    }
    if (CjsModel.hasModifiedProperty(properties, "segments"))
    {
      this.segments = Math.min(128, Math.max(1, this.segments));
    }
    if (CjsModel.hasModifiedProperty(properties, "segmentOffset"))
    {
      this.segmentOffset = Math.min(1, Math.max(0, this.segmentOffset));
    }
    this.#regeneratePoints = true;
    return true;
  }

  @carbon.method
  @impl.adapted
  Update(updateContext, _params = null)
  {
    if (this.movementSpeed !== 0)
    {
      this.animValue = (this.animValue + this.movementSpeed * EveBezierCurve.#getDeltaT(updateContext)) % 1;
    }
    if (!this.#regeneratePoints)
    {
      return false;
    }
    this.GeneratePoints();
    this.CalculateBoundingSphere();
    return true;
  }

  @carbon.method
  @impl.adapted
  GeneratePoints(parentTransform = mat4.create())
  {
    const segmentCount = this.#getSegmentCount();
    if (segmentCount <= 1)
    {
      return;
    }
    if (!mat4.exactEquals(parentTransform, EveBezierCurve.#identityMatrix))
    {
      this.UpdateTransform(parentTransform);
      mat4.copy(this.#parentTransform, parentTransform);
    }
    else
    {
      this.UpdateTransform(this.#parentTransform);
    }
    const lower = Math.min(this.completeness, 1);
    const upper = Math.max(0, this.completeness - 1);
    const points = [];
    for (let i = 0; i < segmentCount; i++)
    {
      const sourceT = i / segmentCount + this.segmentOffset / segmentCount;
      const t = sourceT * (lower - upper) + upper;
      const inverse = 1 - t;
      const a = inverse * inverse;
      const b = 2 * inverse * t;
      const c = t * t;
      points.push(vec3.fromValues(
        a * this.point1[0] + b * this.bezierPoint[0] + c * this.point2[0],
        a * this.point1[1] + b * this.bezierPoint[1] + c * this.point2[1],
        a * this.point1[2] + b * this.bezierPoint[2] + c * this.point2[2]
      ));
    }
    this.#points = points;
    this.#regeneratePoints = false;
  }

  @carbon.method
  @impl.adapted
  GetPointCount()
  {
    return this.#points.length;
  }

  @carbon.method
  @impl.adapted
  CalculateBoundingSphere(meshSize = 0, _reCalculateChildren = true)
  {
    if (meshSize !== 0)
    {
      this.#meshSize = meshSize;
    }
    else if (this.#meshSize !== 0)
    {
      meshSize = this.#meshSize;
    }
    const center = vec3.scale(vec3.create(), vec3.add(vec3.create(), vec3.add(vec3.create(), this.point1, this.point2), this.bezierPoint), 1 / 3);
    const radiusSquared = Math.max(
      vec3.squaredDistance(this.point1, center),
      vec3.squaredDistance(this.point2, center),
      vec3.squaredDistance(this.bezierPoint, center)
    );
    vec4.set(this.#boundingSphere, center[0], center[1], center[2], Math.sqrt(radiusSquared) + meshSize);
  }

  @carbon.method
  @impl.adapted
  GetBoundingSphere(out = vec4.create())
  {
    return sph3.transformMat4(out, this.#boundingSphere, this.localTransform);
  }

  @carbon.method
  @impl.adapted
  UpdateVisibility(frustum, _parentLod = null, systemLocation = mat4.create())
  {
    if (!this.display)
    {
      return;
    }
    this.isVisible = false;
    const transform = mat4.multiply(mat4.create(), this.localTransform, systemLocation);
    const sphere = sph3.transformMat4(vec4.create(), this.#boundingSphere, transform);
    this.isVisible = !!frustum?.IsSphereVisible?.(sphere);
  }

  @carbon.method
  @impl.adapted
  AddLinesToSet(lineSet, color, animColor, scrollSpeed = 0)
  {
    if (!this.display || !this.isVisible)
    {
      return;
    }
    if (this.#regeneratePoints)
    {
      this.GeneratePoints();
      this.CalculateBoundingSphere();
    }
    const segmentCount = Math.min(this.#getSegmentCount(), this.#points.length);
    for (let i = 0; i < segmentCount; i++)
    {
      const next = (i + 1) % segmentCount;
      if (next === 0 && this.completeness < 1)
      {
        continue;
      }
      const start = EveBezierCurve.#transformPoint(this.#points[i], this.localTransform);
      const endPoint = next === 0 ? this.point2 : this.#points[next];
      const end = EveBezierCurve.#transformPoint(endPoint, this.localTransform);
      const id = lineSet.AddStraightLine(start, color, end, color, this.lineWidth);
      if (scrollSpeed !== 0)
      {
        lineSet.ChangeLineAnimation(id, animColor, scrollSpeed, 1);
      }
    }
  }

  #getSegmentCount()
  {
    const completenessScale = 1 - Math.abs(this.completeness - 1);
    return Math.trunc(this.scaleSegmentsByCompleteness ? (this.segments + 0.5) * completenessScale : this.segments + 0.5);
  }

  static #identityMatrix = mat4.create();

  static #getDeltaT(context)
  {
    const value = context?.GetDeltaT?.() ?? context?.deltaT ?? 0;
    return Number.isFinite(Number(value)) ? Number(value) : 0;
  }

  static #transformPoint(point, transform)
  {
    return vec3.transformMat4(vec3.create(), point, transform);
  }
}
