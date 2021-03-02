import React from "react";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const clickedHandler = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <div className="jumbotron">
      <h1 className="display-4">Acme Staff Portal</h1>
      <div>
        <p className="lead">If you are a staff member, please get your credentials from your supervisor</p>
        <button className="btn btn-dark btn-lg" onClick={clickedHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
