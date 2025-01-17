import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { getConfig } from "./config";

// const onRedirectCallback = (appState) => {
//   appState.returnTo = "http://localhost:5173/profile";
// };

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  //  onRedirectCallback,
  authorizationParams: {
    redirect_uri: "https://auth3-frontend-w5jsl.ondigitalocean.app",
    ...(config.audience ? { audience: config.audience } : null),
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
