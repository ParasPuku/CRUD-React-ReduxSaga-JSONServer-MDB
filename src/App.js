import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AddEditUser from "./Pages/AddEditUser";
import UserInfo from "./Pages/UserInfo";
import Header from "./Components/Header";
import store from "./ReduxState/store/Store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddEditUser />} />
          <Route exact path="/edituser/:id" element={<AddEditUser />} />
          <Route exact path="/userinfo/:id" element={<UserInfo />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
