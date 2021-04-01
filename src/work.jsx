import React, { Component } from 'react';
import FooterPage from './Components/footer';
import { Card } from "react-bootstrap";
import { MDBMask, MDBCardTitle, MDBBtn, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow } from   "mdbreact";
import { Embed } from 'semantic-ui-react'
import { YoutubePlayer } from "reactjs-media";

class workPage extends Component {
  render() {
    return (
        <div >
            <img tyle={{  position:"absolute"}}
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/018.jpg"
              />
<div className = "auth-wrapper">
    
        <h1 style={{ fontSize: 60, fontWeight: 600, color: "white", position:"absolute",paddingBottom:150, paddingLeft:500}} >WORKS</h1>
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
 src="/images/roadworker.jpg"
   /> </Card> </MDBCol>
      </MDBRow>
      <MDBRow center >
      <MDBCol md="5" style={{paddingLeft:405,}}>
      <div className="auth-wrapper" style={{width:400,height:100,alignItems:"center",background:"#0ab2c2",padding:6,boxShadow: "10px 10px 5px grey"}} >
        <p style={{alignItems:"center",color:"white"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div></MDBCol></MDBRow>
      <div className="auth-wrapper container">
      <Card style={{marginTop:60,width:1100,height:400,alignItems:"justify",background:"white"}}>
        
          <h1 style={{ fontSize: 26, fontWeight: 550, color: "#0355a2",paddingLeft:70,paddingTop:90 }} >Cloud Security</h1>         
          <p style={{fontSize: 18, fontWeight: 400, color: "gray",textAlign:"justify",paddingLeft:70}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting<br></br>
        Lorem Ipsum has been the industry's standard dummy text ever  <br></br> the 1500s,
         when an the unknown printer took a galley of type and <br></br>scrambled it to 
         make a type specimen book.orem Ipsum has been <br></br>the industry's standard dummy. 
    </p> 
           
    <div style={{paddingLeft:640,paddingBottom:400,position:"absolute"}}>
            <YoutubePlayer
                src="https://youtu.be/yFCs_C_syas"
                width={450}
                height={398}
            />
        </div>
         
      </Card>
      
      
       </div>
      <div className="auth-wrapper container">
      <p style={{fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"center" ,marginBottom:80,marginTop:10,}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an the unknown printer took a galley of type and scrambled it to 
         make a type specimen book.orem Ipsum has been the industry's standard dummy. 
    </p> 
      </div>
      

      <div className="auth-wrapper">
        <MDBRow end>
            <div class="card" style={{height:800,width:1860,padding:100,}}>
            <div class="card-body">
              <h1 style={{ fontSize: 35, fontWeight: 550, color: "#0355a2",paddingLeft:180,paddingTop:80 }} >Digital Marketing</h1>
              <p class="card-text" style={{ fontSize: 16,marginTop:30,paddingLeft:180}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting <br></br>
        Lorem Ipsum has been the industry's standard industry's standard dummy <br></br>text ever since the 1500s,
         when an the unknown printer took a galley of type
              </p><br></br>
              <p class="card-text" style={{ fontSize: 16,paddingLeft:180}}>
                Some quick example text to build on the card title and make up the bulk of <br></br>the
                card's content.
              </p><br></br>
              <p class="card-text" style={{ fontSize: 16,paddingLeft:180}}>
                Some quick example text to build on the card title and make up the bulk of <br></br>the
                card's content.
              </p><br></br>
              <p class="card-text" style={{ fontSize: 16,paddingLeft:180}}>
                Some quick example text to build on the card title and make up the bulk of <br></br> the
                card's content.
              </p><div style={{paddingLeft:180}}>
              <button class="btn"type="button" style={{ color: "white", background: "#0ab2c2", borderRadius: 10, width: 320, fontWeight: 900, fontSize: 15 }}>
             Read More</button></div>
            </div>
          </div>
          
          <div className="auth-inner" style={{background:"#0ab2c2",height:800}}>
          </div>
          <Card style={{marginTop:150,position:"absolute",width:1000,height:400,alignItems:"center",background:"#ebebeb",borderRadius:10}}>
          <div >
            <YoutubePlayer
                src="https://youtu.be/4JYtUKujZfY"
                width={1000}
                height={398}
            />
        </div>

          </Card>

        </MDBRow>
      </div>

      <div className="auth-wrapper container">
      <p style={{fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"center" ,marginBottom:80,marginTop:10,}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an the unknown printer took a galley of type and scrambled it to 
         make a type specimen book.orem Ipsum has been the industry's standard dummy. 
    </p> 
      </div>
      <div className="auth-wrapper container">
      <Card style={{marginTop:40,width:1100,height:400,alignItems:"center",background:"white"}}>
     
      <div style={{paddingRight:640}}>
            <YoutubePlayer
                src="https://youtu.be/yFCs_C_syas"
                width={450}
                height={398}
            />
        </div>
        <div style={{paddingLeft:450,paddingBottom:400,position:"absolute"}}>
            <h1 style={{ fontSize: 26, fontWeight: 550, color: "#0355a2",paddingLeft:70,paddingTop:90 }} >Webdesigning</h1>         
          <p style={{fontSize: 18, fontWeight: 400, color: "gray",textAlign:"justify",paddingLeft:70}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting<br></br>
        Lorem Ipsum has been the industry's standard dummy text ever  <br></br> the 1500s,
         when an the unknown printer took a galley of type and <br></br>scrambled it to 
         make a type specimen book.orem Ipsum has been <br></br>the industry's standard dummy. 
    </p> 
        </div>
        
        </Card> </div>
      <div className="auth-wrapper" style={{marginTop:60,marginBottom:60,}}>
        
        <MDBContainer className="mt-4">
     <MDBRow>
      <MDBCol md="6">
      <h1 style={{ fontSize: 38, fontWeight: 400, color: "#0355a2", }} >Experienced in Secure transformation towards digitalization</h1>

          </MDBCol>
          <MDBCol md="6">
          <p class="card-text" style={{ fontSize: 18,fontWeight: 300,color: "gray",}}>
                Some quick example text to build on the card title and make up the bulk of  the
                card's content.Some quick example text to build on the card title and make up the bulk of  the
                card's content.
              </p>
          </MDBCol>
          </MDBRow> 
   </MDBContainer>
    </div>
    
    <div class="auth-wrapper " style={{paddingLeft:350,}} >
      <MDBContainer fluid>
  <div class="row">
    <div class="col-md-3">
    <h1 style={{ fontSize: 65, fontWeight: 500, color: "#0355a2", }} >5</h1>

    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 65, fontWeight: 500, color: "#0355a2", }} >20</h1>
    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 65, fontWeight: 500, color: "#0355a2", }} >8</h1>
    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 65, fontWeight: 500, color: "#0355a2", }} >3</h1>
    </div>
  </div></MDBContainer>
</div>
<div class="auth-wrapper " style={{paddingLeft:350,marginBottom:90}} >
      <MDBContainer fluid>
  <div class="row">
    <div class="col-md-3">
    <h1 style={{ fontSize: 20, fontWeight: 300, color: "#0355a2", }} >Satisfied Customers</h1>

    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 20, fontWeight: 300, color: "#0355a2", }} >Consulteds</h1>
    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 20, fontWeight: 300, color: "#0355a2", }} >Years Experience</h1>
    </div>
    <div class="col-md-3">
    <h1 style={{ fontSize: 20, fontWeight: 300, color: "#0355a2", }} >Completed Projects</h1>
    </div>
  </div></MDBContainer>
</div>
    <FooterPage/>
           </div>
    );
  }
}

export default workPage;

