// var currentImage = 1;
// var totalImage = 4;

// function changeImg() {
//     var imgChange = document.getElementById('img1');
//     imgChange.src = "/assets/bear" + currentImage + currentImage + ".png";
// }

// function buttonSwap() {
//     if (currentImage < totalImage) {
//         currentImage++;
//         changeImg();
//     } else {
//         document.getElementById('fastBtn').style.display = "inline-block";
//         document.getElementById('noBtn').style.display = "none";
//     }
// }

// function yesClicked() {
//     imgChange = document.getElementById('img1');
//     imgChange.src = "/assets/bear55.png";
//     var headerChange = document.getElementById('header');
//     headerChange.innerHTML = "❤ YAY ❤ <br> Malibu Farm <br> Feb 14 @ 4:30PM <br> Appointment Booked!";
//     headerChange.style.top = "50%";

//     var hideBtn = document.getElementsByClassName('btn');
    
//     for (var i = 0; i < hideBtn.length; i++) {
//         hideBtn[i].style.display = "none";
//     }
// }


var currentImage = 2;
var totalImage = 4;
var headerArray = ["Really...", "WHAT?! WHY NOT?!", "GUESS WHAT...it's inevitable!!!"]

function changeImg() {
    var imgChange = document.getElementById('img1');
    if (currentImage <= totalImage) {
        imgChange.src = "/assets/bear" + currentImage + currentImage + ".png";

        var headerChange = document.getElementById('header');
        var currentHeader = currentImage - 2;

        if (currentHeader < headerArray.length) {
            headerChange.innerHTML = headerArray[currentHeader]
        }
        
        if (currentImage === totalImage) {
            document.getElementById('noBtn').style.display = "none";
            document.getElementById('fastBtn').style.display = "inline-block";
        }
        currentImage++;
    }
}

function yesClicked() {
    imgChange = document.getElementById('img1');
    imgChange.src = "/assets/bear55.png";
    var headerChange = document.getElementById('header');
    headerChange.innerHTML = "❤ YAY ❤ <br> Malibu Farm <br> Feb 14 @ 4:30PM <br> Appointment Booked!";
    headerChange.style.top = "50%";

    var hideBtn = document.getElementsByClassName('btn');

    for (var i = 0; i < hideBtn.length; i++) {
        hideBtn[i].style.display = "none";
    }
}

function buttonSwap() {
    changeImg();
}



const button = document.getElementById('fastBtn');

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};