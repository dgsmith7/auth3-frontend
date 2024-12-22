import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./views/Splash";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import "./index.css";
//import history from "./utils/history";

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    // <Router history={history}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
