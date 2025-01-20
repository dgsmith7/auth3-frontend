import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { ExternalApiComponent } from "../components/ExternalApi";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Header />
        <div className="text-center">
          <p>Profile Page. Welcome, {user.name}.</p>
        </div>
        <div>
          <img src={user.picture} alt={user.name} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div>{JSON.stringify(user, null, 2)}</div>
        <ExternalApiComponent />
        <Footer />
      </div>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
