import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
    address: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    alert(
      this.state.username +
        ': ' +
        this.state.message +
        ', 주소는 ?' +
        this.state.address,
    );
    this.setState({
      username: '',
      message: '',
      address: '',
    });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="시용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          vlaue={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <input
          type="text"
          name="address"
          placeholder="주소를 입력하세요."
          value={this.state.address}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
