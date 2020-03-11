import React, { useState } from 'react';

const EventPracticeFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
    address: '',
  });
  const { username, message, address } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.vlaue,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message + ', 주소' + address);
    setForm({
      username: '',
      message: '',
      address: '',
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="시용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        vlaue={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <input
        type="text"
        name="address"
        placeholder="주소를 입력하세요."
        value={address}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFunction;
