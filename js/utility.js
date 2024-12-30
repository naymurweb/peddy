const removeActive=()=>{
    const categoryBtn=document.getElementsByClassName('category-btn')
    for(const btn of categoryBtn){
        btn.classList.remove('active')
    }
}