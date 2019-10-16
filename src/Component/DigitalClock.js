import React, { Component } from 'react';
import './DigitalClock.css';
// import styles from './DigitalClock.css'; 
// cannot use css module here because haven't setup yet
// https://blog.pusher.com/css-modules-react/

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    // create an interval once the component is mounted
    setInterval(this.clockTicking, 1000);
  }

  // update every 1000 ms
  clockTicking = () => {
    this.setState({
      time: new Date()
    });
  }

  componentWillUnmount() {
    // delete the interval before the component is unmounted
    clearInterval(this.clockTicking);
  }

  render() {
    const time = this.state.time;
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    return (
      // <div className={styles.outBox}>
      <div className="outBox">
        <div>
          <h1 className="titleText">Current Local Time</h1>
          <h2 className="digitalClock">
            {/* use ES6 Template literals, backtick string */}
            {`${h % 12} : ${(m < 10 ? '0' + m : m)} : ${(s < 10 ? '0' + s : s)} ${h < 12 ? 'am' : 'pm'}`}
          </h2>
        </div>
        <p>OR</p>
        <div>
          <h2 className="digitalClock">
            {/* use buildin Date function toLocaleTimeString*/}
            {time.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    );
  }
}

export default DigitalClock;