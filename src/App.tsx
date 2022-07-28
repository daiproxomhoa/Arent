import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import MainPage from "./modules/MainPage";
import MyRecordPage from "./modules/MyRecordPage";
import NewPage from "./modules/NewPage";
import { ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.record} element={<MyRecordPage />} />
          <Route path={ROUTES.news} element={<NewPage />} />
          <Route
            path="*"
            element={<Navigate to={{ pathname: "/404" }} />}
          ></Route>
          <Route
            path="/404"
            element={
              <div className="container text-center flex items-center justify-center flex-1 text-7xl">
                404
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
