// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/TriView.h
//   trinity/trinity/TriView.cpp
//   trinity/trinity/TriView_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "TriView", family: "trinityCore" })
export class TriView extends CjsModel
{

  /** m_transform (Matrix) [READWRITE, PERSIST] */
  @io.persist
  @type.mat4
  transform = mat4.create();

  /** Builds Carbon's right-handed look-at view transform. */
  @carbon.method
  @impl.implemented
  SetLookAtPosition(eye, at, up)
  {
    mat4.lookAt(this.transform, eye, at, up);
  }

}
