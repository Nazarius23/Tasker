document.addEventListener('click', documentClick)

function documentClick(e) {
	const targetItem = e.target

	if (targetItem.closest('.menu-btn')) {
		document.documentElement.classList.toggle('menu-open')
	}
}

new Swiper('.testimonials__swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: '.testimonials__swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
})

// =================================================================

$(document).ready(function () {
	$('.info-faqs__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(400)
	})
})

// =================================================================

// Скріпт для ангімацї
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
	window.addEventListener('scroll', animOmScroll)
	function animOmScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4

			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}
			if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
				animItem.classList.add('_active')
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollleft }
	}
	setTimeout(() => {
		animOmScroll()
	}, 300)
}
