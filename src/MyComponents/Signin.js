import React from 'react';

export const Signin = () => {
  return (
    <div className="form">
      <div>
        <h1>Sign In</h1>
      </div>
      <form>
        {/* Labels and inputs for form data */}
        {/* <label className="label">Name</label>
        <input
          className="input"
          type="text"
        /> */}

        <label className="label">Email</label>
        <input className="input" type="email" />

        <label className="label">Password</label>
        <input className="input" type="password" />

        <button className="btn" type="submit">
          Sign In
        </button>
        {/* <button className="btn"> Go to Sign In</button> */}
      </form>
    </div>
  );
}
