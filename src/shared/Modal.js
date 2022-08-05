import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import CartModal from "../components/CartModal";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2 className="h2Tag">{props.header}</h2>
      </header>
      <div className={`modal__content ${props.contentClass}`}>
        {
          <CartModal
            contentM={props.content}
            TI={props.totalItem}
            TA={props.totalAmount}
          />
        }
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
