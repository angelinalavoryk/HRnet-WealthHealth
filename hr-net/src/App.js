import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import AsideNav from './components/SideBar/SideBar';
import './App.css';
import Employees from "./pages/Employees/Employees";
import NotFound from "./pages//NotFound/NotFound.jsx";

function App() {
  
    return (
      <div className="app">
        <Header/>
        <div className="content">
        <AsideNav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }


export default App;
