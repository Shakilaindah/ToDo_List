const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // alert bila belum menuliskan text
    if(inputBox.value == ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // untuk icon silang pada akhir text
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // untuk mengahpus input box setelah klik add
    inputBox.value = "";
    saveData();
}

// untuk efek coret bila di klik dan tombol menghapus list nya
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// untuk menyimpan data listnya bila membuka browser lagi listnya tidak akan hilang
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// buat nampilin data listnya bila ke refresh akan tetap ada tidak akan hilang
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();