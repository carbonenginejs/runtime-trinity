// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/EveRootTransform.h
//   trinity/trinity/Eve/EveRootTransform_Blue.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { EveTransform } from "./EveTransform.js";


@type.define({ className: "EveRootTransform", family: "eve/spaceObject" })
export class EveRootTransform extends EveTransform
{

  /** m_boundingSphereRadius (float) [READWRITE, PERSIST] */
  @io.persist
  @type.float32
  boundingSphereRadius = -1;

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("ITriQuaternionFunction")
  rotationCurve = null;

  /** m_modelTranslation (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("ITriVectorFunction")
  modelTranslationCurve = null;

  /** m_modelRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("ITriQuaternionFunction")
  modelRotationCurve = null;

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  @io.persist
  @type.model("ITriVectorFunction")
  translationCurve = null;

  /** Returns the authored bounding-sphere radius. */
  @carbon.method
  @impl.implemented
  GetBoundingSphereRadius()
  {
    return this.boundingSphereRadius;
  }

}
