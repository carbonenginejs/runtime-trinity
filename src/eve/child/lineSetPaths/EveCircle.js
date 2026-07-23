// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveCircle.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveCircle.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\LineSetPaths\EveCircle_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { sph3 } from "@carbonenginejs/core-math/sph3";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "../EveChildTransform.js";


@type.define({
  className: "EveCircle",
  family: "eve/child/lineSetPaths"
})
export class EveCircle extends EveChildTransform
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
  @type.float32
  circleRadius = 100;

  @io.notify
  @io.persist
  @type.vec4
  circleDistort = vec4.fromValues(1, 0, 1, 0);

  @io.notify
  @io.persist
  @type.float32
  numSegments = 64;

  @io.notify
  @io.persist
  @type.float32
  completeness = 1;

  @io.notify
  @io.persist
  @type.float32
  startPoint = 0;

  @io.notify
  @io.persist
  @type.float32
  lineWidth = 1;

  @io.notify
  @io.persist
  @type.boolean
  scaleSegmentsByCompleteness = false;

  @io.notify
  @io.persist
  @type.boolean
  scaleEndpoints = true;

  @io.notify
  @io.persist
  @type.boolean
  billboardObjects = false;

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
  OnModified(_options = {})
  {
    this.completeness = Math.min(2, Math.max(0, this.completeness));
    this.numSegments = Math.min(128, Math.max(1, this.numSegments));
    this.startPoint %= 1;
    this.#regeneratePoints = true;
    return true;
  }

  @carbon.method
  @impl.adapted
  Update(updateContext, _params = null)
  {
    if (this.movementSpeed !== 0)
    {
      this.animValue = (this.animValue + this.movementSpeed * EveCircle.#getDeltaT(updateContext)) % 1;
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
    if (!mat4.exactEquals(parentTransform, EveCircle.#identityMatrix))
    {
      this.UpdateTransform(parentTransform);
      mat4.copy(this.#parentTransform, parentTransform);
    }
    else
    {
      this.UpdateTransform(this.#parentTransform);
    }
    const totalArc = (1 - Math.abs(this.completeness - 1)) * Math.PI * 2;
    const startOffset = this.startPoint * Math.PI * 2 + Math.max(this.completeness - 1, 0) * Math.PI * 2 + totalArc / (2 * segmentCount);
    const points = [];
    for (let i = 0; i < segmentCount; i++)
    {
      const location = startOffset + totalArc * (i / segmentCount + this.animValue / segmentCount);
      const sin = Math.sin(location);
      const cos = Math.cos(location);
      let y = 0;
      if (this.circleDistort[1] !== 0 || this.circleDistort[3] !== 0)
      {
        const distort1 = sin < 0 ? this.circleDistort[0] : this.circleDistort[2];
        const distort2 = cos < 0 ? this.circleDistort[3] : this.circleDistort[1];
        y = sin * sin * this.circleRadius * distort1 + cos * cos * this.circleRadius * distort2;
      }
      points.push(vec3.fromValues(cos * this.circleRadius, y, sin * this.circleRadius));
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
    vec4.set(this.#boundingSphere, 0, 0, 0, this.circleRadius + this.lineWidth + meshSize);
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
    // Carbon (row-vector): m_localTransform * systemLocation - local first.
    const transform = mat4.multiply(mat4.create(), systemLocation, this.localTransform);
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
      if (this.completeness !== 1 && next === 0)
      {
        continue;
      }
      const start = EveCircle.#transformPoint(this.#points[i], this.localTransform);
      const end = EveCircle.#transformPoint(this.#points[next], this.localTransform);
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
    return Math.trunc(this.scaleSegmentsByCompleteness ? (this.numSegments + 0.5) * completenessScale : this.numSegments + 0.5);
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
