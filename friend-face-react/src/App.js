import React from "react";
import { Route, Routes } from "react-router";
import FriendFacePage from "./pages/FriendFace";
import NewPostsPage from "./pages/NewPosts";
import Layout from "./components/layouts/Layout";

function App() {
  return (
   <Layout>
      <Routes>
        <Route path="/" exact element={<FriendFacePage />} />

        <Route path="/new-posts" element={<NewPostsPage />} />
      </Routes>
      </Layout>
  );
}

export default App;
