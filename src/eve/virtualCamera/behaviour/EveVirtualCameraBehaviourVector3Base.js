// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2CurveScalar } from "../../../curves/Tr2CurveScalar.js";
import { Tr2CurveExtrapolation } from "../../../curves/enums.js";


@type.define({
  className: "EveVirtualCameraBehaviourVector3Base",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourVector3Base extends CjsModel
{
  @io.persist
  @type.boolean
  active = true;

  @io.notify
  @io.persist
  @type.string
  name = "";

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name);
  }

  @carbon.method
  @impl.adapted
  OnModified(value = null)
  {
    if (!value || CjsModel.hasModifiedProperty(value, "name"))
    {
      this.SetName(this.name);
    }
    return true;
  }

  @carbon.method
  @impl.implemented
  IsActive()
  {
    return this.active;
  }

  static createConstantCurve(value = 1)
  {
    const curve = new Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, value);
    curve.AddKey(1, value);
    return curve;
  }

  static createEaseCurve()
  {
    const curve = new Tr2CurveScalar();
    curve.SetExtrapolation(Tr2CurveExtrapolation.LINEAR);
    curve.AddKey(0, 0);
    curve.AddKey(1, 1);
    return curve;
  }

  static rotateVectorWithAnchor(out, value, anchorForwardDirection)
  {
    const horizontal = vec3.fromValues(anchorForwardDirection[0], 0, anchorForwardDirection[2]);
    if (vec3.squaredLength(horizontal) === 0)
    {
      return vec3.copy(out, value);
    }
    vec3.normalize(horizontal, horizontal);
    const yaw = Math.atan2(horizontal[0], horizontal[2]);
    const rotation = quat.setAxisAngle(quat.create(), vec3.fromValues(0, 1, 0), yaw);
    return vec3.transformQuat(out, value, rotation);
  }
}
