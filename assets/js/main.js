const fetchImage = (async () => {
const response = await fetch('https://api.unsplash.com/search/photos/?query=coffee&client_id=TcDkidMYRW8fBs4kaxv2Wblm8XatJCrvmpOPBd_EI-Y')
return await response.json()
})()
   





   function showmenu(id) {
    var list = document.getElementById("list"+id);
    var menu = document.getElementById("menu"+id)
    if (list.style.display=="none") {
     document.getElementById("list"+id).style.display="block";
     menu.className = "title2";
    }else {
     document.getElementById("list"+id).style.display="none";
     menu.className = "titl1";
    }
   } 