// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleFluidDragForce.h
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleFluidDragForce.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2ParticleFluidDragForce_Blue.cpp
import { vec3 } from "@carbonenginejs/runtime-utils/vec3";
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";


@type.define({
  className: "Tr2ParticleFluidDragForce",
  family: "particle"
})
export class Tr2ParticleFluidDragForce extends CjsModel
{
  @io.persist
  @type.float32
  drag = 1;

  /** Applies quadratic drag and Carbon's one-frame velocity reversal clamp. */
  @carbon.method
  @impl.adapted
  GetForce(_position, velocity, dt, mass, out = vec3.create())
  {
    const speed = vec3.length(velocity);
    const forceScale = -speed * this.drag;
    const step = dt * mass;
    const predictedDot = speed * speed * (1 + forceScale * step);
    return vec3.scale(out, velocity, predictedDot < 0 ? -1 / step : forceScale);
  }

  @carbon.method
  @impl.noop
  Update(_dt)
  {
  }
}
