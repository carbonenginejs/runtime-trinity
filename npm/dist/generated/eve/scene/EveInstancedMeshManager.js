import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_dynamicInstances, _init_extra_dynamicInstances, _init_owner, _init_extra_owner, _init_buffer, _init_extra_buffer, _init_regions, _init_extra_regions, _init_retiredBuffers, _init_extra_retiredBuffers, _init_mappedRetiredBuffers, _init_extra_mappedRetiredBuffers, _init_meshGroups, _init_extra_meshGroups, _init_currentAllocation, _init_extra_currentAllocation, _init_screenSizeThresholds, _init_extra_screenSizeThresholds, _init_flags, _init_extra_flags, _init_screenSizes, _init_extra_screenSizes, _init_sphereGroups, _init_extra_sphereGroups, _init_perObjectDataBuffer, _init_extra_perObjectDataBuffer, _init_staticInstanceBuffer, _init_extra_staticInstanceBuffer, _init_dynamicInstanceBuffer, _init_extra_dynamicInstanceBuffer, _init_worldTransform, _init_extra_worldTransform, _init_prevWorldTransform, _init_extra_prevWorldTransform, _init_nullptr, _init_extra_nullptr, _init_InvalidIndex, _init_extra_InvalidIndex, _init_bounds, _init_extra_bounds, _init_radius, _init_extra_radius, _init_maxScreenSize, _init_extra_maxScreenSize, _init_perObjectDataIndex, _init_extra_perObjectDataIndex, _init_materialHash, _init_extra_materialHash, _init_meshIndex, _init_extra_meshIndex, _init_areaIndex, _init_extra_areaIndex, _init_count, _init_extra_count, _init_sphereGroupIndex, _init_extra_sphereGroupIndex, _init_ownerIndex, _init_extra_ownerIndex, _init_pickingObjectId, _init_extra_pickingObjectId, _init_offset, _init_extra_offset, _init_length, _init_extra_length, _init_recordedFrame, _init_extra_recordedFrame, _init_totalVisibleInstances, _init_extra_totalVisibleInstances, _init_instanceCount, _init_extra_instanceCount, _init_sphereIndex, _init_extra_sphereIndex, _init_CASTS_SHADOW, _init_extra_CASTS_SHADOW, _init_RENDER_IN_REFLECTION, _init_extra_RENDER_IN_REFLECTION, _init_areaCount, _init_extra_areaCount, _init_isDynamic, _init_extra_isDynamic, _init_index, _init_extra_index, _init_geometry, _init_extra_geometry, _init_handle, _init_extra_handle, _init_staticInstances, _init_extra_staticInstances, _init_data, _init_extra_data, _init_mappedData, _init_extra_mappedData, _init_material, _init_extra_material, _init_boundingSpheres, _init_extra_boundingSpheres, _init_combinedVertexDeclaration, _init_extra_combinedVertexDeclaration, _init_batchType, _init_extra_batchType, _init_lastTestResult, _init_extra_lastTestResult;

/** EveInstancedMeshManager (eve/scene) - generated from schema shapeHash 167badda.... */
let _EveInstancedMeshMana;
class EveInstancedMeshManager extends CjsModel {
  static {
    ({
      e: [_init_dynamicInstances, _init_extra_dynamicInstances, _init_owner, _init_extra_owner, _init_buffer, _init_extra_buffer, _init_regions, _init_extra_regions, _init_retiredBuffers, _init_extra_retiredBuffers, _init_mappedRetiredBuffers, _init_extra_mappedRetiredBuffers, _init_meshGroups, _init_extra_meshGroups, _init_currentAllocation, _init_extra_currentAllocation, _init_screenSizeThresholds, _init_extra_screenSizeThresholds, _init_flags, _init_extra_flags, _init_screenSizes, _init_extra_screenSizes, _init_sphereGroups, _init_extra_sphereGroups, _init_perObjectDataBuffer, _init_extra_perObjectDataBuffer, _init_staticInstanceBuffer, _init_extra_staticInstanceBuffer, _init_dynamicInstanceBuffer, _init_extra_dynamicInstanceBuffer, _init_worldTransform, _init_extra_worldTransform, _init_prevWorldTransform, _init_extra_prevWorldTransform, _init_nullptr, _init_extra_nullptr, _init_InvalidIndex, _init_extra_InvalidIndex, _init_bounds, _init_extra_bounds, _init_radius, _init_extra_radius, _init_maxScreenSize, _init_extra_maxScreenSize, _init_perObjectDataIndex, _init_extra_perObjectDataIndex, _init_materialHash, _init_extra_materialHash, _init_meshIndex, _init_extra_meshIndex, _init_areaIndex, _init_extra_areaIndex, _init_count, _init_extra_count, _init_sphereGroupIndex, _init_extra_sphereGroupIndex, _init_ownerIndex, _init_extra_ownerIndex, _init_pickingObjectId, _init_extra_pickingObjectId, _init_offset, _init_extra_offset, _init_length, _init_extra_length, _init_recordedFrame, _init_extra_recordedFrame, _init_totalVisibleInstances, _init_extra_totalVisibleInstances, _init_instanceCount, _init_extra_instanceCount, _init_sphereIndex, _init_extra_sphereIndex, _init_CASTS_SHADOW, _init_extra_CASTS_SHADOW, _init_RENDER_IN_REFLECTION, _init_extra_RENDER_IN_REFLECTION, _init_areaCount, _init_extra_areaCount, _init_isDynamic, _init_extra_isDynamic, _init_index, _init_extra_index, _init_geometry, _init_extra_geometry, _init_handle, _init_extra_handle, _init_staticInstances, _init_extra_staticInstances, _init_data, _init_extra_data, _init_mappedData, _init_extra_mappedData, _init_material, _init_extra_material, _init_boundingSpheres, _init_extra_boundingSpheres, _init_combinedVertexDeclaration, _init_extra_combinedVertexDeclaration, _init_batchType, _init_extra_batchType, _init_lastTestResult, _init_extra_lastTestResult],
      c: [_EveInstancedMeshMana, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveInstancedMeshManager",
      family: "eve/scene"
    })], [[type.objectRef("DynamicPerInstanceData"), 0, "dynamicInstances"], [type.objectRef("IRoot"), 0, "owner"], [type.rawStruct("Tr2BufferAL"), 0, "buffer"], [type.list("Region"), 0, "regions"], [type.list("Tr2BufferAL"), 0, "retiredBuffers"], [type.list("Tr2BufferAL"), 0, "mappedRetiredBuffers"], [type.list("MeshGroup"), 0, "meshGroups"], [type.rawStruct("InstanceBuffer::Allocation"), 0, "currentAllocation"], [type.list("float"), 0, "screenSizeThresholds"], [type.rawStruct("InstanceFlags"), 0, "flags"], [type.list("float"), 0, "screenSizes"], [type.list("SphereGroup"), 0, "sphereGroups"], [type.objectRef("Tr2GpuStructuredBuffer"), 0, "perObjectDataBuffer"], [type.rawStruct("InstanceBuffer"), 0, "staticInstanceBuffer"], [type.rawStruct("InstanceBuffer"), 0, "dynamicInstanceBuffer"], [[type, type.vec4], 16, "worldTransform"], [[type, type.vec4], 16, "prevWorldTransform"], [[type, type.unknown], 16, "nullptr"], [[type, type.unknown], 16, "InvalidIndex"], [type.rawStruct("CcpMath::Sphere"), 0, "bounds"], [[type, type.float32], 16, "radius"], [[type, type.float32], 16, "maxScreenSize"], [[type, type.uint32], 16, "perObjectDataIndex"], [[type, type.uint64], 16, "materialHash"], [[type, type.uint32], 16, "meshIndex"], [[type, type.uint32], 16, "areaIndex"], [[type, type.uint32], 16, "count"], [[type, type.uint32], 16, "sphereGroupIndex"], [[type, type.uint32], 16, "ownerIndex"], [[type, type.uint32], 16, "pickingObjectId"], [[type, type.uint32], 16, "offset"], [[type, type.uint32], 16, "length"], [[type, type.uint64], 16, "recordedFrame"], [[type, type.uint32], 16, "totalVisibleInstances"], [[type, type.uint64], 16, "instanceCount"], [[type, type.uint32], 16, "sphereIndex"], [[type, type.unknown], 16, "CASTS_SHADOW"], [[type, type.unknown], 16, "RENDER_IN_REFLECTION"], [[type, type.uint32], 16, "areaCount"], [[type, type.boolean], 16, "isDynamic"], [[type, type.uint32], 16, "index"], [type.objectRef("TriGeometryRes"), 0, "geometry"], [type.objectRef("MeshGroupHandle"), 0, "handle"], [type.objectRef("StaticPerInstanceData"), 0, "staticInstances"], [type.objectRef("uint8_t"), 0, "data"], [type.objectRef("uint8_t"), 0, "mappedData"], [type.objectRef("Tr2Effect"), 0, "material"], [type.objectRef("CcpMath::Sphere"), 0, "boundingSpheres"], [[type, type.uint32], 16, "combinedVertexDeclaration"], [[type, type.int32, void 0, schema.enum("TriBatchType")], 16, "batchType"], [[type, type.int32, void 0, schema.enum("TriFrustumTestResult")], 16, "lastTestResult"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lastTestResult(this);
  }
  /** dynamicInstances (const DynamicPerInstanceData*) */
  dynamicInstances = _init_dynamicInstances(this, null);

  /** owner (IRootPtr) */
  owner = (_init_extra_dynamicInstances(this), _init_owner(this, null));

  /** buffer (std::unique_ptr<Tr2BufferAL>) */
  buffer = (_init_extra_owner(this), _init_buffer(this, null));

  /** regions (std::vector<Region>) */
  regions = (_init_extra_buffer(this), _init_regions(this, []));

  /** retiredBuffers (std::vector<std::unique_ptr<Tr2BufferAL>>) */
  retiredBuffers = (_init_extra_regions(this), _init_retiredBuffers(this, []));

  /** mappedRetiredBuffers (std::vector<Tr2BufferAL*>) */
  mappedRetiredBuffers = (_init_extra_retiredBuffers(this), _init_mappedRetiredBuffers(this, []));

  /** meshGroups (std::vector<MeshGroup>) */
  meshGroups = (_init_extra_mappedRetiredBuffers(this), _init_meshGroups(this, []));

  /** currentAllocation (InstanceBuffer::Allocation) */
  currentAllocation = (_init_extra_meshGroups(this), _init_currentAllocation(this, null));

  /** screenSizeThresholds (std::vector<float>) */
  screenSizeThresholds = (_init_extra_currentAllocation(this), _init_screenSizeThresholds(this, []));

  /** flags (InstanceFlags) */
  flags = (_init_extra_screenSizeThresholds(this), _init_flags(this, null));

  /** screenSizes (std::vector<float>) */
  screenSizes = (_init_extra_flags(this), _init_screenSizes(this, []));

  /** m_sphereGroups (std::vector<SphereGroup>) */
  sphereGroups = (_init_extra_screenSizes(this), _init_sphereGroups(this, []));

  /** m_perObjectDataBuffer (Tr2GpuStructuredBufferPtr) */
  perObjectDataBuffer = (_init_extra_sphereGroups(this), _init_perObjectDataBuffer(this, null));

  /** m_staticInstanceBuffer (InstanceBuffer) */
  staticInstanceBuffer = (_init_extra_perObjectDataBuffer(this), _init_staticInstanceBuffer(this, null));

  /** m_dynamicInstanceBuffer (InstanceBuffer) */
  dynamicInstanceBuffer = (_init_extra_staticInstanceBuffer(this), _init_dynamicInstanceBuffer(this, null));

  /** worldTransform (Vector4) */
  worldTransform = (_init_extra_dynamicInstanceBuffer(this), _init_worldTransform(this, vec4.create()));

  /** prevWorldTransform (Vector4) */
  prevWorldTransform = (_init_extra_worldTransform(this), _init_prevWorldTransform(this, vec4.create()));

  /** nullptr (other.owner =) */
  nullptr = (_init_extra_prevWorldTransform(this), _init_nullptr(this, null));

  /** InvalidIndex (other.index =) */
  InvalidIndex = (_init_extra_nullptr(this), _init_InvalidIndex(this, null));

  /** bounds (CcpMath::Sphere) */
  bounds = (_init_extra_InvalidIndex(this), _init_bounds(this, null));

  /** radius (float) */
  radius = (_init_extra_bounds(this), _init_radius(this, 0));

  /** maxScreenSize (float) */
  maxScreenSize = (_init_extra_radius(this), _init_maxScreenSize(this, 0));

  /** perObjectDataIndex (uint32_t) */
  perObjectDataIndex = (_init_extra_maxScreenSize(this), _init_perObjectDataIndex(this, 0));

  /** materialHash (uint64_t) */
  materialHash = (_init_extra_perObjectDataIndex(this), _init_materialHash(this, 0));

  /** meshIndex (uint32_t) */
  meshIndex = (_init_extra_materialHash(this), _init_meshIndex(this, 0));

  /** areaIndex (uint32_t) */
  areaIndex = (_init_extra_meshIndex(this), _init_areaIndex(this, 0));

  /** count (uint32_t) */
  count = (_init_extra_areaIndex(this), _init_count(this, 0));

  /** sphereGroupIndex (uint32_t) */
  sphereGroupIndex = (_init_extra_count(this), _init_sphereGroupIndex(this, 0));

  /** ownerIndex (uint32_t) */
  ownerIndex = (_init_extra_sphereGroupIndex(this), _init_ownerIndex(this, 0));

  /** pickingObjectId (uint32_t) */
  pickingObjectId = (_init_extra_ownerIndex(this), _init_pickingObjectId(this, 0));

  /** offset (uint32_t) */
  offset = (_init_extra_pickingObjectId(this), _init_offset(this, 0));

  /** length (uint32_t) */
  length = (_init_extra_offset(this), _init_length(this, 0));

  /** recordedFrame (uint64_t) */
  recordedFrame = (_init_extra_length(this), _init_recordedFrame(this, 0));

  /** totalVisibleInstances (uint32_t) */
  totalVisibleInstances = (_init_extra_recordedFrame(this), _init_totalVisibleInstances(this, 0));

  /** m_instanceCount (size_t) */
  instanceCount = (_init_extra_totalVisibleInstances(this), _init_instanceCount(this, 0));

  /** sphereIndex (uint32_t) */
  sphereIndex = (_init_extra_instanceCount(this), _init_sphereIndex(this, 0));

  /** CASTS_SHADOW (static const uint32_t) */
  CASTS_SHADOW = (_init_extra_sphereIndex(this), _init_CASTS_SHADOW(this, null));

  /** RENDER_IN_REFLECTION (static const uint32_t) */
  RENDER_IN_REFLECTION = (_init_extra_CASTS_SHADOW(this), _init_RENDER_IN_REFLECTION(this, null));

  /** areaCount (uint32_t) */
  areaCount = (_init_extra_RENDER_IN_REFLECTION(this), _init_areaCount(this, 1));

  /** isDynamic (bool) */
  isDynamic = (_init_extra_areaCount(this), _init_isDynamic(this, false));

  /** index (uint32_t) */
  index = (_init_extra_isDynamic(this), _init_index(this, 0));

  /** geometry (TriGeometryRes*) */
  geometry = (_init_extra_index(this), _init_geometry(this, null));

  /** handle (MeshGroupHandle*) */
  handle = (_init_extra_geometry(this), _init_handle(this, null));

  /** staticInstances (const StaticPerInstanceData*) */
  staticInstances = (_init_extra_handle(this), _init_staticInstances(this, null));

  /** data (uint8_t*) */
  data = (_init_extra_staticInstances(this), _init_data(this, null));

  /** mappedData (uint8_t*) */
  mappedData = (_init_extra_data(this), _init_mappedData(this, null));

  /** material (Tr2Effect*) */
  material = (_init_extra_mappedData(this), _init_material(this, null));

  /** boundingSpheres (const CcpMath::Sphere*) */
  boundingSpheres = (_init_extra_material(this), _init_boundingSpheres(this, null));

  /** combinedVertexDeclaration (uint32_t) */
  combinedVertexDeclaration = (_init_extra_boundingSpheres(this), _init_combinedVertexDeclaration(this, 0));

  /** batchType (TriBatchType - enum TriBatchType) */
  batchType = (_init_extra_combinedVertexDeclaration(this), _init_batchType(this, 0));

  /** lastTestResult (TriFrustumTestResult - enum TriFrustumTestResult) */
  lastTestResult = (_init_extra_batchType(this), _init_lastTestResult(this, 0));
  static {
    _initClass();
  }
}

export { _EveInstancedMeshMana as EveInstancedMeshManager };
//# sourceMappingURL=EveInstancedMeshManager.js.map
