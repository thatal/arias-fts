import React from "react"

export const Signup = () => {
  return (
    <div className="form">
      <div>
        <h1>Sign Up</h1>
      </div>
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input className="input" type="text" />

        <label className="label">Email</label>
        <input className="input" type="email" />

        <label className="label">Password</label>
        <input className="input" type="password" />
        <div>
          {/* <button className="btn"> Go to Sign In</button> */}
        </div>
      </form>
    </div>
  );
};
