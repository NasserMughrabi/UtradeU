import Access from "./components/Access";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListFeed from "./components/ListFeed";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { PostsProvider } from "./components/PostsContext";

function App() {
  return (
    <PostsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Access />} />
          <Route path='/Profile/:firstName' element={<Profile />} />
          <Route path ='/Home' element={<Home />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
 