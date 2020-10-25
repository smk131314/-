import React, {Component} from "react";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

import "./App.css";
// import { Component } from "react";
 
class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      }

      else {
          checkResult = this.state.result
      }

      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })
      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
      <div>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
      </div>
      );
  }
}
 
export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
