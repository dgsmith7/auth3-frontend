import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logged in? -> ", isAuthenticated);
    if (isAuthenticated) navigate("/profile");
  });

  return (
    <div className="p-4 bg-white text-black">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="text-center text-xl text-blackfont-bold">
          <div>
            This is the splash page avaialable to any visitior, even without
            authentication.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
