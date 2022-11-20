const BASE_URL =`https://api.unsplash.com`;
fetch(`${BASE_URL}/search/photos/?query=coffee&client_id=TcDkidMYRW8fBs4kaxv2Wblm8XatJCrvmpOPBd_EI-Y`)
.then(Response => Response.json())
.then(data =>{
   let img_url =  data["results"][0]["urls"]["regular"];

   let img = document.createElement("img");
   img.scr =results["urls"]["regular"]; 
   document.querySelector(".home-page__img").append(img);
});





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