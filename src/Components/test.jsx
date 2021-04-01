// src/components/bootstrap-carousel.component.js
import React, { Component } from 'react';
import { MDBMask, MDBCardTitle, MDBBtn, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow } from
  "mdbreact";
import 'mdbreact/dist/css/mdb.css'
import ImageSlide from './Components/imageslide';
import { Card } from "react-bootstrap";
import FooterPage from './Components/footer';

class test extends Component {
  render() {
    return (
      <div >
        <div className="auth-wrapper"> <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView >
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                  alt="First slide"
                />
              </MDBView>
              <div class="card-img-overlay auth-wrapper" style={{ position: "absolute", paddingLeft: 390, paddingTop: 270 }}>
                <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
                <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>
                <div class="auth-wrapper" style={{ paddingLeft: 800, paddingTop: 240, }}>
                  <ImageSlide />
                </div>
              </div>

            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                  alt="Second slide"
                />
              </MDBView>
              <div class="card-img-overlay auth-wrapper" style={{ position: "absolute", paddingLeft: 390, paddingTop: 270 }}>
                <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
                <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>
                <div class="auth-wrapper" style={{ paddingLeft: 800, paddingTop: 240, }}>
                  <ImageSlide />
                </div>
              </div>

            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                  alt="Third slide"
                />
              </MDBView>
              <div class="card-img-overlay auth-wrapper" style={{ position: "absolute", paddingLeft: 390, paddingTop: 270 }}>
                <h1 style={{ fontSize: 50, fontWeight: 600, color: "white" }} >Wishes Comes <br></br>True With Us</h1>
                <p style={{ fontWeight: 400, color: "white" }}>
                  We are dynamic brand evolving to provide<br></br>
     services to make the digital world a better place<br></br>
     to encounter with.
    </p>
                <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                  Make a wish</button>
                <div class="auth-wrapper" style={{ paddingLeft: 800, paddingTop: 240, }}>
                  <ImageSlide />
                </div>
              </div>

            </MDBCarouselItem>

          </MDBCarouselInner>

        </MDBCarousel>
        </div>
        <div className="auth-wrapper">
          <h1 style={{ fontSize: 32, fontWeight: 500, color: "#0355a2", paddingLeft: 390 }} ><br></br>Become a Digital Pro <br></br>By Joining With Us<br></br><br></br></h1>
        </div>


        <div className="auth-wrapper"><MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="4">
              <MDBView hover zoom>
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Super light overlay</p>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView hover zoom>
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Super light overlay</p>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView hover zoom>
                <img
                  src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center" overlay="red-slight">
                  <p className="white-text">Super light overlay</p>
                </MDBMask>
              </MDBView>            </MDBCol>        </MDBRow>           <br></br>        <br></br>
        </MDBContainer>


        </div>

        <div className="auth-wrapper">
          <MDBRow end>
            <img
              className="d-block w-100"
              src="/images/iStock-1018522474.jpg"
            ></img>
            <div className="auth-wrapper auth-inner-inner" >
              <h1 style={{ fontSize: 60, fontWeight: 600, color: "white" }} >We Create Digital With Security</h1>
              <p style={{ fontWeight: 400, color: "white" }}>
                Our main goal is to provide the secure system which
                allows you to come into the digital transformation
                securely
                </p>
              <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
                Know More</button>
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
          <Card style={{ height: 170, width: 350, background: "white", position: "absolute" }}>
            <form  >

              <div className="form-group" >
                <input type="text"
                  className="form-control"
                  placeholder="Name" />

                <input type="email"
                  className="form-control"
                  placeholder="Email " />

                <input type="number"
                  className="form-control"
                  placeholder="Phone " />
                <button class="btn " type="button" style={{ color: "white", background: "teal", borderRadius: 10, width: 340, fontWeight: 900, fontSize: 15 }}>
                  Subscribe</button>
              </div > </form >
          </Card></MDBContainer>

        <div style={{ paddingTop: 150, paddingLeft: 380 }}>
          <MDBRow>
            <Card style={{ width: 500, height: 600, background: "#ebebeb" }}>

              <img style={{ width: 190, height: 190, paddingTop: 40, paddingLeft: 70 }} src="./images/profile.png" alt="Avatar" />
              <h6>Arun SIVAKUMARAN</h6><p>CEO Converge2digital</p>

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
        <card />

        <FooterPage />

      </div>
    );
  }
}

export default test;
