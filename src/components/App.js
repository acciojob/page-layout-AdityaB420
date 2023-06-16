
import React from "react";
import './../styles/App.css';
import Page from "./Page";
const App = () => {
  const header="Welcome to my website";
  const footer="© 2023 My Website.All rights reserved."
  const children="This is the content of my website."
  return (
    <Page header={header} footer={footer} children={children}/>
  )
}

export default App
