import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Components/MainContainer";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Unathorized from "../Unathorized";
import Admin from "../Admin";
import PrivateRoute from "../../Components/PrivateRoute";


export default function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/no-autorizado" element={<Unathorized />} />
          <Route element={<PrivateRoute allowedRoles={[""]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}
