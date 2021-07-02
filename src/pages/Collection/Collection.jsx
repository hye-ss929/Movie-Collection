import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";

const Collection = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && history.push("/");
    });
  });

  return (
    <>
      <Header onLogout={onLogout} />
      {/* <Footer /> */}
    </>
  );
};

export default Collection;
