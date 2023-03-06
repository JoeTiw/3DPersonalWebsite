const letters = "ABCDEFGHIJFKLMNOPQRSTUVWXYZ";

document.querySelector("#gliched-text").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        }).join("");
        if(iterations >= event.target.dataset.value.length)
        {
            clearInterval(interval);
        }
        iterations += 1/3;
    }, 30);
    
}


// Dark & Light toggle

// document.querySelector(".day-night input").addEventListener("change", () => {
//     document.querySelector("body").classList.add("toggle");
//     setTimeout(() => {
//       document.querySelector("body").classList.toggle("light");
  
//       setTimeout(
//         () => document.querySelector("body").classList.remove("toggle"),
//         10
//       );
//     }, 5);
//   });
  