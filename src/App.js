import "./App.css";
import Header from "./MyComponents/Header";
// import Content from './MyComponents/Content';
import { Head } from "./MyComponents/Head";
import { Signin } from "./MyComponents/Signin";
import {Signup} from './MyComponents/Signup';
import Nav from './MyComponents/Nav';

 
function App() {
  return (
    <>
      <div className="container">
        <Nav/>     
        <div className="App">
          {/* <Signup /> */}
        </div>
      </div>
    </>
  );
}

export default App;
