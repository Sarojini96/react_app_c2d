import React from "react";

class ImageSlide extends React.Component {
    constructor(){
      super()
      this.images = [
        'https://source.unsplash.com/random/100x100',
        'https://source.unsplash.com/random/120x100',
        'https://source.unsplash.com/random/130x100',
        'https://source.unsplash.com/random/140x100',
        'https://source.unsplash.com/random/150x100',
        'https://source.unsplash.com/random/160x100',
      ]
      this.state = {
        currentIndex: 0,
      }
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
    }
    goToPrevSlide () {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === 0 ? this.images.length -1 : currentIndex - 1;
      this.setState({currentIndex: newPointer});
    }
    
    goToNextSlide ()  {
      const {currentIndex} = this.state;
      const newPointer = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
      this.setState({currentIndex: newPointer});
    }
    
    render(){
      return(
          <div className="home"style={{position:"absolute",paddingBottom:200}}>
            <img src={this.images[this.state.currentIndex]} width = "400" height = "200" style={{borderTopRightRadius:10,borderTopLeftRadius:10}}/>
            <br/>
            <div style={{background:" rgb(18, 166, 168)" ,height:80,width:400,padding:20}}>
            <button style={{marginRight:150}} class = "prev" onClick={this.goToPrevSlide}>&#10094;</button>
            {this.state.currentIndex}
            <button style={{marginLeft:140}} class = "next" onClick={this.goToNextSlide}>&#10095;</button>
            <br/>
            </div>
          </div>
  
      );
  }
  
  }
  
  export default ImageSlide;
