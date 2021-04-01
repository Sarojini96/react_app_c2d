import React, { useState, useEffect } from "react";
import FooterPage from './Components/footer';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem,  MDBCol, MDBRow } from   "mdbreact";
import Divider from '@material-ui/core/Divider';
import { Card } from 'semantic-ui-react'

const portfolio = [
  {
    name: "Graphist & Animator",
    category: ["All POSITIONS", "CLOUD SECURITY", "MARKETING"]
  },
  {
    name: "Back End Web Developer",
    category: ["All POSITIONS", "INFRASTRUCTURE", "MARKETING"]
  },
  {
    name: "A old job",
    category: ["All POSITIONS", "CLOUD SECURITY"]
  },
  {
    name: "It is a really cool website",
    category: ["All POSITIONS", "CLOUD SECURITY", "MARKETING"]
  },
  {
    name: "Something more",
    category: ["All POSITIONS"]
  }
];
function CareerPage() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
    return (
        <div >
            <img 
                className="d-block w-100"
                src="/images/career.jpg"
              />
<div className = "auth-wrapper">
    
        <h1 style={{ fontSize: 60, fontWeight: 600, color: "white", position:"absolute",paddingBottom:150, paddingLeft:500}} >CAREER</h1>
        </div>
        <MDBRow>
        <MDBCol md="6">
        <p style={{fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"justify" ,paddingLeft:500,marginBottom:80,marginTop:10,position:"absolute"}}>
      <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an the unknown printer took a galley of type and scrambled it to 
         make a type specimen book.orem Ipsum has been the industry's standard dummy. 
    </p>         </MDBCol>
    <MDBCol md="6"><Card className="auth-wrapper" style={{width:400,height:300,paddingBottom:200,marginBottom:30}}>
  <img style={{width:400,height:500,position:"absolute",boxShadow: "10px 10px 5px grey"}}
 src="/images/farm.jpg"
   /> </Card> </MDBCol>
      </MDBRow>
      <MDBRow center >
      <MDBCol md="5" style={{paddingLeft:405,}}>
      <div className="auth-wrapper" style={{width:400,height:100,alignItems:"center",background:"#0ab2c2",padding:6,boxShadow: "10px 10px 5px grey"}} >
        <p style={{alignItems:"center",color:"white"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div></MDBCol></MDBRow>

      <div className="auth-wrapper container">
      <p style={{fontSize: 42, fontWeight: 400, color: "#0355a2",textAlign:"center",marginTop:10,}}>
      <br></br>  Open Positions in all locations</p> 
      </div>
      <div className="auth-wrapper container ">
      
<div className="portfolio__labels" style={{paddingLeft:150}}>
        <a  active={filter === "All POSITIONS"} onClick={() => setFilter("All POSITIONS")}>
        All POSITIONS
        </a>
        <a
          active={filter === "CLOUD SECURITY"}
          onClick={() => setFilter("CLOUD SECURITY")}
        >
CLOUD SECURITY        </a>
        <a
          active={filter === "INFRASTRUCTURE"}
          onClick={() => setFilter("INFRASTRUCTURE")}
        >
INFRASTRUCTURE        </a>
        <a
          active={filter === "MARKETING"}
          onClick={() => setFilter("MARKETING")}
        >
MARKETING        </a>

      </div>
      <Divider style={{paddingBottom:2}} />

      

      <div className="portfolio__container "style={{marginTop:40,paddingLeft:150}}>
        {projects.map(item =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>


 </div>
 <div className="auth-wrapper container">
      <p style={{fontSize: 45, fontWeight: 400, color: "#0355a2",textAlign:"center" ,marginTop:10,}}>
      <br></br> "Hire great people and give them freedom to be awesome "
    </p> 
    <p style={{fontSize: 15, fontWeight: 400, color: "#0355a2",textAlign:"center"}}>
      - Andrew Mason, Founder, Groupon
    </p> 
      </div>
      <div  className = " container" style={{background:"transparent",marginBottom:200,marginTop:290,}}>
      <MDBRow>
      <Card className="auth-wrapper" style={{background:"transparent",position:"absolute",paddingBottom:200}}>
  <img style={{width:300,height:400,position:"absolute",}}
 src="/images/farm.jpg"
   /> </Card>
   <div >
  <img 
style={{width:300,height:290,position:"absolute",marginLeft:330}}  src="./images/girl.jpeg"
  alt="Nature" />
   </div>
        <p style={{background:"transparent",fontSize: 26, fontWeight: 400, color: "#0355a2",textAlign:"justify",position:"absolute",paddingLeft:690,}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an the unknown printer took a galley of type and scrambled it to 
         make a type specimen book.orem Ipsum has been the industry's standard dummy. 
    </p> 
    <Card className="auth-wrapper" style={{paddingTop:400,background:"transparent"}}>
  <img style={{width:300,height:300,position:"absolute",}}
 src="/images/farm.jpg"
   /> </Card> 
   <Card className="auth-wrapper" style={{paddingTop:400,paddingLeft:330,background:"transparent"}}>
  <img style={{width:200,height:200,position:"absolute",boxShadow: "10px 10px 5px grey"}}
 src="/images/farm.jpg"
   /> </Card>         
         </MDBRow>
       
      </div> 
    <FooterPage/>
           </div>
    );
  
}

export default CareerPage;

