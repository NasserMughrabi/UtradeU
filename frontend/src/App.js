import Access from "./components/Access";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Profile /> */}
      {/* <Access /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Access />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Post' element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 