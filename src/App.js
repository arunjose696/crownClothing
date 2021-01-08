
import './App.css';
import {Switch,Route} from "react-router-dom"
import Homepage from "./pages/homepage/homepage.components"
import {ShopPage} from "./pages/shoppage/shoppage.components"
import Header from "./components/header/header.components"
import SigninSignup from "./pages/signin-signup/signinSignup.components"
import {auth} from  "./components/firebase/firebase.utils.jsx"
import React from "react"
/*import { Widget } from 'rasa-webchat';
function CustomWidget (){
  return (
    <Widget
      initPayload={"/get_started"}
      socketUrl={"http://localhost:5002"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"Title"}
      customComponent={ (messageData) => (<h1>asdfa</h1>)}
    >
      
      </Widget>
  )
}
*/

// const Hats = (props) =>{
//   console.log(props)

//   return(<div><h1>this is my hats page</h1></div>)
// }


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth= null;
  componentDidMount(){

    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({currentUser: user})
    
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()



  }
  



  render(){
  return (
    <div className="App" >
      
     <Header currentUser={this.state.currentUser}></Header> 
     
     <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signInSignUp" component={SigninSignup}/>
      </Switch>
   

    </div>
    
    
  );
}
}

export default App;
