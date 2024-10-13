import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LoginForm from "../components/Login";
import Stats from "../components/Stats";
import Users from "../components/Users";
import Reports from "../components/Reports";
import UserDetails from "../components/UserDetails"
import ErrorPage from "../components/ErrorPage";
import RequireAuth from "../routes/ProtectedRoutes";
// import Todo from "../components/Todo/Todo";

export default function Routing() {
  return (
    <Routes>
      <Route
        path="/app"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      >
        <Route
          path="stats"
          element={
            <RequireAuth>
              <Stats />
            </RequireAuth>
          }
        />
        <Route
          path="users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
          <Route
          path="user/:id"
          element={
            <RequireAuth>
              <UserDetails />
            </RequireAuth>
          }
        />
        <Route
          path="reports"
          element={
            <RequireAuth>
              <Reports />
            </RequireAuth>
          }
        />
        {/* <Route path="todo"  element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          } /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
}
