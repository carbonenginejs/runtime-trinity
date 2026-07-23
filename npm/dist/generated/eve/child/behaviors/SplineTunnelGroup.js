import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { SplineTunnel as _SplineTunnel } from '../../../../eve/child/behaviors/SplineTunnel.js';
import { SplineTunnelPoint as _SplineTunnelPoint } from '../../../../eve/child/behaviors/SplineTunnelPoint.js';

let _initProto, _initClass, _init_tunnels, _init_extra_tunnels, _init_tunnelGroupType, _init_extra_tunnelGroupType, _init_curveSets, _init_extra_curveSets, _init_breakPoints, _init_extra_breakPoints, _init_tunnelWidth, _init_extra_tunnelWidth, _init_entrancePullSize, _init_extra_entrancePullSize, _init_entrySize, _init_extra_entrySize;

/** SplineTunnelGroup (eve/child/behaviors) - generated from schema shapeHash da595535.... */
let _SplineTunnelGroup;
new class extends _identity {
  static [class SplineTunnelGroup extends CjsModel {
    static {
      ({
        e: [_init_tunnels, _init_extra_tunnels, _init_tunnelGroupType, _init_extra_tunnelGroupType, _init_curveSets, _init_extra_curveSets, _init_breakPoints, _init_extra_breakPoints, _init_tunnelWidth, _init_extra_tunnelWidth, _init_entrancePullSize, _init_extra_entrancePullSize, _init_entrySize, _init_extra_entrySize, _initProto],
        c: [_SplineTunnelGroup, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "SplineTunnelGroup",
        family: "eve/child/behaviors"
      })], [[type.list("SplineTunnel"), 0, "tunnels"], [[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("TunnelGroupType")], 16, "tunnelGroupType"], [[io, io.notify, io, io.persist, void 0, type.list("Tr2CurveVector3")], 16, "curveSets"], [[io, io.notify, io, io.persist, type, type.int32], 16, "breakPoints"], [[io, io.notify, io, io.persist, type, type.float32], 16, "tunnelWidth"], [[io, io.notify, io, io.persist, type, type.float32], 16, "entrancePullSize"], [[io, io.notify, io, io.persist, type, type.float32], 16, "entrySize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTunnelGroupType"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSystemTunnelFunctionReferenceAndColor"], [[carbon, carbon.method, impl, impl.adapted], 18, "createSplineTunnels"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Lazily builds the tunnels on first access because the Blue curve-set list notify does not exist in JS.")], 18, "GetTunnels"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCurveSets"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetNumBreakPoints"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetNumBreakPoints"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnModified"]], 0, void 0, CjsModel));
    }
    /** CPU spline tunnel records rebuilt from the authored curve sets. */
    tunnels = (_initProto(this), _init_tunnels(this, []));

    /** m_tunnelGroupType (TunnelGroupType - enum TunnelGroupType) [READWRITE, PERSIST, NOTIFY, ENUM] */
    tunnelGroupType = (_init_extra_tunnels(this), _init_tunnelGroupType(this, 2));

    /** m_curveSets (PTr2CurveVector3Vector) [READ, PERSIST, NOTIFY] */
    curveSets = (_init_extra_tunnelGroupType(this), _init_curveSets(this, []));

    /** m_numBreakPoints (int32_t) [READWRITE, PERSIST, NOTIFY] */
    breakPoints = (_init_extra_curveSets(this), _init_breakPoints(this, 2));

    /** m_tunnelWidth (float) [READWRITE, PERSIST, NOTIFY] */
    tunnelWidth = (_init_extra_breakPoints(this), _init_tunnelWidth(this, 15));

    /** m_entrancePullSize (float) [READWRITE, PERSIST, NOTIFY] */
    entrancePullSize = (_init_extra_tunnelWidth(this), _init_entrancePullSize(this, 50));

    /** m_entrySize (float) [READWRITE, PERSIST, NOTIFY] */
    entrySize = (_init_extra_entrancePullSize(this), _init_entrySize(this, 20));

    // Owner callback into the system/behavior tunnel registry (Carbon
    // m_changeSystemTunnelRegistry) and its debug color.
    #changeSystemTunnelRegistry = (_init_extra_entrySize(this), null);
    #debugColor = 0xffffff00;

    // Re-entrancy guard: the registry callback may ask for the tunnels while
    // they are being rebuilt.
    #creatingTunnels = false;

    /** Carbon SplineTunnelGroup::GetTunnelGroupType (cpp:24-27). */
    GetTunnelGroupType() {
      return this.tunnelGroupType;
    }

    /**
     * Stores the owner's tunnel-registry callback and debug color, then
     * rebuilds the tunnels (Carbon SetSystemTunnelFunctionReferenceAndColor,
     * cpp:30-35).
     * @param {Function} callback
     * @param {Number} color - debug color (retained for parity; debug rendering is omitted)
     */
    SetSystemTunnelFunctionReferenceAndColor(callback, color = 0xffffff00) {
      this.#changeSystemTunnelRegistry = typeof callback === "function" ? callback : null;
      this.#debugColor = color >>> 0;
      this.createSplineTunnels();
    }

    /** Carbon method createSplineTunnels -> CreateSplineTunnels (cpp:37-79). */
    createSplineTunnels() {
      if (this.#creatingTunnels) {
        return this.tunnels;
      }
      this.#creatingTunnels = true;
      this.tunnels.length = 0;
      const breakPoints = this.GetNumBreakPoints();
      for (const curve of this.curveSets) {
        if (!curve?.Length || !curve?.GetValue) {
          continue;
        }
        const duration = curve.Length();
        const step = duration / (breakPoints + 1);
        const positions = [];
        for (let index = 0; index < breakPoints + 2; index++) {
          positions.push(curve.GetValue(index * step, vec3.create()));
        }
        const tunnel = new _SplineTunnel();
        for (let index = 0; index < positions.length; index++) {
          const point = new _SplineTunnelPoint();
          vec3.copy(point.pos, positions[index]);
          const previous = index === positions.length - 1 ? positions[index - 1] : positions[index];
          const next = index === positions.length - 1 ? positions[index] : positions[index + 1];
          vec3.subtract(point.rot, next, previous);
          tunnel.splinePoints.push(point);
        }
        tunnel.cylWidth = this.tunnelWidth;
        tunnel.pullSize = this.entrancePullSize;
        tunnel.pointOfNoReturnSize = this.entrySize;
        tunnel.tunnelGroupType = this.tunnelGroupType;
        this.tunnels.push(tunnel);
      }
      this.#creatingTunnels = false;
      if (this.#changeSystemTunnelRegistry) {
        this.#changeSystemTunnelRegistry();
      }
      return this.tunnels;
    }

    /**
     * Returns the tunnel records (Carbon GetTunnels, cpp:81-84), building them
     * lazily when curves are present - the JS load path has no Blue notify to
     * trigger the first CreateSplineTunnels.
     */
    GetTunnels() {
      if (this.tunnels.length === 0 && this.curveSets.length !== 0 && !this.#creatingTunnels) {
        this.createSplineTunnels();
      }
      return this.tunnels;
    }

    /** Carbon SplineTunnelGroup::GetCurveSets (cpp:86-89). */
    GetCurveSets() {
      return this.curveSets;
    }

    /** Carbon SplineTunnelGroup::SetNumBreakPoints (cpp:91-94). */
    SetNumBreakPoints(value) {
      this.breakPoints = Number(value) | 0;
    }

    /** Carbon SplineTunnelGroup::GetNumBreakPoints (cpp:96-99). */
    GetNumBreakPoints() {
      return Math.max(this.breakPoints, 0);
    }

    /** Carbon SplineTunnelGroup::Initialize (cpp:104-107). */
    Initialize() {
      return true;
    }

    /** Carbon SplineTunnelGroup::OnModified (cpp:112-117): any property change
     * rebuilds the tunnels. */
    OnModified(_value = null) {
      this.createSplineTunnels();
      return true;
    }
  }];
  TunnelGroupType = Object.freeze({
    EXIT_TUNNELS: 0,
    ENTRANCE_TUNNELS: 1,
    OTHER_TUNNELS: 2
  });
  constructor() {
    super(_SplineTunnelGroup), _initClass();
  }
}();

export { _SplineTunnelGroup as SplineTunnelGroup };
//# sourceMappingURL=SplineTunnelGroup.js.map
