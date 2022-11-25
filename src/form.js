import React from "react";
/*import PasswordStrengthBar from 'react-password-strength-bar';*/
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {  //this.state is usually react object used to contain data or information about component 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   //triggered by input element and triggers the changing of this state  
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "please fill this column";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "only alphabets";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "invalid email";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Enter a valid mail id";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "please fill this password";
    }

    if (typeof fields["password"] != "undefined") {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "Password is Weak";
      }
    }
    if (typeof fields["password"] != "undefined") {
        if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
          formIsValid = false;
          errors["password"] = "Password is Weak";
        }
      }
    

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3>Dynamic Form</h3><br/><br/><br/>
      <form method="post"  name="dynamicform"  onSubmit= {this.submituserRegistrationForm} >

      <label>Enter your UserName</label><br/>
      <input type="text" name="username" placeholder="your username" value={this.state.fields.username} onChange={this.handleChange}/>
      <div className="errorMsg">{this.state.errors.username}</div>

      <br/><br/>

      <label>Enter your Email-id</label><br/>
      <input type="text" name="email" placeholder="your email"  value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>

      <br/><br/>

      <label>Enter your Password</label><br/>
      <input type="password" name="password" placeholder="your password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <br/><br/>
      <input type="submit" class="button" className="button"  value="Register"/>
      </form>
  </div>
</div>

    );
}


}

export default RegisterForm