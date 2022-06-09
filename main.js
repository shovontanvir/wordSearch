function searchWord(){
    let paragraph = document.querySelector("#para").innerText;
    let word = document.querySelector("#word").value;
    let output = document.querySelector("#output");
    if(paragraph.includes(word)){
        output.innerHTML = "The paragraph contains the searched word";
    }
    else{
        output.innerHTML = "The paragraph doesn't contain the searched word";
    }
}