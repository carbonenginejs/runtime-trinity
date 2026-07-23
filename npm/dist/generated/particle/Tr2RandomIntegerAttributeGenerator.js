import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { bindParticleElement } from '../../particle/particleElementBinding.js';
import { Tr2ParticleElementDeclaration as _Tr2ParticleElementDe } from '../../particle/Tr2ParticleElementDeclaration.js';

let _initProto, _initClass, _init_elementType, _init_extra_elementType, _init_customName, _init_extra_customName, _init_maxRange, _init_extra_maxRange, _init_minRange, _init_extra_minRange, _init_valid, _init_extra_valid;

/** Tr2RandomIntegerAttributeGenerator (particle) - generated from schema shapeHash 8bfdb492.... */
let _Tr2RandomIntegerAttr;
new class extends _identity {
  static [class Tr2RandomIntegerAttributeGenerator extends CjsModel {
    static {
      ({
        e: [_init_elementType, _init_extra_elementType, _init_customName, _init_extra_customName, _init_maxRange, _init_extra_maxRange, _init_minRange, _init_extra_minRange, _init_valid, _init_extra_valid, _initProto],
        c: [_Tr2RandomIntegerAttr, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2RandomIntegerAttributeGenerator",
        family: "particle"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Type")], 16, "elementType"], [[io, io.persist, type, type.string], 16, "customName"], [[io, io.persist, type, type.vec4], 16, "maxRange"], [[io, io.persist, type, type.vec4], 16, "minRange"], [[io, io.read, type, type.boolean], 16, "valid"], [[impl, impl.implemented], 18, "Bind"], [[impl, impl.adapted], 18, "Generate"], [[impl, impl.implemented], 18, "GetDimension"], [[impl, impl.implemented], 18, "GetName"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_valid(this);
    }
    #element = (_initProto(this), null);

    /** m_name.m_type (Tr2ParticleElementDeclarationName::Type) [READWRITE, PERSIST, ENUM] */
    elementType = _init_elementType(this, _Tr2ParticleElementDe.Type.CUSTOM);

    /** m_name.m_name (std::string) [READWRITE, PERSIST] */
    customName = (_init_extra_elementType(this), _init_customName(this, ""));

    /** m_maxRange (Vector4) [READWRITE, PERSIST] */
    maxRange = (_init_extra_customName(this), _init_maxRange(this, vec4.create()));

    /** m_minRange (Vector4) [READWRITE, PERSIST] */
    minRange = (_init_extra_maxRange(this), _init_minRange(this, vec4.create()));

    /** m_valid (bool) [READ] */
    valid = (_init_extra_minRange(this), _init_valid(this, false));
    Bind(particleSystem, boundElements) {
      this.#element = this.elementType === _Tr2ParticleElementDe.Type.CUSTOM ? bindParticleElement(particleSystem, this.customName, boundElements) : bindParticleElement(particleSystem, this.elementType, boundElements);
      this.valid = !!this.#element;
      return this.valid;
    }
    Generate(position, velocity, index) {
      if (!this.valid) {
        return;
      }
      const offset = this.#element.startOffset + index * this.#element.instanceStride;
      for (let component = 0; component < this.#element.dimension; component++) {
        this.#element.buffer[offset + component] = Math.floor(this.minRange[component] + Math.random() * (this.maxRange[component] - this.minRange[component]) + 0.5);
      }
    }
    GetDimension() {
      return this.valid ? this.#element.dimension : 0;
    }
    GetName() {
      return this.elementType === _Tr2ParticleElementDe.Type.CUSTOM ? this.customName : Object.keys(_Tr2ParticleElementDe.Type).find(name => _Tr2ParticleElementDe.Type[name] === this.elementType) ?? "";
    }
  }];
  Type = _Tr2ParticleElementDe.Type;
  constructor() {
    super(_Tr2RandomIntegerAttr), _initClass();
  }
}();

export { _Tr2RandomIntegerAttr as Tr2RandomIntegerAttributeGenerator };
//# sourceMappingURL=Tr2RandomIntegerAttributeGenerator.js.map
