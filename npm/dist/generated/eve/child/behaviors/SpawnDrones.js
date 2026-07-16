import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_gridSpacing, _init_extra_gridSpacing, _init_gridFullnessFactor, _init_extra_gridFullnessFactor, _init_regenerateDrones, _init_extra_regenerateDrones, _init_count, _init_extra_count, _init_seconds, _init_extra_seconds, _init_addOnGrid, _init_extra_addOnGrid, _init_addByCount, _init_extra_addByCount, _init_enabled, _init_extra_enabled, _init_time, _init_extra_time, _init_spawnPosition, _init_extra_spawnPosition, _init_gridInfo, _init_extra_gridInfo;

/** SpawnDrones (eve/child/behaviors) - generated from schema shapeHash 14b72cf1.... */
let _SpawnDrones;
class SpawnDrones extends CjsModel {
  static {
    ({
      e: [_init_gridSpacing, _init_extra_gridSpacing, _init_gridFullnessFactor, _init_extra_gridFullnessFactor, _init_regenerateDrones, _init_extra_regenerateDrones, _init_count, _init_extra_count, _init_seconds, _init_extra_seconds, _init_addOnGrid, _init_extra_addOnGrid, _init_addByCount, _init_extra_addByCount, _init_enabled, _init_extra_enabled, _init_time, _init_extra_time, _init_spawnPosition, _init_extra_spawnPosition, _init_gridInfo, _init_extra_gridInfo, _initProto],
      c: [_SpawnDrones, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "SpawnDrones",
      family: "eve/child/behaviors"
    })], [[[io, io.persist, type, type.vec3], 16, "gridSpacing"], [[io, io.notify, io, io.persist, type, type.float32], 16, "gridFullnessFactor"], [[io, io.readwrite, type, type.boolean], 16, "regenerateDrones"], [[io, io.persist, type, type.int32], 16, "count"], [[io, io.persist, type, type.float32], 16, "seconds"], [[io, io.persist, type, type.boolean], 16, "addOnGrid"], [[io, io.persist, type, type.boolean], 16, "addByCount"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.persist, type, type.float32], 16, "time"], [[io, io.persist, type, type.vec3], 16, "spawnPosition"], [[io, io.notify, io, io.persist, type, type.vec4], 16, "gridInfo"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "gridToggleReset"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_gridInfo(this);
  }
  /** m_gridSpacing (Vector3) [READWRITE, PERSIST] */
  gridSpacing = (_initProto(this), _init_gridSpacing(this, vec3.create()));

  /** m_gridFullnessFactor (float) [READWRITE, PERSIST, NOTIFY] */
  gridFullnessFactor = (_init_extra_gridSpacing(this), _init_gridFullnessFactor(this, 1));

  /** m_regenerateDrones (bool) [READWRITE] */
  regenerateDrones = (_init_extra_gridFullnessFactor(this), _init_regenerateDrones(this, true));

  /** m_count (int) [READWRITE, PERSIST] */
  count = (_init_extra_regenerateDrones(this), _init_count(this, 1));

  /** m_seconds (float) [READWRITE, PERSIST] */
  seconds = (_init_extra_count(this), _init_seconds(this, -1));

  /** m_addOnGrid (bool) [READWRITE, PERSIST] */
  addOnGrid = (_init_extra_seconds(this), _init_addOnGrid(this, false));

  /** m_addByCount (bool) [READWRITE, PERSIST] */
  addByCount = (_init_extra_addOnGrid(this), _init_addByCount(this, false));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_addByCount(this), _init_enabled(this, true));

  /** m_time (float) [READ, PERSIST] */
  time = (_init_extra_enabled(this), _init_time(this, 0));

  /** m_spawnPosition (Vector3) [READWRITE, PERSIST] */
  spawnPosition = (_init_extra_time(this), _init_spawnPosition(this, vec3.create()));

  /** m_gridInfo (Vector4) [READWRITE, PERSIST, NOTIFY] */
  gridInfo = (_init_extra_spawnPosition(this), _init_gridInfo(this, vec4.fromValues(1, 1, 1, 10)));

  /** Carbon method gridToggleReset -> GridToggleReset (MAP_METHOD_AND_WRAP). */
  gridToggleReset(...args) {
    throw new Error("SpawnDrones.gridToggleReset is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _SpawnDrones as SpawnDrones };
//# sourceMappingURL=SpawnDrones.js.map
