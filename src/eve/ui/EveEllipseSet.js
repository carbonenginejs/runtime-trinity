// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/UI/EveEllipseSet.h
//   trinity/trinity/Eve/UI/EveEllipseSet.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, io, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "../child/EveChildTransform.js";
import { EveEllipseDefinition } from "./EveEllipseDefinition.js";


@type.define({ className: "EveEllipseSet", family: "eve/ui" })
export class EveEllipseSet extends EveChildTransform
{
  #geometryDirty = true;

  @io.notify
  @io.persist
  @type.uint32
  ribbonSegmentCount = 128;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  display = true;

  @io.persist
  @type.boolean
  enablePicking = true;

  @io.persist
  @type.float32
  depthOffset = 0;

  @io.persist
  @type.list("EveEllipseDefinition")
  ellipses = [];

  @io.persist
  @type.model("Tr2Effect")
  effect = null;

  @carbon.method
  AddEllipse(center, semiMajor, semiMinor, planeNormal, rotationDegrees)
  {
    const ellipse = new EveEllipseDefinition();
    vec3.copy(ellipse.center, center);
    ellipse.semiMajor = semiMajor;
    ellipse.semiMinor = semiMinor;
    vec3.copy(ellipse.planeNormal, planeNormal);
    ellipse.rotationDegrees = rotationDegrees;
    this.#BindEllipse(ellipse);
    this.ellipses.push(ellipse);
    this.#MarkGeometryDirty();
    return true;
  }

  @carbon.method
  __init__()
  {
    // Carbon creates the configured default effect here. Resource lookup is
    // runtime-resource/engine work; a persisted or caller-assigned effect is
    // retained and the CPU definitions are rebound after hydration.
    for (const ellipse of this.ellipses)
    {
      this.#BindEllipse(ellipse);
    }
  }

  @carbon.method
  ClearEllipses()
  {
    for (const ellipse of this.ellipses)
    {
      ellipse?.SetDirtyFlag?.(null);
    }
    this.ellipses.length = 0;
    this.#MarkGeometryDirty();
  }

  OnModified(_value = null)
  {
    this.#MarkGeometryDirty();
    return true;
  }

  #MarkGeometryDirty()
  {
    this.#geometryDirty = true;
  }

  #BindEllipse(ellipse)
  {
    ellipse?.SetDirtyFlag?.(() => this.#MarkGeometryDirty());
  }
}
