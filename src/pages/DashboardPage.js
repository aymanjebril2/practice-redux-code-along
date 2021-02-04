import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>THIS IS MY Dashboard PAGE </p>
      <Link to="/posts" className="button"></Link>
      viw GET_POSTS
    </section>
  );
};

export default DashboardPage;
