// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDirectForce.h
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDirectForce.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleDirectForce_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Tr2ParticleDirectForce",
  family: "particle"
})
export class Tr2ParticleDirectForce extends CjsModel
{
  @io.persist
  @type.vec3
  force = vec3.fromValues(1, 1, 1);

  /** Copies the authored constant force into caller-owned output. */
  @carbon.method
  @impl.adapted
  GetForce(_position, _velocity, _dt, _mass, out = vec3.create())
  {
    return vec3.copy(out, this.force);
  }

  @carbon.method
  @impl.noop
  Update(_dt)
  {
  }
}
