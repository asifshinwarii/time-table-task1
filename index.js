let body = document.querySelector("body")
let btn = document.getElementById("mode")
let header = document.querySelector("header")
let footer = document.querySelector("footer")

btn.addEventListener("click", () => {
    if (btn.className.includes("bg-white")) {
        btn.classList.add("bg-black")
        btn.classList.remove("bg-white")
        body.classList.add("bg-black")
        body.classList.remove("bg-white")
        header.classList.add("bg-white")
        header.classList.remove("bg-black")
    }
    else {
        btn.classList.add("bg-white")
        btn.classList.remove("bg-black")
        body.classList.add("bg-white")
        body.classList.remove("bg-black")
        header.classList.add("bg-black")
        header.classList.remove("bg-white")   
    }
})