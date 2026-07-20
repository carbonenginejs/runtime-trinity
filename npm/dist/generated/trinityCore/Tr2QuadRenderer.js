import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_quadIB, _init_extra_quadIB, _init_vertexBuffer, _init_extra_vertexBuffer, _init_vertexBufferOffset, _init_extra_vertexBufferOffset, _init_lastInstanceDataSize, _init_extra_lastInstanceDataSize, _init_bufferAlignment, _init_extra_bufferAlignment, _init_buffer, _init_extra_buffer, _init_addedSize, _init_extra_addedSize, _init_effect, _init_extra_effect, _init_batchType, _init_extra_batchType, _init_instanceSize, _init_extra_instanceSize, _init_vertexDeclHandle, _init_extra_vertexDeclHandle, _init_bufferOffset, _init_extra_bufferOffset, _init_count, _init_extra_count, _init_quadCount, _init_extra_quadCount, _init_definition, _init_extra_definition, _init_combinable, _init_extra_combinable, _init_bufferSize, _init_extra_bufferSize, _init_quad, _init_extra_quad;

/** Tr2QuadRenderer (trinityCore) - generated from schema shapeHash 3d8b0e71.... */
let _Tr2QuadRenderer;
new class extends _identity {
  static [class Tr2QuadRenderer extends CjsModel {
    static {
      ({
        e: [_init_quadIB, _init_extra_quadIB, _init_vertexBuffer, _init_extra_vertexBuffer, _init_vertexBufferOffset, _init_extra_vertexBufferOffset, _init_lastInstanceDataSize, _init_extra_lastInstanceDataSize, _init_bufferAlignment, _init_extra_bufferAlignment, _init_buffer, _init_extra_buffer, _init_addedSize, _init_extra_addedSize, _init_effect, _init_extra_effect, _init_batchType, _init_extra_batchType, _init_instanceSize, _init_extra_instanceSize, _init_vertexDeclHandle, _init_extra_vertexDeclHandle, _init_bufferOffset, _init_extra_bufferOffset, _init_count, _init_extra_count, _init_quadCount, _init_extra_quadCount, _init_definition, _init_extra_definition, _init_combinable, _init_extra_combinable, _init_bufferSize, _init_extra_bufferSize, _init_quad, _init_extra_quad],
        c: [_Tr2QuadRenderer, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2QuadRenderer",
        family: "trinityCore"
      })], [[type.rawStruct("Tr2BufferAL"), 0, "quadIB"], [type.rawStruct("Tr2RingVertexBuffer"), 0, "vertexBuffer"], [[type, type.uint32], 16, "vertexBufferOffset"], [[type, type.uint32], 16, "lastInstanceDataSize"], [[type, type.uint32], 16, "bufferAlignment"], [type.rawStruct("CcpMallocBuffer"), 0, "buffer"], [[type, type.uint32], 16, "addedSize"], [type.objectRef("Tr2Material"), 0, "effect"], [[type, type.int32, void 0, schema.enum("TriBatchType")], 16, "batchType"], [[type, type.uint32], 16, "instanceSize"], [[type, type.uint32], 16, "vertexDeclHandle"], [[type, type.uint32], 16, "bufferOffset"], [[type, type.uint32], 16, "count"], [[type, type.uint32], 16, "quadCount"], [type.rawStruct("Tr2VertexDefinition"), 0, "definition"], [type.rawStruct("Tr2EnumerableThreadSpecific<PerThreadData>"), 0, "combinable"], [[type, type.uint32], 16, "bufferSize"], [type.rawStruct("Tr2BufferAL"), 0, "quad"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_quad(this);
    }
    /** m_quadIB (Tr2BufferAL) */
    quadIB = _init_quadIB(this, null);

    /** m_vertexBuffer (Tr2RingVertexBuffer) */
    vertexBuffer = (_init_extra_quadIB(this), _init_vertexBuffer(this, null));

    /** m_vertexBufferOffset (uint32_t) */
    vertexBufferOffset = (_init_extra_vertexBuffer(this), _init_vertexBufferOffset(this, -1));

    /** m_lastInstanceDataSize (uint32_t) */
    lastInstanceDataSize = (_init_extra_vertexBufferOffset(this), _init_lastInstanceDataSize(this, 0));

    /** m_bufferAlignment (uint32_t) */
    bufferAlignment = (_init_extra_lastInstanceDataSize(this), _init_bufferAlignment(this, 4));

    /** buffer (CcpMallocBuffer) */
    buffer = (_init_extra_bufferAlignment(this), _init_buffer(this, null));

    /** addedSize (uint32_t) */
    addedSize = (_init_extra_buffer(this), _init_addedSize(this, 0));

    /** effect (Tr2MaterialPtr) */
    effect = (_init_extra_addedSize(this), _init_effect(this, null));

    /** batchType (TriBatchType - enum TriBatchType) */
    batchType = (_init_extra_effect(this), _init_batchType(this, 0));

    /** instanceSize (uint32_t) */
    instanceSize = (_init_extra_batchType(this), _init_instanceSize(this, 0));

    /** vertexDeclHandle (unsigned int) */
    vertexDeclHandle = (_init_extra_instanceSize(this), _init_vertexDeclHandle(this, 0));

    /** bufferOffset (uint32_t) */
    bufferOffset = (_init_extra_vertexDeclHandle(this), _init_bufferOffset(this, 0));

    /** count (uint32_t) */
    count = (_init_extra_bufferOffset(this), _init_count(this, 0));

    /** quadCount (uint32_t) */
    quadCount = (_init_extra_count(this), _init_quadCount(this, 0));

    /** definition (Tr2VertexDefinition) */
    definition = (_init_extra_quadCount(this), _init_definition(this, null));

    /** combinable (Tr2EnumerableThreadSpecific<PerThreadData>) */
    combinable = (_init_extra_definition(this), _init_combinable(this, null));

    /** m_bufferSize (CcpAtomic<uint32_t>) */
    bufferSize = (_init_extra_combinable(this), _init_bufferSize(this, 0));

    /** m_quad (Tr2BufferAL) */
    quad = (_init_extra_bufferSize(this), _init_quad(this, null));
  }];
  TriBatchType = Object.freeze({
    TRIBATCHTYPE_OPAQUE: 0,
    TRIBATCHTYPE_DECAL: 1,
    TRIBATCHTYPE_TRANSPARENT: 2,
    TRIBATCHTYPE_DEPTH: 3,
    TRIBATCHTYPE_ADDITIVE: 4,
    TRIBATCHTYPE_PICKING: 5,
    TRIBATCHTYPE_MIRROR: 6,
    TRIBATCHTYPE_DECALNORMAL: 7,
    TRIBATCHTYPE_DEPTHNORMAL: 8,
    TRIBATCHTYPE_OPAQUE_PREPASS: 9,
    TRIBATCHTYPE_DECAL_PREPASS: 10,
    TRIBATCHTYPE_GEOMETRY_ERASER: 11,
    TRIBATCHTYPE_FLARE: 12,
    TRIBATCHTYPE_DISTORTION: 13,
    TRIBATCHTYPE_COUNT_OF_BATCH_TYPES: 14
  });
  constructor() {
    super(_Tr2QuadRenderer), _initClass();
  }
}();

export { _Tr2QuadRenderer as Tr2QuadRenderer };
//# sourceMappingURL=Tr2QuadRenderer.js.map
