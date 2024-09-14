import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../src/pages/Homepage"
import { Signin } from "./pages/Signin"
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { CareerPath } from './pages/CareerPath'
import { Resources } from './pages/Resources'
import { Progress } from './pages/Progress'
import { Notifications } from './pages/Notifications'

function App() {
 

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage></Homepage>}> </Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<Signin></Signin>}></Route>
          <Route path="/dashboard" element={<Dashboard />}> </Route>
          <Route path="/career-path" element={<CareerPath />}> </Route>
          <Route path="/resources" element={<Resources />}> </Route>
          <Route path="/progress" element={<Progress />}> </Route>
          <Route path="/notifications" element={<Notifications />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
