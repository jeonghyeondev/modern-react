import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  kkkkkjjjjh: {
    name: 'kjh',
    description: '하하하하하하,,,,,,,,, 여긴 어디 난 누구,,',
  },
  jay: {
    name: 'jay',
    description: '내일 출근이다~~~~~ ',
  },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자이니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
