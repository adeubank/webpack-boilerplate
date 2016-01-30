import React, {Component} from 'react';  //eslint-disable-line no-unused-vars
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        Well isn't this grand? {config.greetText}
      </div>
    );
  }
}

export default Greeter;
