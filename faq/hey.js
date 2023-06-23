const accordians=document.querySelectorAll('.accordiam');
accordians.forEach(accordiam => {
    const icon=accordiam.querySelector('.icon');
    const answer=accordiam.querySelector('.answer');

    accordiam.addEventListener('click' , () =>{
    icon.classList.toggle('active');
    answer.classList.toggle('active')
})
})
