import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { logIn, googleSignIn, gitHubSignIn } = useContext(UserContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    console.log(email, password);
    // email password login
    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
      });
  };
  // google login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  // gitHub signin
  const handleGitSignIn = () => {
    gitHubSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-600">
              <small>{error}</small>
            </p>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center space-y-2">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-sm btn-outline btn-wide w-full text-primary"
              >
                LogIn With Google
              </button>
              <button
                onClick={handleGitSignIn}
                className="btn btn-sm btn-outline btn-wide w-full text-sky-600"
              >
                LogIn With GitHub
              </button>
            </div>
            <Link to="/registration">
              <button className="btn btn-link">New Here?</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;