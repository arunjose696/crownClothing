
import './App.css';
import {Switch,Route} from "react-router-dom"
import Homepage from "./pages/homepage/homepage.components"

const Hats = (props) =>{
  console.log(props)

  return(<div><h1>this is my hats page</h1></div>)
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop/hats" component={Hats}/>
      </Switch>

    </div>
    
    
  );
}

export default App;
