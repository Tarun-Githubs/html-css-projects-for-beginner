document.getElementById('toggle').addEventListener('change', function(){
    const loginForm=document.getElementById('login-form');
    const signupForm=document.getElementById('signup-form');


    if(this.checked){
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
    else{
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
});