export const storingData = (responseData) => {
  const responseDataKeys = Object.keys(responseData);

  for (let key in responseDataKeys) {
    const name = responseDataKeys[key];
    if (name === "expiresIn") {
      const expirationDate = new Date(
        new Date().getTime() + responseData["expiresIn"] * 1000
      );
      localStorage.setItem("expirationDate", expirationDate);
    } else {
      localStorage.setItem(name, responseData[name]);
    }
  }
};
