//Menu
const menu = document.querySelector(".header-menu")
const toggle = document.querySelector(".header-toggle")
toggle.addEventListener("click", function(){
	menu.classList.add("is-expand")
})
window.addEventListener("click", function(e){
	if (!menu.contains(e.target) && (!e.target.matches(".header-toggle"))){
		menu.classList.remove("is-expand")
	}
})

// Accordion


const lists = document.querySelectorAll(".wedo-header")
Array.from(lists).forEach(item => item.addEventListener("click", handle))
function handle(e){
	const content = e.target.nextElementSibling
	const icon = e.target.querySelector(".wedo-arrow")
	content.classList.toggle("is-active")
	icon.classList.toggle("fa-angle-down")
	icon.classList.toggle("fa-angle-up")
}

// slider

$(document).ready(function(){
	$('.quote-container').slick({
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 767,
				setting: {
					arrows: false
				}

			}
		]
	})
  });