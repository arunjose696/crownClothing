
import "./signIn.styles.scss"
import React from "react"

import FormInput from "../form-input/formInput.components"
import CustomButton from "../custom-botton/custom-button.components"
import {SignInWithPopup} from  "../firebase/firebase.utils"
export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        }

        

    }
    handleChange= event =>{
        const {name,value}=event.target;
        this.setState({[name]:value})
        


    


    }

    handleSubmit= event => {
        event.preventDefault()
        this.setState({password:"",username:""})
       
        



    }
    render(){
        return(
        <div className="sign-in">
        <h1>SignIn</h1>
        <span>click here if you already have an account</span>
        <form onSubmit={this.handleSubmit}>
            
            <FormInput name="username" type="email" label="Email" value={this.state.username}  handleChange={this.handleChange} required/>
            
            <FormInput name="password" label="password" value={this.state.password}  handleChange={this.handleChange} type="password" required/>
            <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={SignInWithPopup} isGoogleSignIn>sign in with google</CustomButton>

            </div>
            
            
        </form>
        </div>

            
            
            )
        
    }


}