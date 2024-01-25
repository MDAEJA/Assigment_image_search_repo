const accessKey ="q3mNwJ4eDuARWHU3pK4oBYPFtBYAC6cS6XtgLoDfwS4"
let searchText = document.querySelector("#search");
let form = document.querySelector("form");
let searchButton = document.querySelector(".find");
let img_div = document.querySelector(".img_section");
let addMore = document.querySelector(".add_more");
let page = 1;
let inputValue = "";
form.addEventListener('submit',(event)=>{
event.preventDefault();
page = 1
img_div.innerHTML = "";
inputValue = searchText.value;

if(inputValue === "") return alert("pls enter image name");
let url =`https://api.unsplash.com/search/photos?per_page=28&page=${page}&query=${inputValue}&client_id=${accessKey}`
fetch(url)
.then(response=>response.json())
.then(responseCheck=>{
const res = responseCheck.results;
console.log(res);
res.forEach((img)=>{
const getUrl = img.urls.regular;
const getdesc = img.alt_description;
console.log(img.alt_description);
let imgdiv = document.createElement("div");
imgdiv.innerHTML = `<div class=xyz><img src="${getUrl}" width="300px" height="300px" style="border-radius:30px"></img></div><div class="getdata"><p>${getdesc}</p></div>`
img_div.append(imgdiv);
console.log(getUrl);
})
})  
})
// show more images by click
addMore.addEventListener("click",()=>{
    ++page;
    let url =`https://api.unsplash.com/search/photos?per_page=20&page=${page}&query=${inputValue}&client_id=${accessKey}`
    fetch(url)
    .then(response=>response.json())
    .then(responseCheck =>{
     const res = responseCheck.results;
 
     res.forEach((img)=>{
     const getUrl = img.urls.small;
      const getdesc = img.alt_description;
      let imgdiv = document.createElement("div");
       imgdiv.innerHTML = `<div class=xyz><img src="${getUrl}" width="300px" height="300px" style="border-radius:30px"></img></div><div class="getdata"><p>${getdesc}</p></div>`
      img_div.append(imgdiv);
       console.log(getUrl);

})

    })
    
})













