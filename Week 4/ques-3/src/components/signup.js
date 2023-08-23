import React, { useState } from 'react';

function SignUp() {

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSignUp = () => {
    alert(
      `\nFirst Name: ${userDetails.firstName}\nLast Name: ${userDetails.lastName}\nEmail: ${userDetails.email}`
    );
  };

  
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </div>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
