import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "./actions/posts.action";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout currentId={currentId} setCurrentId={setCurrentId} />
            }
          >
            <Route index element={<Home setCurrentId={setCurrentId} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
