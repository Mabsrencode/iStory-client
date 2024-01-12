import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "./actions/posts.action";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
