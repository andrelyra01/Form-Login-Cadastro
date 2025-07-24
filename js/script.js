

const mode = document.getElementById('mode_icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form')
    // se contem a class 
   if(mode.classList.contains('fa-moon')){
    // remova a class
    mode.classList.remove('fa-moon');
    // e adicone a class
    mode.classList.add('fa-sun')
    // e a class dark do css
    form.classList.add('dark')

    return
   }

//faz voltar o icone lua    
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun')
    form.classList.remove('dark')

})