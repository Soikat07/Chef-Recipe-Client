import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center space-y-2">
              <button
                className="btn btn-sm btn-outline btn-wide w-full text-primary"
              >
                Sign In With Google
              </button>
              <button 
                className="btn btn-sm btn-outline btn-wide w-full text-sky-600"
              >
                Sign In With GitHub
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