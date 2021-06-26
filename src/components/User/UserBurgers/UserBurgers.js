import React, { useEffect, useState } from "react";

import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import BurgerList from "./BurgerList/BurgerList";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import "./UserBurgers.css";

const UserBurgers = (props) => {
  const [userBurgers, setUserBurgers] = useState(null);
  const { isLoading, error, initializeError, sendGetRequest } = useHttp();

  useEffect(() => {
    const fetchingBurgers = async () => {
      const url =
        "https://burger-finder-6bddb-default-rtdb.firebaseio.com/burgers.json";
      const queryParams =
        "?auth=" +
        props.idToken +
        '&orderBy="userId"&equalTo="' +
        props.userId +
        '"';

      try {
        const responseData = await sendGetRequest(url + queryParams);

        const userBurgerKeys = Object.keys(responseData);

        let burgerArray = [];
        for (let key in userBurgerKeys) {
          const burgerId = userBurgerKeys[key];
          const userBurger = {
            id: burgerId,
            name: responseData[burgerId].userBurgerName,
            ingredients: responseData[burgerId].ingredients,
            createdAt: responseData[burgerId].createdAt,
          };
          burgerArray.push(userBurger);
        }

        setUserBurgers(burgerArray);
      } catch (err) {}
    };

    fetchingBurgers();
  }, [sendGetRequest, props.userId, props.idToken]);

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="user__burgers">
        {isLoading && <LoadingDots />}
        {!isLoading && userBurgers && <BurgerList items={userBurgers} />}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default UserBurgers;
