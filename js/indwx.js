const d = new Date();
let hour = d.getHours();

console.log(hour);

if (hour < 12) {
    //Morning
    document.getElementById("greeting").innerText = "Good Morning";
    document.getElementById("image").src = "img/images.jpg";
    } else if (hour < 17) {
    // Afternoon
    document.getElementById("greeting").innerText = "Good Afternoon";
    document.getElementById("image").src = "img/";
    }
    else {
    // Night
    document.getElementById("greeting").innerText = "Good Night";
    document.getElementById("image").src = "img/chamoy.jpg";
    }

//    let greetngElement = document.getElementById("greeting");
// console.log(greetingElement);

// document.getElementById("greeting").innerText = "Good Night";