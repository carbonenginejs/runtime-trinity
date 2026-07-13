// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleSpring.h
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleSpring.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleSpring_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({
  className: "Tr2ParticleSpring",
  family: "particle"
})
export class Tr2ParticleSpring extends CjsModel
{
  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.float32
  springConstant = 0;

  /** Applies Carbon's linear spring force toward the configured origin. */
  @carbon.method
  @impl.adapted
  GetForce(position, _velocity, _dt, _mass, out = vec3.create())
  {
    vec3.subtract(out, position, this.position);
    return vec3.scale(out, out, -this.springConstant);
  }

  @carbon.method
  @impl.noop
  Update(_dt)
  {
  }
}
