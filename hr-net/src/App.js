// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from './pages/Home/Home';
// import AsideNav from './components/AsideNav/AsideNav';
// import './App.css';
// import Employees from "./pages/Employees/Employees";



// function App() {
//     return (
//       <div className="app">
//         <Header/>
//         <AsideNav/>
//         <main className="main">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/employees" element={<Employees />} />
//           </Routes>
//         </main>
//       </div>
//     );
//   }


// export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import AsideNav from './components/AsideNav/AsideNav';
import './App.css';
import Employees from "./pages/Employees/Employees";



function App() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
        <AsideNav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </div>
    );
  }


export default App;
