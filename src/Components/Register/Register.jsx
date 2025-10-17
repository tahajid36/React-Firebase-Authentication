import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Register = () => {
  const {createUser} = use(AuthContext)

  const handleRegister=(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
// 2 props given to createUser and it came from the authProvider comp
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error=> console.log(error.message))

    
  }

    // const handleRegister = (e) => {
    //     e.preventDefault()
    //     const Email = e.target.email.value;
    //     const Password = e.target.password.value;
    //     const Name = e.target.username.value;
    //     console.log(Email, Password , Name)

    //     createUserWithEmailAndPassword(auth, Email, Password)
    //     .then(result=>{
    //         console.log(result)
    //     })
    //     .catch(error => {
    //         console.log(error.message)
    //     })

    // }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          {/* email field here  */}
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Username</label>
          {/* name field here  */}
          <input name='username' type="text" className="input" placeholder="Username" />
          <label className="label">Password</label>
          {/* password field here  */}
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>

        <p>Already have an account <Link to='/login' className='text-blue-500'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;