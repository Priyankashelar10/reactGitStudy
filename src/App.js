import React,{Component} from "react";
import "./App.css";
import { connect} from 'react-redux';


class App extends Component{

  // state = {
  //   age : 21
  // }
  
  //  IncreaseAge = () =>{

  //   this.setState ({
  //     age : this.state.age + 1
  //   })
  // }

  // DecreaseAge = () =>{

  //   this.setState ({
  //     age : this.state.age - 1
  //   })
  // }

  render(){
    return(
      <div>
      <div>Age : {this.props.age} </div>
      <button onClick={this.props.IncreaseAge}>Age Up : </button>
       <button onClick={this.props.DecreaseAge}>Age Down: </button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    age :state.age
  }
}

const mapDispatchToProps = (dispach) =>{
  return{
    IncreaseAge : () => dispach({type : 'AGE_UP'}),
    DecreaseAge : () => dispach({type : 'AGE_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
