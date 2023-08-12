import React, { Component } from 'react';
import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';

export class App extends Component  {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  }
  render() {
    return (
      <>
        <button type='button' onClick={this.toggleModal}>show modal</button>
        {this.state.showModal &&
          <Modal onClose={this.toggleModal}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil qui est suscipit odio tempore, earum enim aliquam veniam possimus aperiam explicabo deleniti pariatur deserunt reprehenderit molestiae, omnis eligendi! Fuga, similique?</p>
            <button type='button' onClick={this.toggleModal}> Close modal</button></Modal>}
       {/* {this.state.showModal&&<Clock></Clock>} */}
           </>
    );
  }
};
