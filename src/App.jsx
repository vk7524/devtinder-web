import Body from "./components/Body"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/connections" element={<Connections/>}/>
            <Route path="/requests" element={<Requests/>}/>
          </Route>
          <Route path="/test" element={<div>Test Data</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
