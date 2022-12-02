import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";
import AnimeDetail from "./animeComs/animeDetail";
// import CardUI from "./Cads/CardUI";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ListPage from "./animeComs/mylistPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" index element={<MainPage />} />
          <Route path="/detail" index element={<AnimeDetail />} />
          <Route path="/animelist" element={<AnimeList />} />
          {/* <Route path="/animedetail" element={<CardUI />} /> */}
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ListPage" element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
