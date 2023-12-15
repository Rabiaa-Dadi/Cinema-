import Navbar from './Navbar'
import React from "react";


 const Layout = (props) => {
    return (
    <div>
       <Navbar/>
       {props.children}
    </div>
    )
  }
  export default Layout