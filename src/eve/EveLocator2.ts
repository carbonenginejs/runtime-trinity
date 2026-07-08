// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocator2.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocator2.cpp

import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4 } from "@carbonenginejs/core-math/types";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";

@type.define({ className: "EveLocator2", family: "eve" })
export class EveLocator2 extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.mat4
  transform: Mat4 = mat4.create();

  @carbon.method
  @impl.implemented
  GetName(): string
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name: string): void
  {
    this.name = String(name);
  }

  @carbon.method
  @impl.implemented
  GetTransform(): Mat4
  {
    return this.transform;
  }

  @carbon.method
  @impl.implemented
  SetTransform(value: Mat4): void
  {
    mat4.copy(this.transform, value);
  }
}
