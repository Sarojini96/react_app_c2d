import React, { Component } from 'react';
import FooterPage from './Components/footer';

class aboutPage extends Component {
  render() {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              />
<div className = "auth-wrapper">
        <h1 style={{ fontSize: 60, fontWeight: 600, color: "white", position:"absolute",paddingBottom:150, paddingLeft:500}} >ABOUT US </h1>
        </div>
        <p style={{fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"justify" ,paddingLeft:500,marginBottom:80,marginTop:10}}><br></br>
        Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry. 
        Lorem Ipsum has been the industry's<br></br> standard dummy text ever since the 1500s,
         when an the <br></br>unknown printer took a galley of type and scrambled it to 
         <br></br>make a type specimen book. It has survived not only five <br></br> centuries, 
         but also the leap into electronic typesetting, <br></br>remaining essentially unchanged.<br></br><br></br>
        
    </p>         
    <FooterPage/>
           </div>
    );
  }
}

export default aboutPage;