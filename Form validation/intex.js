
class FormValidation{
    formValues = {
        username :"",
        email :"",
        phone :"",
        password : "",
        confirmpassword :""
    }
    errorValues = {
        usernameErr :"",
        emailErr :"",
        phoneErr :"",
        passwordErr : "",
        confirmpasswordErr :""
    }
    showErrorMsg(index,msg){
      const form_group = document.getElementsByClassName("form-group")
      [index]
      form_group.classList.add('error')
      form_group.getElementsByTagName('span')[0].textContent = msg
    }
    showSuccessMsg(index){
        const form_group =document.getElementsByClassName('form-group')
        [index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
       this.formValues.username=document.getElementById('username').value.trim()
       this.formValues.email=document.getElementById('email').value.trim()
       this.formValues.phone=document.getElementById('phone').value.trim()
       this.formValues.password=document.getElementById('password').value.trim()
       this.formValues.confirmpassword=document.getElementById('confirmpassword').value.trim()

    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter User-Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
         }else if(this.formValues.username.length <= 4){
            this.errorValues.usernameErr="* User-name must be atleast 5 Characters"
            this.showErrorMsg(0,this.alertmessage.usernameErr)}
        else if(this.formValues.username.length <= 14){
            this.errorValues.usernameErr="* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.alertmessage.usernameErr)}
         else{
            this.errorValues.usernameErr=""
            this.showSuccessMsg(0)
         }   
           
         }
    
    validateEmail(){
          const regexp =/ ^ ([a-az=Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
          if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Please Enter vaild mail"
            this.showErrorMsg(0,this.errorValues.emailErr)
         }else if(!(regexp.test(this.formValues.email))){
            this.errorValues.usernameErr="* Invaild mail"
            this.showErrorMsg(1,this.errorValues.emailErr)}
         else{
            this.errorValues.emailErr=""
            this.showSuccessMsg(1)
         }   
        }
    validatePhone(){
          const phone= /^\d{10}$/
          if(this.formValues.phone === ""){
            this.errorValues.phoneErr = "* Please Enter your phone number"
            this.showErrorMsg(2,this.errorValues.phoneErr)
         }else if(!(phone.test(this.formValues.phone))){
            this.errorValues.phoneErr="* "
            this.showErrorMsg(2,this.errorValues.phoneErr)}
         else{
            this.errorValues.phoneErr=" Invalid phone no"
            this.showSuccessMsg(2)
         }   

    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please provide a password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
         }else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr="* password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)} 
            else if(this.formValues.password.length > 10){
                this.errorValues.passwordErr="* password should not exceeds 10 Characters"
                this.showErrorMsg(3,this.errorValues.passwordErr)}
             else{
                this.showErrorMsg.passwordErr=""
                this.showSuccessMsg(3)
             }    
    }
    validateConfirmpassword(){
        if(this.formValues.confirmpassword === ""){
            this.errorValues.confirmpasswordErr = "* Invalid confirm password"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
         }else if(this.formValues.confirmpassword=== this.formValues.password &&
            this.errorValues.passwordErr===""){
            this.errorValues.passwordErr="* password must be atleast 5 Characters"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)} 
            else if(this.formValues.confirmpassword.length > 10){
                this.errorValues.confirmpasswordErr="* password should not exceeds 10 Characters"
                this.showErrorMsg(4,this.errorValues.confirmpasswordErr)}
             else{
                this.showErrorMsg.confirmpasswordErr=""
                this.showSuccessMsg(4)
             }    
    }
    alertmessage(){
           const {usernameErr,emailErr,phoneErr,passwordErr,confirmpasswordErr}= this.errorValues
           if(usernameErr==="" && emailErr === "" && phoneErr === "" &&
           passwordErr=== "" && confirmpasswordErr === ""){
            swal("Registration Successfull", "Thankyou, "+this.formValues.username,
            "success")
            console.log(this.formValues)
            this.removeInputs()
           }else{
            swal("Give vaild Inputs","click ok to continue","error")
           }
    }   
    removeInputs(){
         const form_group =document.getElementsByClassName('form-group')
         console.log(form_group)
         Array.form(form_group).forEach(element => {
            element.getElementsByTagName('inputs')[0].value=""
        element.getElementsByTagName('span')[0].textContent="" 
    element.classList.remove('success')   
     });
    }
}
const validateUserInputs  = new  FormValidation
()
document.getElementsByClassName('form')[0].
addEventListener("submit", event => {
    event.preventDefault()
    validateUserInputs.getInputs()
    validateUserInputs.validateUsername()
    validateUserInputs.validateEmail()
    validateUserInputs.validatePhone()
    });
 
