import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../src/pages/Homepage"
import { Signin } from "./pages/Signin"
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
function App() {
 

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage></Homepage>}> </Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<Signin></Signin>}></Route>
          <Route path="/dashboard" element={<Dashboard />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
