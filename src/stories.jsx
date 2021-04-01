import React, { Component } from 'react';
import FooterPage from './Components/footer';
import { Card } from "react-bootstrap";
import { MDBMask, MDBCardTitle, MDBBtn, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow } from   "mdbreact";
import { YoutubePlayer } from "reactjs-media";

class storyPage extends Component {
  render() {
    return (
        <div >
            <img
                className="d-block w-100"
                src="/images/stories.jpg"
              />
<div className = "auth-wrapper">
    
        <h1 style={{ fontSize: 60, fontWeight: 600, color: "white", position:"absolute",paddingBottom:150, paddingLeft:500}} >STORIES</h1>
        </div>
        <MDBRow>
        <MDBCol md="6">
        <p style={{fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"justify" ,paddingLeft:500,marginBottom:80,marginTop:10,position:"absolute"}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an the unknown printer took a galley of type and scrambled it to 
         make a type specimen book.orem Ipsum has been the industry's standard dummy. 
    </p>         </MDBCol>
    <MDBCol md="6"><Card className="auth-wrapper" style={{width:400,height:300,paddingBottom:200,marginBottom:30,boxShadow: "10px 10px 5px grey"}}>
  <img style={{width:400,height:500,position:"absolute"}}
 src="/images/coffee.jpg"
   /> </Card> </MDBCol>
      </MDBRow>
      <MDBRow center >
      <MDBCol md="5" style={{paddingLeft:405,}}>
      <div className="auth-wrapper" style={{width:400,height:100,alignItems:"center",background:"#0ab2c2",padding:6,boxShadow: "10px 10px 5px grey"}} >
        <p style={{alignItems:"center",color:"white"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div></MDBCol></MDBRow>


      <div  className = "auth-wrapper container" style={{marginTop:70,alignItems:"center"}}>
      <MDBRow>  
      
  
   <MDBCol md="7">
      <div class="container">
  <img 
    className="d-block w-100"

  src="https://mdbootstrap.com/img/Photos/Slides/img(15).jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol> 
  <MDBCol md="5">
      <div class="container">
           <div >
            <YoutubePlayer
                src="https://youtu.be/4JYtUKujZfY"
                width={410}
                height={270}
            />
        </div> </div></MDBCol>
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
   </MDBRow>

   <MDBRow style={{marginTop:30}}>  
      <MDBCol md="5">
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/girl.jpeg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
  
   <MDBCol md="6">
      <div class="container">
           <div >
            <YoutubePlayer
                src="https://youtu.be/4JYtUKujZfY"
                width={610}
                height={276}
            />
        </div></div></MDBCol> 
  
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
  <MDBCol md="4" style ={{marginTop:50}}>
      <div class="container">
  <img 
  className="d-block w-100"
  src="./images/cycle.jpg"
  alt="Nature" />
  <div class="text-block">
    <h4>image captions</h4>
  </div>  </div></MDBCol>
   </MDBRow>

      </div> 

    <FooterPage/>
           </div>

    );
  }
}

export default storyPage;

