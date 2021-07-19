import React from "react"
import { createGlobalStyle } from "styled-components"
import Nav from '../Nav/index'


const GlobalStyle = createGlobalStyle`
 
body {
  
  /* background: #070054; */
  /* background: linear-gradient(120deg, rgb(255, 255, 255) 0%, rgba(183, 176, 176, 1) 35%, rgb(255, 73, 242) 110%); */
  text-align: center;
  font-family: 'Red Hat Text';
  /* background-image: url("https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_1024/v1618265655/378-3784436_disney-castle-logo-png-disney-castle-logo-transparent_yiuqg3.png"); */
  // background-repeat: no-repeat;
  // background-position: center;
}

h1 {
  padding-top: 60px;
  color: #ff49f2;
  font-size: 125px;
  background: -webkit-linear-gradient(#ff49f2, #070054);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: normal;
}

h2 {
  color: #ff49f2;
  font-size: 45px;
  background: -webkit-linear-gradient(#ff49f2, #070054);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h3 {
  color: #ff49f2;
  font-size: 25px;
  background: -webkit-linear-gradient(#ff49f2, #070054);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-image{
  /* margin-top: 200px; */
  max-width: 300px;
  max-height: 400px;
  border-radius: 200px;
}`

  const Layout = ({ children }) => {

    return (
        <div>
            <GlobalStyle />
            <Nav />
            <section>{children}</section>
        </div>
    );
  };


  export default Layout