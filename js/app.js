const counter = document.getElementById("counts");
const refresh = document.getElementById("refresh");
const p = document.getElementById("tasbiha");
let num = parseInt(counter.innerText);

counter.addEventListener('click', ()=>{
    num++
    counter.innerText = num;

    if ( counter.innerText === "33"){
        p.innerText = "الحمد الله" 
        console.log("breakpoit reached")
    }
    if ( counter.innerText === "66"){
        p.innerText = "الله أكبر" 
        console.log("breakpoit reached")
    }
  
    if ( counter.innerText === "99"){
        p.innerText = "لقد أكملت التسبيح" 
        counter.setAttribute("disabled", "true")
        refresh.style.display = "block";
        counter.style.display = "none"
    }
})

if ( counter.innerText === "0"){
    p.innerText = "سبحان الله"
    console.log("breakpoit reached")
}


refresh.addEventListener('click', ()=>{
    window.location.reload();
})