import React from "react";
import { IModalService } from "./ModalService.interface";

class ModalService implements IModalService {
  on = (event: string, callback: Function) => {
    document.addEventListener(event, (e: any) => callback(e.detail));
  };

  open = (component: React.FunctionComponent<any>, props = {}) => {
    document.dispatchEvent(
      new CustomEvent("openModal", { detail: { component, props } })
    );
  };

  close = (component: React.FunctionComponent<any>) => {
    document.dispatchEvent(
      new CustomEvent("closeModal", { detail: { component } })
    );
  };

  forceCloseAll = () => {
    document.dispatchEvent(new CustomEvent("forceCloseAll"));
  };
}

export default new ModalService();
