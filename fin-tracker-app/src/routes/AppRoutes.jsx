import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/loader";
const HomePage = lazy(() => import("../components/homepage/index.jsx"));
const Login = lazy(() => import("../components/login/index.jsx"));
const Register = lazy(() => import("../components/register/index.jsx"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}
