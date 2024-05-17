function clickh2(i){
    let id = 'p' + i;
    let p = document.getElementById(id);
    let img = document.getElementsByTagName("img")[i];
    if(p.style.display == "none"){
        p.style.display = "block";
        img.src = "assets/images/icon-minus.svg";
    }else{
        p.style.display = "none";
        img.src = "assets/images/icon-plus.svg";
    }
}