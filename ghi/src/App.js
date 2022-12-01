import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";
import AnimeDetail from "./animeComs/animeDetail";
import CardUI from "./Cads/CardUI";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" index element={<mainPage />} />
          <Route path="/detail" index element={<AnimeDetail />} />
          {/* <Route path="/animelist" element={<AnimeList />} /> */}
          {/* <Route path="/animedetail" element={<CardUI />} /> */}
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
