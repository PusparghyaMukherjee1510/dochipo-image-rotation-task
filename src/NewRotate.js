
import React from "react";

class NewRotate extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        rotation: 0
      }
      
      this.rotate = this.rotate.bind(this);
    }
    
    rotate(){
      let newRotation = this.state.rotation + 10;
      if(newRotation >= 360){
        newRotation =- 360;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    
    render(){
      const { rotation } =  this.state;
      return (
      <>
      <img style={{transform: `rotate(${rotation}deg)`}} 
      src={"//blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png"} 
      onClick={this.rotate} width="400" height="167" />  
      </>
      
      )
    }
  }

  export default NewRotate;