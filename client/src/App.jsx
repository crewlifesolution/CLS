import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

//Import the react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },

  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
