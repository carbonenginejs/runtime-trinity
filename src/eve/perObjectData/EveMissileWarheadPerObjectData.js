// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveMissileWarhead.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\EveMissileWarhead.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "EveMissileWarheadPerObjectData", family: "eve/perObjectData" })
export class EveMissileWarheadPerObjectData extends CjsModel
{
  @type.mat4
  world = mat4.create();

  @type.vec4
  missileSize = vec4.create();
}
