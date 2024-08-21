let Name = document.getElementById('name-field');
let email = document.getElementById('email-field');

let subject =  document.getElementById('subject-field');
let message = document.getElementById('message-field');
let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
let form = document.getElementById('form');
let name_error= document.getElementById('name_error');
let email_error= document.getElementById('email_error');
let subject_error= document.getElementById('subject_error');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let flag=0;
    if(Name.value === '' || Name.value ==null){
        name_error.innerHTML = "Name is required";
        name_error.style.color="red";
        flag=1;
    
    }if(email.value === '' || email.value ==null){
        email_error.innerHTML = "Email is required";
        email_error.style.color="red";
        flag=1;
    }else if(!(pattern.test(email.value))){
        email_error.innerHTML ="enter a valid email";
        email_error.style.color="red";
        flag=1;
    }

    if(subject.value === '' || subject.value ==null){
        subject_error.innerHTML = "Subject is required";
        subject_error.style.color="red";
        flag=1;
    }
    if(message.value === '' || message.value ==null){
        message_error.innerHTML = "Messege is required";
        message_error.style.color="red";
        flag=1;
    }
    if(flag===0){
        const formData={
            Name:Name.value,
            email:email.value,
            subject:subject.value,
            message:message.value,
        }
        emailjs.init({
            publicKey: "o3KeIyrzqjllWBbd0",
          });
        emailjs.send("service_uqqt6ql", "template_nmdm1du", formData,);
    }
    if(flag===0){
        Submit_success.innerHTML="Thank you for your message. I will get back to you soon....! ";
        Submit_success.style.color="green";
    }

})