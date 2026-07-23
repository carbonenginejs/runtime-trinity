// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Tr2PyValueBinding.h
// Promoted to hand-maintained source 2026-07-23 (Carbon-verified property shell; schema trinityCore/Tr2PyValueBinding.json.).
import { io, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

/** Tr2PyValueBinding (trinityCore) - generated from schema shapeHash 435f9fdc.... */
@type.define({ className: "Tr2PyValueBinding", family: "trinityCore" })
export class Tr2PyValueBinding extends CjsModel
{

  /** m_destinationAttribute (std::string) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.string
  destinationAttribute = "";

  /** m_sourceAttribute (std::string) [READWRITE, NOTIFY, PERSIST] */
  @io.notify
  @io.persist
  @type.string
  sourceAttribute = "";

  /** m_destinationObject (PyObject*) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.objectRef("PyObject")
  destinationObject = null;

  /** m_name (std::string) [READWRITE, PERSIST] */
  @io.persist
  @type.string
  name = "";

  /** m_sourceObject (PyObject*) [READWRITE, NOTIFY] */
  @io.notify
  @io.readwrite
  @type.objectRef("PyObject")
  sourceObject = null;

  /** m_isValid (bool) [READ] */
  @io.read
  @type.boolean
  isValid = false;

}
