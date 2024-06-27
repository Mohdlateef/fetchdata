
let url="https://gauravgitacc.github.io/postAppData/posts.json"
let container=document.getElementById("container");
let button =document.getElementById("btn");
button.addEventListener("click",getdata);
async function getdata(){
 let res=await fetch(url);
 console.log(res)
 let data=await res.json();
 console.log(data)
 data.map((item)=>{
    let ele=document.createElement("div");
    let del=document.createElement("button")
    del.addEventListener("click",remove)
    del.innerText="delete"
    
    console.log(item.title)
    ele.innerHTML=`${item.title}`
    ele.appendChild(del)

    container.appendChild(ele);
 })

}
function remove(e){
    console.log(e.target.parentNode)
    e.target.parentNode.remove();
}