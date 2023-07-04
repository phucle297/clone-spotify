import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import HomePage from "@/pages/home";

import appStyles from "./app.module.scss";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <main className={appStyles.appContainer}>
          <HomePage />
        </main>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
