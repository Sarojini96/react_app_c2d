// src/components/bootstrap-carousel.component.js
import React, { Component } from 'react';
import { MDBMask, MDBCardTitle, MDBBtn, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow } from
  "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import ImageSlide from './Components/imageslide';
import { Card } from "react-bootstrap";
import FooterPage from './Components/footer';
import Carousel from 'react-bootstrap/Carousel';
import { Input } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      
<div>

<div className="auth-wrapper fullscreen">

<Carousel >
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 "
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
      alt="First slide"
    />
    <Carousel.Caption style={{ position: "absolute", paddingRight: 790, paddingBottom: 270 }}>
    <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
    <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>
    </Carousel.Caption>
    <Carousel.Caption style={{ paddingLeft: 790, paddingBottom: 260 }}>
    
    <ImageSlide  />

    </Carousel.Caption>
    <Carousel.Caption style={{ paddingRight:300, paddingTop: 260,position:"absolute" }}>
    <div class="search active">
      <input style={{width:595,height:90}} type="text" class="input" placeholder="Search for example Digital Marketing, Website Designing, Cloud Security,etc ..." />

    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
      alt="Second slide"
    />
    <Carousel.Caption style={{ position: "absolute", paddingRight: 790, paddingBottom: 270 }}>
    <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
    <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>
    </Carousel.Caption>
    <Carousel.Caption style={{ position: "absolute", paddingLeft: 790, paddingBottom: 260 }}>
    
    <ImageSlide  />

    </Carousel.Caption>
    <Carousel.Caption style={{ paddingRight:300, paddingTop: 260,position:"absolute" }}>
    <div class="search active">
      <input style={{width:595,height:90}} type="text" class="input" placeholder="Search for example Digital Marketing, Website Designing, Cloud Security,etc ..." />

    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
      alt="Third slide"
    />
    <Carousel.Caption style={{ position: "absolute", paddingRight: 790, paddingBottom: 270 }}>
    <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
    <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>

    </Carousel.Caption>
    <Carousel.Caption style={{ position: "absolute", paddingLeft: 790, paddingBottom: 260 }}>
    
    <ImageSlide  />

    </Carousel.Caption>
    <Carousel.Caption style={{ paddingRight:300, paddingTop: 260,position:"absolute"}}>
    <div class="search active">
      <input style={{width:595,height:90}} type="text" class="input" placeholder="Search for example Digital Marketing, Website Designing, Cloud Security,etc ..." />

    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="auth-wrapper">
          <h1 style={{ fontSize: 32, fontWeight: 500, color: "#0355a2", paddingLeft: 390 }} ><br></br>Become a Digital Pro <br></br>By Joining With Us<br></br><br></br></h1>
        </div>   
        <div className="auth-wrapper" style={{ paddingLeft: 390 }}>
          <MDBRow>
        <Card className="cardh" style={{marginTop:60,marginRight:10,width:300,height:450,alignItems:"justify",background:"white",marginBottom:60}}>
        <img style={{width:300,height:450,alignItems:"justify"}}

  src="https://mdbootstrap.com/img/Photos/Slides/img(15).jpg"
  alt="Nature" />
</Card>
<Card className="cardh" style={{marginTop:60,width:300,height:450,alignItems:"justify",background:"white",marginRight:10,}}>
<img style={{width:300,height:450,alignItems:"justify"}}

src="./images/cycle.jpg"
alt="Nature" />
</Card>
<Card className="cardh" style={{marginTop:60,width:300,height:450,alignItems:"justify",background:"white",marginRight:10,}}>
<img style={{width:300,height:450,alignItems:"justify"}}

src="https://mdbootstrap.com/img/Photos/Slides/img(15).jpg"
alt="Nature" />
</Card>
<Card className="cardh" style={{marginTop:60,width:300,height:450,alignItems:"justify",background:"white",marginRight:10,}}>
<img style={{width:300,height:450,alignItems:"justify"}}

src="./images/girl.jpeg"
alt="Nature" />
</Card></MDBRow>
        </div>   

        <div className="auth-wrapper" >
          <MDBRow end>
            <img 
              className="d-block w-100"
              src="/images/iStock-1018522474.jpg"
            >      
            </img>
            <div style={{paddingRight:1000,position:"absolute",paddingTop:400}} >
              <h1 style={{textAlign:"left", fontSize: 60, fontWeight: 600, color: "white",position:"relative" }} >We Create Digital With Security</h1>
              <p style={{ fontWeight: 400, color: "white",position:"relative",textAlign:"justify", }}>
                Our main goal is to provide the secure system which
                <br></br>allows you to come into the digital transformation
                securely
                </p>
              <Link to={'/Works'} class="btn " type="button" style={{position:"relative", color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                Know More</Link>
            </div>

            <div className="auth-inner text-white">
           
              <MDBRow style={{ paddingTop: 200 }}>
                <MDBCol md="12" className="text-left" >
                  <h1 style={{ fontSize: 35, fontWeight: 400, color: "white" }}>
                    <b>   How Do We Do</b>
                  </h1>
                  <h2 style={{ color: "white", }}>
                    <b> Discover</b>
                  </h2>
                  <p>Lorem Ipsum is simply dummy <br></br>text of the printing
              To take a trivial example,<br></br> which of us ever undertakes laborious </p>
                  <h2 style={{ color: "white", }}>
                    <b> Define</b>
                  </h2>
                  <p>Lorem Ipsum is simply dummy <br></br>text of the printing
              To take a trivial example,<br></br> which of us ever undertakes laborious </p>
                  <h2 style={{ color: "white", }}>
                    <b> Ideate</b>
                  </h2>
                  <p>Lorem Ipsum is simply dummy <br></br>text of the printing
              To take a trivial example,<br></br> which of us ever undertakes laborious </p>
                  <h2 style={{ color: "white", }}>
                    <b> Transform</b>
                  </h2>
                  <p>Lorem Ipsum is simply dummy <br></br>text of the printing
              To take a trivial example,<br></br> which of us ever undertakes laborious </p>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBRow>
        </div>
        
        <div size="fluid" className="auth-wrapper" style={{ paddingRight: 150, paddingLeft: 150, paddingTop: 100, position: "absolute" }}><img
          className="d-block w-100"
          src="/images/newsletter.png"
        ></img>
          <h1 className="auth-inner-news" style={{ position: 'absolute', left: 250, top: 500 }}>Sign in to<br></br>Our Newsletter</h1>
        </div>

        <MDBContainer style={{ borderRadius: 10, paddingLeft: 650, paddingTop: 800 }}>
          <Card style={{borderRadius:10, height: 200, width: 350, background: "white", position: "absolute" }}>
            <form  >
            <TextField style={{paddingLeft:50,marginTop:10}} type="text" id="standard-basic" placeholder="Name" />
            <TextField style={{paddingLeft:50,marginTop:10}} type="email" id="standard-basic" placeholder="Email " />
            <TextField style={{paddingLeft:50,marginTop:10}} type="number" id="standard-basic" placeholder="Phone " />
              
                <button  type="button" style={{ color: "white", background: "#0ab2c2", borderRadius: 10, height:50, width: 350, fontWeight: 900, fontSize: 20 ,marginTop:25}}>
                  Subscribe</button>
               </form >
          </Card></MDBContainer>
          <div style={{ paddingTop: 150, paddingLeft: 380 }}>
          <MDBRow>
            <Card style={{ width: 500, height: 600, background: "#ebebeb" }}>
            <Image style={{ width: 190, height: 190, paddingTop: 40, paddingLeft: 70 ,position:"absolute"}} src="./images/profile.png"  size='small' circular />
              <div style={{paddingLeft:250,paddingTop:100,position:"absolute"}}>
              <p>Arun SIVAKUMARAN</p><h6>CEO Converge2digital</h6>
              </div >
              <div className="container" style={{position:"absolute",paddingTop:300,paddingLeft:100}}>
              <p>"Lorem Ipsum is simply dummy text of the printing <br></br>and typesetting industry. 
        Lorem Ipsum has been <br></br> the  industry's standard dummy text ever since the 1500s,
         " </p>
              </div >
            </Card>
            <h1 style={{ fontSize: 45, fontWeight: 400, color: "#0355a2", paddingLeft: 200, paddingTop: 150 }} ><br></br>We've worked with big  <br></br>and small alike,<br></br><br></br></h1>
            <div style={{ paddingTop: 350, paddingLeft: 700, position: "absolute" }}>
              <img style={{ width: 300, height: 70 }}
                src="/images/gsm.jpeg"
                className="img-fluid"
                alt=""
              />     </div>
          </MDBRow>

        </div>
        <FooterPage/>

        </div>
    );
  }
}

export default HomePage;
