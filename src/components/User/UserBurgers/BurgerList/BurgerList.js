import React, { useState } from "react";

import BurgerItem from "./BurgerItem/BurgerItem";

import "./BurgerList.css";

const BurgerList = (props) => {
  const [sortingMode, setSortingMode] = useState("asc");

  //   asc 오름차순
  //   desc 내림차순

  if (props.items.length === 0) {
    return (
      <div>
        <span>버거를 불러오지 못했습니다</span>
      </div>
    );
  }

  const changeSortingMode = (event) => {
    const {
      target: { value },
    } = event;

    setSortingMode(value);
  };

  return (
    <React.Fragment>
      <div className="sorting__mode-controller">
        <select name="sorting" onChange={changeSortingMode}>
          <option value="asc">가장 최근에 저장된 것부터</option>
          <option value="desc">옛날에 저장된 것부터</option>
        </select>
      </div>
      <div className="saved__burger-list">
        <ul>
          {sortingMode === "asc" ? (
            <React.Fragment>
              {props.items
                .sort((a, b) => {
                  if (a.createdAt > b.createdAt) {
                    return -1;
                  }

                  if (a.createdAt < b.createdAt) {
                    return 1;
                  }

                  return 0;
                })
                .map((burger) => {
                  return (
                    <BurgerItem
                      key={burger.id}
                      date={new Date(burger.createdAt).toLocaleDateString()}
                      name={burger.name}
                      ingredients={burger.ingredients}
                    />
                  );
                })}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {props.items
                .sort((a, b) => {
                  if (a.createdAt > b.createdAt) {
                    return 1;
                  }

                  if (a.createdAt < b.createdAt) {
                    return -1;
                  }

                  return 0;
                })
                .map((burger) => {
                  return (
                    <BurgerItem
                      key={burger.id}
                      date={new Date(burger.createdAt).toLocaleDateString()}
                      name={burger.name}
                      ingredients={burger.ingredients}
                    />
                  );
                })}
            </React.Fragment>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BurgerList;
