import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderJob as _TriRenderJob } from './TriRenderJob.js';
import { TriRenderStep as _TriRenderStep } from './TriRenderStep.js';

let _initProto, _initClass, _init_Destination, _init_extra_Destination, _init_destinationTexture, _init_extra_destinationTexture, _init_Source, _init_extra_Source, _init_sourceViewport, _init_extra_sourceViewport, _init_destinationViewport, _init_extra_destinationViewport;
let _TriStepCopyRenderTar;
new class extends _identity {
  static [class TriStepCopyRenderTarget extends _TriRenderStep {
    static {
      ({
        e: [_init_Destination, _init_extra_Destination, _init_destinationTexture, _init_extra_destinationTexture, _init_Source, _init_extra_Source, _init_sourceViewport, _init_extra_sourceViewport, _init_destinationViewport, _init_extra_destinationViewport, _initProto],
        c: [_TriStepCopyRenderTar, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriStepCopyRenderTarget",
        family: "renderJob"
      })], [[[io, io.readwrite, void 0, type.objectRef("Tr2RenderTarget")], 16, "Destination"], [[io, io.readwrite, void 0, type.objectRef("TriTextureRes")], 16, "destinationTexture"], [[io, io.readwrite, void 0, type.objectRef("Tr2RenderTarget")], 16, "Source"], [[io, io.readwrite, void 0, type.objectRef("TriViewport")], 16, "sourceViewport"], [[io, io.readwrite, void 0, type.objectRef("TriViewport")], 16, "destinationViewport"], [[carbon, carbon.method, impl, impl.adapted], 18, "__init__"], [[carbon, carbon.method, impl, impl.implemented], 18, "Execute"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetCopyIntent"]], 0, void 0, _TriRenderStep));
    }
    constructor(...args) {
      super(...args);
      _init_extra_destinationViewport(this);
    }
    Destination = (_initProto(this), _init_Destination(this, null));
    destinationTexture = (_init_extra_Destination(this), _init_destinationTexture(this, null));
    Source = (_init_extra_destinationTexture(this), _init_Source(this, null));
    sourceViewport = (_init_extra_Source(this), _init_sourceViewport(this, null));
    destinationViewport = (_init_extra_sourceViewport(this), _init_destinationViewport(this, null));
    get destination() {
      return this.Destination;
    }
    set destination(value) {
      this.Destination = value ?? null;
    }
    get source() {
      return this.Source;
    }
    set source(value) {
      this.Source = value ?? null;
    }
    __init__(destination = null, source = null, destinationViewport = null, sourceViewport = null) {
      if (destination) {
        if (_TriStepCopyRenderTar.#isTextureResource(destination)) this.destinationTexture = destination;else this.Destination = destination;
      }
      this.Source = source ?? null;
      this.destinationViewport = destinationViewport ?? null;
      this.sourceViewport = sourceViewport ?? null;
    }
    Execute(_realTime, _simTime, executor) {
      const intent = this.GetCopyIntent();
      if (!intent) return _TriRenderJob.StepResult.RS_OK;
      const copied = executor?.CopyRenderTarget?.(intent);
      return copied === false ? _TriRenderJob.StepResult.RS_FAILED : _TriRenderJob.StepResult.RS_OK;
    }
    GetCopyIntent() {
      if (!this.Source || !this.Destination && !this.destinationTexture) return null;
      const destX = Number(this.destinationViewport?.x) || 0;
      const destY = Number(this.destinationViewport?.y) || 0;
      if (this.Destination) {
        return _TriStepCopyRenderTar.#renderTargetIntent(this.Source, this.Destination, this.sourceViewport, destX, destY);
      }
      return {
        source: this.Source,
        destination: this.destinationTexture,
        destinationType: "texture",
        destinationPoint: {
          x: destX,
          y: destY
        },
        sourceRect: this.sourceViewport ? _TriStepCopyRenderTar.#viewportRect(this.sourceViewport) : null
      };
    }
  }];
  #renderTargetIntent(source, destination, sourceViewport, destX, destY) {
    let x = destX;
    let y = destY;
    let sourceRect;
    if (sourceViewport) {
      if (Number(sourceViewport.width) <= 0 || Number(sourceViewport.height) <= 0) return null;
      sourceRect = _TriStepCopyRenderTar.#viewportRect(sourceViewport);
      if (x < 0) {
        sourceRect.right -= -x;
        x = 0;
      }
      if (y < 0) {
        sourceRect.bottom -= -y;
        y = 0;
      }
    } else {
      sourceRect = {
        left: 0,
        top: 0,
        right: _TriStepCopyRenderTar.#dimension(source, "Width", "width"),
        bottom: _TriStepCopyRenderTar.#dimension(source, "Height", "height")
      };
      if (x < 0) {
        sourceRect.right += x;
        x = 0;
      }
      if (y < 0) {
        sourceRect.bottom += y;
        y = 0;
      }
    }
    return {
      source,
      destination,
      destinationType: "renderTarget",
      sourceRect,
      destinationRect: {
        left: x,
        top: y,
        right: x + sourceRect.right - sourceRect.left,
        bottom: y + sourceRect.bottom - sourceRect.top
      }
    };
  }
  #viewportRect(viewport) {
    const left = Number(viewport.x) || 0;
    const top = Number(viewport.y) || 0;
    return {
      left,
      top,
      right: left + (Number(viewport.width) || 0),
      bottom: top + (Number(viewport.height) || 0)
    };
  }
  #dimension(value, method, property) {
    return Number(value?.[`Get${method}`]?.() ?? value?.[property]) || 0;
  }
  #isTextureResource(value) {
    const name = value?.constructor?.name || "";
    return name === "TriTextureRes" || /TextureRes$/.test(name) || typeof value?.GetTexture === "function";
  }
  constructor() {
    super(_TriStepCopyRenderTar), _initClass();
  }
}();

export { _TriStepCopyRenderTar as TriStepCopyRenderTarget };
//# sourceMappingURL=TriStepCopyRenderTarget.js.map
