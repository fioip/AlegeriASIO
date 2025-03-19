document.addEventListener("DOMContentLoaded", ()=>{

    let candidates = JSON.parse(localStorage.getItem('candidates') || []);

    function SaveLocalData(){
        localStorage.setItem('candidates' , JSON.stringify(candidates));
    }

    SaveLocalData();
})