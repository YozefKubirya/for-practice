import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
   componentDidMount() {
      console.log('Componenet did mount')
      window.addEventListener('keydown',this.handleKeyDown
      )
   }

   componentWillUnmount() {
      console.log('component has unmoumt')
      window.removeEventListener('keydown',this.handleKeyDown)
   }

   handleKeyDown = e => {
         if (e.code === 'Escape') {
            console.log('modal has closed');
            this.props.onClose();
         }
      }

   handleBackDropClick = e => {
      if (e.currentTarget === e.target) {
         this.props.onClose();
     } 
   }
   render() {
      return createPortal (
        <>
      <div className={css.Modal__backdrop} onClick={this.handleBackDropClick}>
        <div className={css.Modal__content}>{this.props.children}</div>
      </div>,
         </>,modalRoot
      )
   }
}
 