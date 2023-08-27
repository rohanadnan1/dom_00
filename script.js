// let beam = document.querySelector(".beam")
// document.addEventListener("mousemove" , (event) =>{
//     let mouseY = event.clientY;
//     let rotationRange = 8;
//     let rotationAngle = 
//     (mouseY/window.innerHeight) * rotationRange - rotationRange / 2;
//     beam.style.transform = `translate(0% , -50%) rotate(${-rotationAngle}deg)`
// })

// let btn = document.querySelector(".material-symbols-outlined")
//  function toggle(){
//     let password = document.getElementById("password")
//     if (btn.innerText == "visibity_off") {
//         btn.innerText = "visibility"
//     }
//     else{
//         btn.innerText = "visibility_off"
//     }
// }


// let beam = document.querySelector(".beam");
//       document.addEventListener("mousemove", (event) => {
//         let mouseY = event.clientY;
//         let rotationRange = 8;
//         let rotationAngle =
//           (mouseY / window.innerHeight) * rotationRange - rotationRange / 2;
//         beam.style.transform = `translate(0%, -50%) rotate(${-rotationAngle}deg)`;
//       });

//       function toggle(btn) {
//         let password = document.getElementById("password");
//         if (btn.innerText == "visibility_off") {
//           password.setAttribute("type", "text");
//           password.style.color = "black";
//           btn.innerText = "visibility";
//         } else {
//           password.setAttribute("type", "password");
//           password.style.color = "white";
//           btn.innerText = "visibility_off";
//         }
//         beam.classList.toggle("on");
//       }

let beam = document.querySelector(".beam");
document.addEventListener("mousemove" , (event) => {
  let mouseY = event.clientY;
  let rotationRange = 8;
  let rotationAngle = (mouseY/window.innerHeight) * rotationRange - rotationRange / 2;
  beam.style.transform = `translate(0% , -50%) rotate(${-rotationAngle}deg)`;
})

function toggle(btn) {
  let password = document.getElementById("password");
  if(btn.innerText == "visibility_off"){
    password.setAttribute("type" , "text");
    password.style.color = "black"
    btn.innerText = "visibility"
  }else{
    password.setAttribute("type" , "password")
    password.style.color = "black"
    btn.innerText = "visibility_off"
  }
  beam.classList.toggle("on");
}