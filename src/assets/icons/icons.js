import home from "./svg/home.svg";
import userCircle from "./svg/user-circle.svg";

export const icons = (iconName) => {
  let iconSvg;
  switch (iconName) {
    case "home":
      iconSvg = <img src={home} alt="홈 아이콘" />;
      break;
    case "user-circle":
      iconSvg = <img src={userCircle} alt="유저 아이콘" />;
      break;
    default:
      return;
  }

  return <div className="fontawesome__icon">{iconSvg}</div>;
};
