// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.h
// Source: E:\carbonengine\trinity\trinity\Eve\VirtualCamera\EveVirtualCameraBehaviour.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { EveVirtualCameraBehaviourVector3Base } from "./EveVirtualCameraBehaviourVector3Base.js";


@type.define({
  className: "EveVirtualCameraBehaviourVector3Offset",
  family: "eve/virtualCamera/behaviour"
})
export class EveVirtualCameraBehaviourVector3Offset extends EveVirtualCameraBehaviourVector3Base
{
  @io.persist
  @type.boolean
  proportional = true;

  @io.persist
  @type.boolean
  world = false;

  @io.persist
  @type.vec3
  offset = vec3.create();

  constructor()
  {
    super();
    this.name = "Offset";
  }

  @carbon.method
  @impl.adapted
  Update(_camera, _current, _deltaTime, _localElapsedTime, _anchorPosition, anchorRadius, anchorForwardDirection, out = vec3.create())
  {
    if (this.world)
    {
      vec3.copy(out, this.offset);
    }
    else
    {
      EveVirtualCameraBehaviourVector3Base.rotateVectorWithAnchor(out, this.offset, anchorForwardDirection);
    }
    if (this.proportional)
    {
      vec3.scale(out, out, anchorRadius);
    }
    return out;
  }
}
