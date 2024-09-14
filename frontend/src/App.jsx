import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Homepage from './pages/Homepage'
import { Signup } from './pages/Signup'
import { Signin } from "./pages/Signin"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage></Homepage>}> </Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<Signin></Signin>}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
