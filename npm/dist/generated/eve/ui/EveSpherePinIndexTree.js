import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_Face, _init_extra_Face, _init_TreeNode, _init_extra_TreeNode, _init_granny, _init_extra_granny, _init_tree, _init_extra_tree, _init_faces, _init_extra_faces, _init_initialized, _init_extra_initialized, _init_markedFaces, _init_extra_markedFaces;

/** EveSpherePinIndexTree (eve/ui) - generated from schema shapeHash 71effefa.... */
let _EveSpherePinIndexTre;
class EveSpherePinIndexTree extends CjsModel {
  static {
    ({
      e: [_init_Face, _init_extra_Face, _init_TreeNode, _init_extra_TreeNode, _init_granny, _init_extra_granny, _init_tree, _init_extra_tree, _init_faces, _init_extra_faces, _init_initialized, _init_extra_initialized, _init_markedFaces, _init_extra_markedFaces],
      c: [_EveSpherePinIndexTre, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpherePinIndexTree",
      family: "eve/ui"
    })], [[[type, type.unknown], 16, "Face"], [[type, type.unknown], 16, "TreeNode"], [type.objectRef("TriGrannyRes"), 0, "granny"], [type.objectRef("TreeNode"), 0, "tree"], [type.objectRef("Face"), 0, "faces"], [[type, type.int32], 16, "initialized"], [type.list("Face"), 0, "markedFaces"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_markedFaces(this);
  }
  /** Face (struct) */
  Face = _init_Face(this, null);

  /** TreeNode (struct) */
  TreeNode = (_init_extra_Face(this), _init_TreeNode(this, null));

  /** m_granny (TriGrannyResPtr) */
  granny = (_init_extra_TreeNode(this), _init_granny(this, null));

  /** m_tree (TreeNode*) */
  tree = (_init_extra_granny(this), _init_tree(this, 0));

  /** m_faces (Face*) */
  faces = (_init_extra_tree(this), _init_faces(this, 0));

  /** m_initialized (int) */
  initialized = (_init_extra_faces(this), _init_initialized(this, 0));

  /** m_markedFaces (std::vector<Face*>) */
  markedFaces = (_init_extra_initialized(this), _init_markedFaces(this, []));
  static {
    _initClass();
  }
}

export { _EveSpherePinIndexTre as EveSpherePinIndexTree };
//# sourceMappingURL=EveSpherePinIndexTree.js.map
