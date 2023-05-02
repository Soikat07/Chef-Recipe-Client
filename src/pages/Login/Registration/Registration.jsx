import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(UserContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one upper case letter');
      return;
    } else if (password.length < 6) {
      setError('Your password should be at least 6 characters');
      return;
    }
    setError('');
    // console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        //update userProfile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log('User Profile Updated');
          })
          .catch(error => {
            console.error(error.message);
          });
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-2">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account?Login
              </Link>
            </label>
            <p className="text-red-600">
              <small>{error}</small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
