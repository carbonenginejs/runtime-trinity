import { CjsParameter } from './CjsParameter.js';

class CjsVectorParameter extends CjsParameter {
  static isVectorDestination(value, length) {
    return CjsVectorParameter.isWritableNumberArray(value, length);
  }
  static readVectorDestination(destination, out, length) {
    for (let i = 0; i < length; i++) {
      out[i] = destination[i];
    }
    return out;
  }
  static writeVectorDestination(destination, value, length) {
    for (let i = 0; i < length; i++) {
      destination[i] = value[i];
    }
  }
  static copyNumberArray(out, value, length) {
    for (let i = 0; i < length; i++) {
      out[i] = value[i];
    }
    return out;
  }
}

export { CjsVectorParameter };
//# sourceMappingURL=CjsVectorParameter.js.map
