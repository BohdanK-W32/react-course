import React, { Component } from 'react';
import styles from './Dropdown.module.css';

export default class Dropdown extends Component {
  static defaultProps = {
    isOpen: false,
  };

  state = { isOpen: this.props.isOpen };

  show = () => {
    this.setState({ isOpen: true });
  };

  hide = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={isOpen ? this.hide : this.show}
        >
          &#9776;
        </button>
        {isOpen && (
          <ul className={styles.list}>
            <li className={styles.option}>Option 1</li>
            <li className={styles.option}>Option 2</li>
            <li className={styles.option}>Option 3</li>
            <li className={styles.option}>Option 4</li>
            <li className={styles.option}>Option 5</li>
            <li className={styles.option}>Option 6</li>
          </ul>
        )}
      </div>
    );
  }
}
