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
       <div> History</div>
       <div>
         <ul >
           {
            this.props.history.map( output =>
              <li
               key={output.id} 
               onClick = {() =>
                this.props.DeleteItem(output.id)
                }>
                 {output.value}
              </li>)
           }
         </ul>
       </div>
      
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    age :state.age,
    history : state.history
  }
}

const mapDispatchToProps = (dispach) =>{
  return{
    IncreaseAge : () => dispach({type : 'AGE_UP'}),
    DecreaseAge : () => dispach({type : 'AGE_DOWN'}),
    DeleteItem : (id ) => dispach({type : 'DeleteItem', key : id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
