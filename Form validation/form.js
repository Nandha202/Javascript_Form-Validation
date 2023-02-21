const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const datepicker =document.getElementById('datepicker')
const phone =document.getElementById('phone');
const password =document.getElementById('password');
const confirmpassword =document.getElementById('confirmpassword');

form.addEventListener('submit', e=>{
   e.preventDefault();
   checkInput();
//    alert('check it')

});



function checkInput(){
    const usernameValue= username.value; 
    const emailValue= email.value;
    const datepickerValue=datepicker.value;
    const phoneValue= phone.value;
    const passwordValue= password.value;
    const confirmpasswordValue = confirmpassword.value;
    
    if ( usernameValue === ''){
        setError(username,'User name cannot be blank');
    }
    else{
        setSuccess(username);
    }
    if ( emailValue === ''){
        setError(email,'Email  cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError('Not a vaild Email');
    }
    else{
        setSuccess(email);
    }
    if (phoneValue == ''){
        setError(phone,'Phone no cannot be blank');
    }
    else if(!isPhone(phoneValue)){
        setError('Not a vaild phone');
    }
    else{
        setSuccess(phone);
    }
    if(datepickerValue == ''){
        setError(datepicker,'dob cannot be blank');   
    }
    else if(!isdatepicker(datepicker)){
        setError(datepicker,'Not a mydate');

    }
    else{
        setSuccess(dob);
    }
    if (passwordValue == ''){
        setError(password,'Password cannot be blank');
    }
    else{
        setSuccess(password);
    }
    if ( confirmpasswordValue == ''){
        setError(confirmpassword,'Password cannot be blank');
    }
    else if(passwordValue === confirmpasswordValue){
         setSuccess(confirmpassword)
    }
    else {
        setError(confirmpassword,'Password does not be match');
    }
    alert('Registeration is vaild')

}
function setError(input, message,) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span');
    formGroup.className = 'form-group error ';
    span.innerText =message;
}
function setSuccess(input){
    const formGroup =input.parentElement;
    formGroup.className ='form-group success';
}
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function isPhone(phone){
    return  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
}

$(function isdatepicker(datepicker) {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#datepicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#datepicker').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});
