import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.Init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loadding, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoadding, gitError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || gitUser);

  let signInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loadding || gitLoadding) {
    return <Loading></Loading>;
  }

  if (error || gitError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gitError?.message}</small>
      </p>
    );
  }
  const googleSingin = () => {
    signInWithGoogle();
  };
  const gitHublogin = () => {
    signInWithGithub();
  };

  return (
    <div>
      {signInError}
      <div>
        <div className="divider">OR</div>
        <button
          onClick={googleSingin}
          className="btn btn-secondary my-2 text-xl w-full text-black"
        >
          <FcGoogle className="mr-5 text-4xl" />
          Google Login
        </button>
        <button
          onClick={gitHublogin}
          className="btn btn-secondary text-xl w-full text-black my-2"
        >
          <FaGithub className="mr-5 text-4xl" />
          GitHub Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
