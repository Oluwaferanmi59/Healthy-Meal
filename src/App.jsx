// import Home from "./Home"

// function App() {

//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

// src/App.js
import {
  // BrowserRouter,
  // Route,
  RouterProvider,
  // Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Help from "./components/Help";
// import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "help",
      element: <Help />,
    },
  ]);
  // return
  // <div>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route element={<Home />}>
  //         <Route path="help" element={<Help />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </div>

  return <RouterProvider router={router} />;
}

export default App;
