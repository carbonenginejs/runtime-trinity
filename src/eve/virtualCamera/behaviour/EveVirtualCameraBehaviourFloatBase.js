// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


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
}
