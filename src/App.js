import ClothSkeleton from "./Components/clothSkeleton"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isOn } from "./Actions/On";
import { isOff } from "./Actions/Off";
function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.isOn)
  console.log(authenticated)
  useEffect(() =>{
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))
    console.log(userFromLocalStorage)
    if(userFromLocalStorage !== null ){
      dispatch(isOn())
    }else{
      dispatch(isOff())
    }
  })


  const view = useSelector((state) => state.isView )
  console.log(view)
  const router = createBrowserRouter([
    { path :'/login' ,element : <LoginPage/>},

    { path : '/dashBoard' , element :  authenticated ? <ClothSkeleton/> : <Navigate  to="/login" />  }
  ])
  return (

     <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
