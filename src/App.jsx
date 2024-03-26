import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>App</Layout>}></Route>
    </Routes>
  );
}

export default App;
