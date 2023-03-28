
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Errorpage from './components/Errorpage';
import AboutUs from './components/AboutUs'
import Clothes from './components/Clothes'
import Recycle from './components/Recycle'
function App() {

  //create object of browser router
  const routerObj=createBrowserRouter([
     //routing details
     {
      path:'/',
      element:<RootLayout />,
      errorElement:<Errorpage/>,
      children:[
        //route for home  
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/aboutUs',
          element:<AboutUs/>,
        },
        {
          path:'/recycle',
          element:<Recycle/>
        },
        {
          path:'/clothes',
          element:<Clothes/>
        }
      ] 
     }
  ])
return (
   <div>
    {/* Provide BroserRouter*/}
    <RouterProvider router={routerObj}/>
   </div>
  );
}

export default App;
