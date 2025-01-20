import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Logout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({
      logoutParams: {
        returnTo: "https://auth3-frontend-w5jsl.ondigitalocean.app/",
      },
    });
  }, []);

  return <></>;
};

export default Logout;
