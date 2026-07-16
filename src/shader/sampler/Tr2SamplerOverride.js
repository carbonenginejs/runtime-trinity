// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Shader/Tr2Effect.h
// Hand-maintained from Tr2Effect.cpp's Blue structure definition and defaults.
import { schema, type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { Tr2RenderContext } from "../../trinityCore/Tr2RenderContext.js";

/** Tr2SamplerOverride (shader) - generated from schema shapeHash b3478476.... */
@type.define({ className: "Tr2SamplerOverride", family: "shader" })
export class Tr2SamplerOverride extends CjsModel
{

  /** name (BlueSharedString) */
  @type.string
  name = "";

  /** addressU (Tr2RenderContextEnum::TextureAddressMode - enum Tr2RenderContextEnum) */
  @type.int32
  @schema.enum("TextureAddressMode")
  addressU = 1;

  /** addressV (Tr2RenderContextEnum::TextureAddressMode - enum Tr2RenderContextEnum) */
  @type.int32
  @schema.enum("TextureAddressMode")
  addressV = 1;

  /** addressW (Tr2RenderContextEnum::TextureAddressMode - enum Tr2RenderContextEnum) */
  @type.int32
  @schema.enum("TextureAddressMode")
  addressW = 1;

  /** filter (Tr2RenderContextEnum::TextureFilter) */
  @type.int32
  @schema.enum("TextureFilter")
  filter = 2;

  /** mipFilter (Tr2RenderContextEnum::TextureFilter) */
  @type.int32
  @schema.enum("TextureFilter")
  mipFilter = 2;

  /** lodBias (float) */
  @type.float32
  lodBias = 0;

  /** maxMipLevel (uint32_t) */
  @type.uint32
  maxMipLevel = 0;

  /** maxAnisotropy (uint32_t) */
  @type.uint32
  maxAnisotropy = 4;

  static TextureAddressMode = Tr2RenderContext.TextureAddressMode;

  static TextureFilter = Tr2RenderContext.TextureFilter;

}
