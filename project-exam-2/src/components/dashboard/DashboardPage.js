import React from "react";
import NavBar from "../layout/Nav";
import PostList from "./PostList";

function DashboardPage() {
  return (
    <>
      <NavBar />
      <div>Dashboard</div>
      <PostList />
    </>
  );
}

export default DashboardPage;
