import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Open M</button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal_body">
              <h1>Modal title</h1>
              <p> Can't stop Wont't stop</p>
              <button onClick={() => this.setState({ isOpen: false })}>Close M</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
