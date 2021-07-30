import React from "react";

import GlobalStyle from "./styles/global";

import SigIn from "./pages/Signin";

import { AuthProvider } from "./context/AuthContext";

import ToastCointainer from "./components/ToastContainer";

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
    <SigIn />
    </AuthProvider>  

    <ToastCointainer />

      <GlobalStyle />
    </>
  );
};

export default App;
