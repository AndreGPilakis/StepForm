import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

//Method to go to next step
nextStep = () => {
    const{step} = this.state;
    this.setState({
        step: step+1
    });
}

//Method to go to back a step
prevStep = () => {
    const{step} = this.state;
    this.setState({
        step: step-1
    });
}

//Handle fields change should edit whenever we change step. The "input is given from inside FormUserDetails"
handleChange = input => e =>{
   this.setState({[input]: e.target.value});
}

    render() {
        console.log("render called");
        const {step} = this.state;
        const{firstName, lastName,email,occupation,city,bio} = this.state;
        const values = {firstName, lastName,email,occupation,city,bio}      
       
        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return <h1>Cofnirm</h1>
            case 4:
                return <h1>Success</h1>
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
 