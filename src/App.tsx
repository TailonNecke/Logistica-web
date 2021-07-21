import React from "react";

import GlobalStyle from "./styles/global";

import SigIn from './pages/Signin';


const App: React.FC = () => {
  return (
    <>
    <SigIn />
    <GlobalStyle />
    </>
  );
};

export default App;