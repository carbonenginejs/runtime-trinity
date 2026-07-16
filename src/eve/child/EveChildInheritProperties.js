// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInheritProperties.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInheritProperties.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildInheritProperties_Blue.cpp
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


const COLOR_PROPERTIES = Object.freeze([
  "Primary",
  "Secondary",
  "Tertiary",
  "Black",
  "White",
  "Yellow",
  "Orange",
  "Red",
  "Blue",
  "Green",
  "Cyan",
  "Fire",
  "Hull",
  "Glass",
  "Reactor",
  "Darkhull",
  "Booster",
  "Killmark",
  "PrimaryLight",
  "SecondaryLight",
  "TertiaryLight",
  "WhiteLight",
  "PrimaryHologram",
  "SecondaryHologram",
  "TertiaryHologram",
  "State0",
  "State1",
  "State2",
  "State3",
  "StateVulnerable",
  "StateInvulnerable",
  "PrimaryForcefield",
  "SecondaryForcefield",
  "PrimaryBanner",
  "PrimaryFx",
  "SecondaryFx",
  "PrimarySpotlight",
  "SecondarySpotlight",
  "TertiarySpotlight",
  "PrimaryBillboard",
  "PrimaryWarpFx",
  "PrimaryAttackFx",
  "PrimarySiegeFx",
  "PrimaryDockedFx"
]);


@type.define({ className: "EveChildInheritProperties", family: "eve/child" })
export class EveChildInheritProperties extends CjsModel
{
  @io.read
  @type.color
  Primary = vec4.create();

  @io.read
  @type.color
  Secondary = vec4.create();

  @io.read
  @type.color
  Tertiary = vec4.create();

  @io.read
  @type.color
  Black = vec4.create();

  @io.read
  @type.color
  White = vec4.create();

  @io.read
  @type.color
  Yellow = vec4.create();

  @io.read
  @type.color
  Orange = vec4.create();

  @io.read
  @type.color
  Red = vec4.create();

  @io.read
  @type.color
  Blue = vec4.create();

  @io.read
  @type.color
  Green = vec4.create();

  @io.read
  @type.color
  Cyan = vec4.create();

  @io.read
  @type.color
  Fire = vec4.create();

  @io.read
  @type.color
  Hull = vec4.create();

  @io.read
  @type.color
  Glass = vec4.create();

  @io.read
  @type.color
  Reactor = vec4.create();

  @io.read
  @type.color
  Darkhull = vec4.create();

  @io.read
  @type.color
  Booster = vec4.create();

  @io.read
  @type.color
  Killmark = vec4.create();

  @io.read
  @type.color
  PrimaryLight = vec4.create();

  @io.read
  @type.color
  SecondaryLight = vec4.create();

  @io.read
  @type.color
  TertiaryLight = vec4.create();

  @io.read
  @type.color
  WhiteLight = vec4.create();

  @io.read
  @type.color
  PrimarySpotlight = vec4.create();

  @io.read
  @type.color
  SecondarySpotlight = vec4.create();

  @io.read
  @type.color
  TertiarySpotlight = vec4.create();

  @io.read
  @type.color
  PrimaryHologram = vec4.create();

  @io.read
  @type.color
  SecondaryHologram = vec4.create();

  @io.read
  @type.color
  TertiaryHologram = vec4.create();

  @io.read
  @type.color
  State0 = vec4.create();

  @io.read
  @type.color
  State1 = vec4.create();

  @io.read
  @type.color
  State2 = vec4.create();

  @io.read
  @type.color
  State3 = vec4.create();

  @io.read
  @type.color
  StateVulnerable = vec4.create();

  @io.read
  @type.color
  StateInvulnerable = vec4.create();

  @io.read
  @type.color
  PrimaryForcefield = vec4.create();

  @io.read
  @type.color
  SecondaryForcefield = vec4.create();

  @io.read
  @type.color
  PrimaryBanner = vec4.create();

  @io.read
  @type.color
  PrimaryBillboard = vec4.create();

  @io.read
  @type.color
  PrimaryFx = vec4.create();

  @io.read
  @type.color
  SecondaryFx = vec4.create();

  @io.read
  @type.color
  PrimaryWarpFx = vec4.create();

  @io.read
  @type.color
  PrimaryAttackFx = vec4.create();

  @io.read
  @type.color
  PrimarySiegeFx = vec4.create();

  @io.read
  @type.color
  PrimaryDockedFx = vec4.create();

  #properties = COLOR_PROPERTIES.map(name => this[name]);

  @carbon.method
  @impl.implemented
  SetProperties(colorSet)
  {
    if (!colorSet) return;
    for (let index = 0; index < this.#properties.length; index++)
    {
      vec4.copy(this.#properties[index], colorSet[index]);
    }
  }

  @carbon.method
  @impl.implemented
  GetProperties()
  {
    return this.#properties;
  }
}
