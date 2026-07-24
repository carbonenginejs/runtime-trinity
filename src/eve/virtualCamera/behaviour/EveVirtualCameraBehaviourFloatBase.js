// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "EveVirtualCameraBehaviourFloatBase",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourFloatBase extends CjsModel
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
  OnModified(_options = {})
  {
    this.SetName(this.name);
    return true;
  }

  @carbon.method
  @impl.implemented
  IsActive()
  {
    return this.active;
  }
}
