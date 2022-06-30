function dodaj() {
    let biljeska = document.getElementById('myInput').value;
    // ako input nije prazan
    if(biljeska != 0) {
        let napravi_li = document.createElement('li')
        napravi_li.setAttribute('onclick', 'odradjeno(this)');
        napravi_li.innerHTML = biljeska + "<div onclick='obrisi(this)' class='obrisi'>&#10008;</div>";
        let parent = document.getElementById('myUL');
        parent.appendChild(napravi_li);
        document.getElementById('myInput').value = "";
        return;
    }
    alert("Unesi biljesku!");
}

function obrisi(task) {
    parent = task.parentElement;
    parent.remove();
}

function odradjeno(task) {
    if(task.classList.contains("li-odradjeno")) {
        task.classList.remove("li-odradjeno")
    }
    else {
    task.classList.add("li-odradjeno");
 }
}