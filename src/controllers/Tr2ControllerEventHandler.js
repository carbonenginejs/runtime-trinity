// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerEventHandler.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2ControllerEventHandler.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { BELIST_EVENTMASK, BELIST_INSERTED, BELIST_REMOVED } from "./contracts.js";


@type.define({
  className: "Tr2ControllerEventHandler",
  family: "controllers"
})
export class Tr2ControllerEventHandler extends CjsModel
{
  @io.persist
  @type.list("ITr2ControllerAction")
  actions = [];

  @io.persist
  @type.string
  name = "";

  #controller = null;

  /**
   * Handles Carbon list notifications for inserted and removed actions.
   */
  @carbon.method
  @impl.implemented
  OnListModified(event, _key = 0, _key2 = 0, value = null, list = this.actions)
  {
    if (list !== this.actions)
    {
      return;
    }
    const action = Tr2ControllerEventHandler.#asControllerAction(value);
    switch (event & BELIST_EVENTMASK)
    {
      case BELIST_INSERTED:
        if (this.#controller && action)
        {
          action.Link?.(this.#controller);
        }
        break;
      case BELIST_REMOVED:
        action?.Unlink?.();
        break;
    }
  }

  /**
   * Links all actions to the supplied action controller.
   */
  @carbon.method
  @impl.implemented
  Link(controller)
  {
    this.Unlink();
    this.#controller = controller;
    for (const action of this.actions)
    {
      action.Link?.(controller);
    }
  }

  /**
   * Unlinks all actions from the current controller.
   */
  @carbon.method
  @impl.implemented
  Unlink()
  {
    if (!this.#controller)
    {
      return;
    }
    for (const action of this.actions)
    {
      action.Unlink?.();
    }
  }

  /**
   * Gets the authored handler name.
   */
  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  /**
   * Executes all actions by starting them first, then stopping them.
   */
  @carbon.method
  @impl.implemented
  Execute(controller)
  {
    for (const action of this.actions)
    {
      action.Start?.(controller);
    }
    for (const action of this.actions)
    {
      action.Stop?.(controller);
    }
  }

  static #asControllerAction(value)
  {
    return value && typeof value === "object" ? value : null;
  }
}
