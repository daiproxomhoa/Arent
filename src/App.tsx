import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path={ROUTES.new} element={<NewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
