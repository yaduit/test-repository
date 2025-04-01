const btns= document.querySelectorAll(".btn");
const body = document.body;

btns.forEach(btn=>{
       btn.addEventListener("click",()=>{
              color = btn.value;
              changeBackground(color);
              
       })
})

function changeBackground(color){
       body.className="";


       switch(color){
              case "red":
                     body.classList.add("red")
                     break;

              case "blue":
                     body.classList.add("blue")
                     break;

              case "green":
                     body.classList.add("green")
                     break;
              case "black":
                     body.classList.add("black")
                     break;
              default:
                     break;
       }
}