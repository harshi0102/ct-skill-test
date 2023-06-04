

const slide1 = document.querySelector(".myPicSlides1");
const slide2 = document.querySelector(".myPicSlides2");
const slide3 = document.querySelector(".myPicSlides3");
const NumberOne = document.querySelector(".NumberOne");
const NumberTwo = document.querySelector(".NumberTwo");
const NumberThree = document.querySelector(".NumberThree");

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");

const tab1 = document.querySelector(".main-container6");
const tab2 = document.querySelector(".main-container6");

const blanksectionSmooth = document.querySelector(".main-container2half");
const dropDownButton = document.getElementById("dropdown");
const dropDownContent = document.querySelector(".dropdowndetails");

NumberOne.addEventListener('click',
    function (e) {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
        NumberOne.style.backgroundColor = "#A8A8A8";
        NumberTwo.style.backgroundColor = "#ffffff";
        NumberThree.style.backgroundColor = "#ffffff";
    }
);
NumberTwo.addEventListener('click',
    function (e) {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
        NumberOne.style.backgroundColor = "#ffffff";
        NumberTwo.style.backgroundColor = "#A8A8A8";
        NumberThree.style.backgroundColor = "#ffffff";
    }
);
NumberThree.addEventListener('click',
    function (e) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
        NumberOne.style.backgroundColor = "#ffffff";
        NumberTwo.style.backgroundColor = "#ffffff";
        NumberThree.style.backgroundColor = "#A8A8A8";
    }
);


button1.addEventListener('click',
    function (e) {
        button1.style.color = "#414f6b";
        button1.style.backgroundColor = "#b0b4be";
        button2.style.color = "#b0b4be";
        button2.style.backgroundColor = "#414f6b";

        button1.style.textDecoration = "underline";
        button2.style.textDecoration = "none";
        tab1.style.display = "flex";
        tab2.style.display = "none";
    }
);
button2.addEventListener('click',
    function (e) {
        button2.style.color = "#414f6b";
        button2.style.backgroundColor = "#b0b4be";
        button1.style.color = "#b0b4be";
        button1.style.backgroundColor = "#414f6b";

        button1.style.textDecoration = "none";
        button2.style.textDecoration = "underline";
        tab1.style.display = "none";
        tab2.style.display = "flex";
    }
);

button3.addEventListener('click',
    function (e) {
        button3.style.color = "#414f6b";
        button3.style.backgroundColor = "#b0b4be";
        button4.style.color = "#b0b4be";
        button4.style.backgroundColor = "#414f6b";

        button3.style.textDecoration = "underline";
        button4.style.textDecoration = "none";
        tab1.style.display = "flex";
        tab2.style.display = "none";
    }
);
button4.addEventListener('click',
    function (e) {
        button4.style.color = "#414f6b";
        button4.style.backgroundColor = "#b0b4be";
        button3.style.color = "#b0b4be";
        button3.style.backgroundColor = "#414f6b";

        button4.style.textDecoration = "none";
        button3.style.textDecoration = "underline";
        tab1.style.display = "none";
        tab2.style.display = "flex";
    }
);
window.onscroll = function () { myFunction() };
var navbar = document.querySelector(".main-container2");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        blanksectionSmooth.style.display = "block";
    } else {
        blanksectionSmooth.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

dropDownButton.addEventListener('click', function () {
    if (dropDownContent.style.display === "none") {
        dropDownContent.style.display = "block";
    } else {
        dropDownContent.style.display = "none";
    }
})