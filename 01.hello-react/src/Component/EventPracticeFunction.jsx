import React, { useState } from 'react';

const EventPracticeFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
    address: '',
  });
  // 한줄공란이 안먹음 .prettierrc 때문에 설정을 바꿔야함.
  const { username, message, address } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onSubmit = e => {
    e.preventDefault();
    alert(username + ': ' + message + ', 주소' + address);
    setForm({
      username: '',
      message: '',
      address: '',
    });
  };
  return (
    <form onSubmit={onSubmit}>
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
      ></input>
      <input
        type="text"
        name="address"
        placeholder="주소를 입력하세요."
        value={address}
        onChange={onChange}
      ></input>
      <button type="submit">확인</button>
    </form>
  );
};

export default EventPracticeFunction;
