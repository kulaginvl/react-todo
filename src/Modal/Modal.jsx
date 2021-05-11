import React from 'react';
import './Modal.css';

function Modal() {
  const [isOpen, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen({ isOpen: true });
  };
  const toggleClose = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <React.Fragment>
      <button onClick={toggleOpen}>Open M</button>

      {isOpen && (
        <div className="modal">
          <div className="modal_body">
            <h1>Modal title</h1>
            <p> Can't stop Wont't stop</p>
            <button onClick={toggleClose}>Close M</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Modal;
