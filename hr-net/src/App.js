import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AsideNav from './components/SideBar/SideBar';
import './App.css';
import Employees from './pages/Employees/Employees';
import NotFound from './pages/NotFound/NotFound.jsx';
import { EmployeeProvider } from './utils/EmployeeContext.js';

function App() {
  return (
    <EmployeeProvider>
      <div className="app">
        <Header />
        <div className="content">
          <AsideNav />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </EmployeeProvider>
  );
}

export default App;
