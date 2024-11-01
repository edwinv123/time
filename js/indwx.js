const d = new Date();
let hour = d.getHours();
//hour=1
//hour=15
//hour=19
// console.log(hour);
let greetingText = document.getElementById("greeting-text");
hour=19
if (hour < 12) {
    // if hour is less than 12pm
    greetingText.textContent = "Good Morning!";
    document.querySelector(".night").classList.add("d-none");
    document.querySelector(".afternoon").classList.add("d-none");
    } else if (hour < 17) {
        // if hour is less than 17:00 (but greater than 12pm)
        greetingText.textContent = "Good Afternoon";
        document.getElementsByTagName("body")[0].classList.add("noon-bg");
        greetingText.parentElement.classList.add("noon-gradient");
        document.querySelector(".morning").classList.add("d-none");
        document.querySelector(".night").classList.add("d-none");
      }
      else {
        greetingText.textContent = "Good Night";
        greetingText.parentElement.classList.add("night-gradient");
        document.querySelector(".morning").classList.add("d-none");
        document.querySelector(".afternoon").classList.add("d-none");
      }

//    let greetngElement = document.getElementById("greeting");
// console.log(greetingElement);

// document.getElementById("greeting").innerText = "Good Night";