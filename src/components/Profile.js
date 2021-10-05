import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
console.log(user);
  return <div>
    <img
        src={user && user.picture}
        alt="Profile"
        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
      />
    Username: {user.name}</div>;
}
//profile
export default Profile;