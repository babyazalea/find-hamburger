import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const GoogleLogin = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [tokenLoading, setTokenLoading] = useState(true);

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const location = useLocation();
  const queryToken = location.hash.split("&")[1].split("=")[1];

  useEffect(() => {
    if (queryToken) {
      setAccessToken(queryToken);
      setTokenLoading(false);
    }
  }, [queryToken]);

  const loginWithGoogleInFirebase = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const authData = {
      postBody: `access_token=${accessToken}&providerId=google.com`,
      requestUri: "http://localhost:3000",
      returnIdpCredential: true,
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(url, authData);

      props.googleLogin(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="google__login">
        {tokenLoading || isLoading ? (
          <LoadingDots />
        ) : (
          <React.Fragment>
            <button onClick={loginWithGoogleInFirebase}>
              google login 하기
            </button>
            <Link to="/auth">
              <button>돌아가기</button>
            </Link>
          </React.Fragment>
        )}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default GoogleLogin;
