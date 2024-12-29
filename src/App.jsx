import React from "react" ;
import Base from "./Header/Base";
import Nav from "./Nav";
import Home from "./Home";
import Main from "./MidPoint/main";
import Desc from "./Details/Desc";
import Cardtab from "./Product/Cardtab";
import Foot from "./Footer/Foot";
import Signup from "./Form/Signup";

export default function App(){
  return(
    <div>
        <Base />
        <Nav />
         <Home />
        <Main />
        <Desc/>
        <Cardtab />
        <Signup/>
        <Foot/>
    </div>
  )
}