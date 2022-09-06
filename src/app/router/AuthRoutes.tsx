
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginScreen } from "../../ui/pages/authentication/login";
import { RegisterScreen } from "../../ui/pages/authentication/register";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="">
        <Route path="" element={<LoginScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
      </Route>
    </Routes>
  );
};
