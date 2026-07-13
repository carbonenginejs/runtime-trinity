import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveChildMesh as _EveChildMesh } from '../../../eve/child/EveChildMesh.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_linkStrengthCurves, _init_extra_linkStrengthCurves, _init_linkStrengthBindings, _init_extra_linkStrengthBindings, _init_linkBarrier, _init_extra_linkBarrier, _init_currentDistance, _init_extra_currentDistance, _init_currentDirection, _init_extra_currentDirection, _init_target, _init_extra_target, _init_linkStrength, _init_extra_linkStrength, _init_targetRadius, _init_extra_targetRadius;

/** EveChildLink (eve/child) - generated from schema shapeHash 9d53a00b.... */
let _EveChildLink;
class EveChildLink extends _EveChildMesh {
  static {
    ({
      e: [_init_linkStrengthCurves, _init_extra_linkStrengthCurves, _init_linkStrengthBindings, _init_extra_linkStrengthBindings, _init_linkBarrier, _init_extra_linkBarrier, _init_currentDistance, _init_extra_currentDistance, _init_currentDirection, _init_extra_currentDirection, _init_target, _init_extra_target, _init_linkStrength, _init_extra_linkStrength, _init_targetRadius, _init_extra_targetRadius],
      c: [_EveChildLink, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildLink",
      family: "eve/child"
    })], [[[io, io.persist, void 0, type.list("ITriFunction")], 16, "linkStrengthCurves"], [[io, io.persist, void 0, type.list("ITr2ValueBinding")], 16, "linkStrengthBindings"], [[io, io.readwrite, type, type.float32], 16, "linkBarrier"], [[io, io.read, type, type.float32], 16, "currentDistance"], [[io, io.read, type, type.vec3], 16, "currentDirection"], [[io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "target"], [[io, io.read, type, type.float32], 16, "linkStrength"], [[io, io.readwrite, type, type.float32], 16, "targetRadius"]], 0, void 0, _EveChildMesh));
  }
  constructor(...args) {
    super(...args);
    _init_extra_targetRadius(this);
  }
  /** m_linkStrengthCurves (PITriFunctionVector) [READ, PERSIST] */
  linkStrengthCurves = _init_linkStrengthCurves(this, []);

  /** m_linkStrengthBindings (PITr2ValueBindingVector) [READ, PERSIST] */
  linkStrengthBindings = (_init_extra_linkStrengthCurves(this), _init_linkStrengthBindings(this, []));

  /** m_linkBarrier (float) [READWRITE] */
  linkBarrier = (_init_extra_linkStrengthBindings(this), _init_linkBarrier(this, 1));

  /** m_currentDistance (float) [READ] */
  currentDistance = (_init_extra_linkBarrier(this), _init_currentDistance(this, 0));

  /** m_currentDirection (Vector3) [READ] */
  currentDirection = (_init_extra_currentDistance(this), _init_currentDirection(this, vec3.fromValues(0, 0, 1)));

  /** m_target (ITriVectorFunctionPtr) [READWRITE] */
  target = (_init_extra_currentDirection(this), _init_target(this, null));

  /** m_linkStrength (float) [READ] */
  linkStrength = (_init_extra_target(this), _init_linkStrength(this, 0));

  /** m_targetRadius (float) [READWRITE] */
  targetRadius = (_init_extra_linkStrength(this), _init_targetRadius(this, 0.5));
  static {
    _initClass();
  }
}

export { _EveChildLink as EveChildLink };
//# sourceMappingURL=EveChildLink.js.map
