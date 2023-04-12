import Access from "./components/Access";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListFeed from "./components/ListFeed";

function App() {
  return (
    <>
      {/* <Profile /> */}
      {/* <Access /> */}
      <ListFeed />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Access />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Post' element={<Post />} />
          <Route path ='/ListFeed' element={<ListFeed />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
 