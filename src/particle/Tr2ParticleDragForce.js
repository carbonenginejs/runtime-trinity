// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDragForce.h
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDragForce.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDragForce_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Tr2ParticleDragForce",
  family: "particle"
})
export class Tr2ParticleDragForce extends CjsModel
{
  @io.persist
  @type.float32
  drag = 0.1;

  /** Carbon's drag force is proportional and opposite to velocity. */
  @carbon.method
  @impl.adapted
  GetForce(_position, velocity, _dt, _mass, out = vec3.create())
  {
    return vec3.scale(out, velocity, -this.drag);
  }

  @carbon.method
  @impl.noop
  Update(_dt)
  {
  }
}
