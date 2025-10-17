import React, { use } from "react";
import { Link } from "react-router";
import AuthProvider from "../../context/AuthContext/AuthProvider";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
  // will declare the authcontext first then we can destructure
   const {signInUser} = use(AuthContext)

   const handleLogIn= (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password =e.target.password.value;
    console.log(email, password)
    signInUser(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error=> {
      console.log(error.message)
    })
   }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                {/* email field here  */}
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                {/* password field here  */}
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              Dont have an account{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
