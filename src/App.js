import ClothSkeleton from "./Components/clothSkeleton/clothSkeleton";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const authenticated = useSelector((state) => state.isOn);
  console.log(authenticated);
  const router = createBrowserRouter([
    { path:'/' , element : <Navigate to='/login'/>},
    { path: "/login", element: authenticated ? <Navigate to="/dashBoard" /> : <LoginPage/>},

    {
      path: "/dashBoard",
      element: authenticated ? <ClothSkeleton /> : <Navigate to="/login" />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
