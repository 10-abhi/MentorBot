import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'
import { Homepage } from './pages/Homepage'
import { Dashboard } from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
