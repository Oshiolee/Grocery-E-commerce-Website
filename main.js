var menu = document.querySelector("#menu-bar")
var navbar = document.querySelector(".navbar")
var header = document.querySelector(".header-2")

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times")
  navbar.classList.toggle("active")
})

window.onscroll = function () {
  menu.classList.remove("fa-times")
  navbar.classList.remove("active")

  if (window.scrollY > 150) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
}

var countDate = new Date("April 20, 2023 00:00:00").getTime()

function countDown() {
  var now = new Date().getTime()
  gap = countDate - now

  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var d = Math.floor(gap / day)
  var h = Math.floor((gap % day) / hour)
  var m = Math.floor((gap % hour) / minute)
  var s = Math.floor((gap % minute) / second)

  document.getElementById("day").innerText = d
  document.getElementById("hour").innerText = h
  document.getElementById("minute").innerText = m
  document.getElementById("second").innerText = s
}

setInterval(function () {
  countDown()
}, 1000)
