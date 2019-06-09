import React, { Component } from 'react';
import styles from './Counter.module.css';

export default class Counter extends Component {
  static defaultProps = { step: 1 };

  state = {
    value: this.props.init,
  };

  increment = () => {
    const { step } = this.props;
    const { value } = this.state;
    this.setState({ value: value + step });
  };

  decrement = () => {
    const { step } = this.props;
    const { value } = this.state;
    this.setState({ value: value - step });
  };

  render() {
    const { value } = this.state;
    const { step } = this.props;
    return (
      <div className={styles.wrapper}>
        <button className={styles.btn} type="button" onClick={this.increment}>
          Increment by {step}
        </button>
        <span className={styles.value}>{value}</span>
        <button className={styles.btn} type="button" onClick={this.decrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
