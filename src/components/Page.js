import React from "react";
import './../styles/App.css';
const Page=({ header, footer, children }) => {
    return (
      <div>
        <h1>{header}</h1>
        <div className="content" >{children}</div>
        <div className="content">{footer}</div>
      </div>
    );
  };
  
  export default Page;