 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



	var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	function makeTimer() {

		var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);

})(jQuery);



let productsContent = (o,searchTerm ="") => {
	fetch(`https://dummyjson.com/products`)
	.then((kQ) => kQ.json())
	.then((kQ) => {
		let html = "";
		const filteredProducts = kQ.products.filter((product) => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   product.category.toLowerCase().includes(searchTerm.toLowerCase());
        });


        filteredProducts.slice(0, 12).map((v, i) => {
			html += `
				<div class="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex">
    				<div class="product d-flex flex-column">
    					<a href="product-single.html?cat=${v.id}" class="img-prod"><img class="img-fluid" src="${v.thumbnail}" alt="">
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 pb-4 px-3">
    						<div class="d-flex">
    							<div class="cat">
		    						<span>${v.category}</span>
		    					</div>
	    					</div>
    						<h3><a href="#">${v.title}</a></h3>
    						<div class="pricing">
	    						<p class="price"><span>$${v.price}</span></p>
	    					</div>
	    					<p class="bottom-area d-flex px-3">
    							<a href="#" class="text-center py-2 mr-1 addCart" data-id="${v.id}"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
    							<a href="#" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div>
			`;
		})
		o.innerHTML = html;
		let addCartButtons = document.querySelectorAll('.addCart');
		addCartButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				let productId = button.getAttribute('data-id');
				addCart({ id: productId });
    });
});
	})
	.catch(e => console.log(e));

};

let products = document.querySelector('.productsContent')
productsContent(products);


let indexContent = (o, searchTerm = "") => {
    fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((data) => {
            let html = "";

            const shuffleArray = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            };

            const filteredProducts = data.products.filter((product) => {
                return product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       product.category.toLowerCase().includes(searchTerm.toLowerCase());
            });

            const shuffledProduct = shuffleArray(filteredProducts);

            shuffledProduct.slice(0, 8).map((v) => {
                html += `
                <div class="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex">
                    <div class="product d-flex flex-column">
                        <a href="product-single.html?cat=${v.id}" class="img-prod">
                            <img class="img-fluid imgContent" src="${v.images[0]}" alt="">
                            <div class="overlay"></div>
                        </a>
                        <div class="text py-3 pb-4 px-3">
                            <div class="d-flex">
                                <div class="cat">
                                    <span>${v.category}</span>
                                </div>
                            </div>
                            <h3><a href="#">${v.title}</a></h3>
                            <div class="pricing">
                                <p class="price"><span>$${v.price}</span></p>
                            </div>
                            <p class="bottom-area d-flex px-3">
                                <a href="#" class="text-center py-2 mr-1 addCart" data-id="${v.id}">
                                    <span>Add to cart <i class="ion-ios-add ml-1"></i></span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                `;
            });

            o.innerHTML = html;

            let addCartButtons = document.querySelectorAll('.addCart');
            addCartButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    let productId = button.getAttribute('data-id');
                    addCart({ id: productId });
                });
            });
        })
        .catch((e) => console.log(e));
};

let index = document.querySelector('.indexContent');
indexContent(index);



let menuHTML = (o) => {
    fetch(`https://dummyjson.com/products/categories`)
    .then(kQ => kQ.json())
    .then(kQ => {
        let html = "";
        kQ.map((v,i) => {
            if (i < 6)
            html += `
           
                <li><a href="shop.html?cat=${v.slug}">${v.name}</a></li>
            `;
        })
        o.innerHTML = html;
    })
    .catch(e => console.log(e));
}
let menu = document.querySelector('.menuHTML')
menuHTML(menu);
 
let productsHTML = (o, cat = "") => {
    let url = "https://dummyjson.com/products";
    if (cat) {
      url = `https://dummyjson.com/products/category/${cat}`;
    }
 
    fetch(url)
      .then((kQ) => kQ.json())
      .then((kQ) => {
        let html =  "";   
        kQ.products.map((v, i) => {
          if (i < 5) {  
            html += `
             <div class="col-lg-6 mb-5 ftco-animate">
				<a style="text-decoration:none" href="product-single.html?cat=${v.id}" class="image-popup prod-img-bg">
					<img src="${v.images[0]}" class="img-fluid" alt="Product Image">
				</a>
			</div>
              <div class="col-lg-6 product-details pl-md-5 ftco-animate">
                <h3>${v.title}</h3>
                <div class="rating d-flex">
                  <p class="text-left mr-4">
                    <a href="#" class="mr-2">${v.rating}</a>
                    <a href="#"><span class="ion-ios-star-outline"></span></a>
                  </p>
                  <p class="text-left">
                    <a href="#" class="mr-2" style="color: #000;">${v.brand}</a>
                  </p>
                </div>
                <p class="price"><span>$${v.price}</span></p>
                <p>${v.description}</p>
                <div class="row mt-4">
                  <div class="col-md-6">
                    <div class="form-group d-flex">
                      <div class="select-wrap">
                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100"></div>
                  <div class="input-group col-md-6 d-flex mb-3">
                    <span class="input-group-btn mr-2">
                      <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                        <i class="ion-ios-remove"></i>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100">
                    <span class="input-group-btn ml-2">
                      <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                        <i class="ion-ios-add"></i>
                      </button>
                    </span>
                  </div>
                  <div class="w-100"></div>
                  <div class="col-md-12">
                    <p style="color: #000;">${v.stock} pieces available</p>
                  </div>
                </div>
                <p><a href="#" class="btn btn-black py-3 px-5 mr-2 addCart" data-id="${v.id}">Add to Cart</a>
              </div>
            `;
          }
        });
 
        o.innerHTML = html;
		let addCartButtons = document.querySelectorAll('.addCart');
		addCartButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				let productId = button.getAttribute('data-id');
				addCart({ id: productId });
    });
});

      })
      .catch(e => {
        console.error("Lỗi khi lấy dữ liệu:", e);
      });
  }

 
  let url = window.location.href;
  let o = document.querySelector('.productsContent');
 
  if (url.includes('shop.html')) {
    let param = new URLSearchParams(window.location.search);
    let cat = param.get('cat'); 
    if (cat) {
		productsHTML(o,cat);
    } 
	else {
		productsHTML(o);
    }
} else {
    productsHTML(o);
  }

 
  
  let detailContent = (o) => {
    let urlParams = new URLSearchParams(window.location.search);
    let cat = urlParams.get('cat');

    fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((data) => {
            let product = data.products.find((p) => p.id == cat);

            if (product) {
                o.innerHTML = `
                    <div class="col-lg-6 mb-5 ftco-animate">
                        <a href="#" class="image-popup prod-img-bg">
                            <img src="${product.images[0]}" class="img-fluid" alt="${product.title}">
                        </a>
                    </div>
                    <div class="col-lg-6 product-details pl-md-5 ftco-animate">
                        <h3>${product.title}</h3>
                        <div class="rating d-flex">
                            <p class="text-left mr-4">
                                <a href="#" class="mr-2">${product.rating}</a>
                                <a href="#"><span class="ion-ios-star-outline"></span></a>
                            </p>
                            <p class="text-left">
                                <a href="#" class="mr-2" style="color: #000;">${product.brand}</a>
                            </p>
                        </div>
                        <p class="price"><span>$${product.price}</span></p>
                        <p>${product.description}</p>
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="form-group d-flex">
                                    <div class="select-wrap">
                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="input-group col-md-6 d-flex mb-3">
                                <span class="input-group-btn mr-2">
                                    <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                        <i class="ion-ios-remove"></i>
                                    </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100">
                                <span class="input-group-btn ml-2">
                                    <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                        <i class="ion-ios-add"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-12">
                                <p style="color: #000;">${product.stock} pieces available</p>
                            </div>
                        </div>
                        <p><a href="#" class="btn btn-black py-3 px-5 mr-2 addCart" data-id=${product.id}>Add to Cart</a>
                    </div>
                `;
            } else {
                console.error("ko có san phẩm");
            }
			let addCartButtons = document.querySelectorAll('.addCart');
		addCartButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				let productId = button.getAttribute('data-id');
				addCart({ id: productId });
    });
});
        })
        .catch((e) => console.log(e));
};
let cart = JSON.parse(sessionStorage.getItem('cart'))||[];
let detail = document.querySelector('.detailContent')
if(detail){
	
	detailContent(detail);
   
}




let detailProduct = async () => {
    url = window.location;
    let param = new URLSearchParams(url.search);
    let cat = param.get('cat');
	let data = await fetch(`https://dummyjson.com/products`)
	let kQ = await data.json()
	
	.then((data) => {
		let product = data.products.find((p) => p.id == cat);
    kQ.images.map((v, i) => {
        if(i > 0)
			 o.innerHTML += `<div class="col-lg-6 mb-5 ftco-animate">
                        <a href="#" class="image-popup prod-img-bg">
						<img src="${product.images[0]}" class="img-fluid" alt="${product.title}">
					</a>
				</div>
				<div class="col-lg-6 product-details pl-md-5 ftco-animate">
					<h3>${product.title}</h3>
					<div class="rating d-flex">
						<p class="text-left mr-4">
							<a href="#" class="mr-2">${product.rating}</a>
							<a href="#"><span class="ion-ios-star-outline"></span></a>
						</p>
						<p class="text-left">
							<a href="#" class="mr-2" style="color: #000;">${product.brand}</a>
						</p>
					</div>
					<p class="price"><span>$${product.price}</span></p>
					<p>${product.description}</p>
					<div class="row mt-4">
						<div class="col-md-6">
							<div class="form-group d-flex">
								<div class="select-wrap">
									<div class="icon"><span class="ion-ios-arrow-down"></span></div>
								</div>
							</div>
						</div>
						<div class="w-100"></div>
						<div class="input-group col-md-6 d-flex mb-3">
							<span class="input-group-btn mr-2">
								<button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
									<i class="ion-ios-remove"></i>
								</button>
							</span>
							<input type="text" id="quantity" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100">
							<span class="input-group-btn ml-2">
								<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
									<i class="ion-ios-add"></i>
								</button>
							</span>
						</div>
						<div class="w-100"></div>
						<div class="col-md-12">
							<p style="color: #000;">${product.stock} pieces available</p>
						</div>
					</div>
					<p><a href="#" class="btn btn-black py-3 px-5 mr-2 addCart">Add to Cart</a>
				</div>
			`
	});
})
}


		const displayCart = () => {
		   let cartItems = document.querySelector('.cartItems');
		   let totalPrice = 0;
		   let html = '';
				cart.map((item, index) => {
				let Total = item.quantity * item.price;
				totalPrice += Total;
				html += `
					<tr>
						<td><a href="#" class="delete-item" data-id="${item.id}">X</a></td>
						<td class="Product-img"><img src="${item.image}" alt="Image" class="img-fluid"></td>
						<td class="product-name"><h2 class="h5 text-black">${item.title}</h2></td>
						<td>$ ${item.price}</td>
						<td>
						<div class="quantity-controls">
							<button class="decrease-quantity" data-id="${item.id}">-</button>
							<span class="quantity">${item.quantity}</span>
							<button class="increase-quantity" data-id="${item.id}">+</button>
						</div>
						</td>
						<td>$${Total}</td>
					</tr>

					`;
			});
		
			cartItems.innerHTML = html;
			document.querySelector('.totalPrice').textContent = `$${totalPrice}`;
		};
			document.addEventListener('DOMContentLoaded', () => {
				displayCart();
	});
			  

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('increase-quantity')) {
			e.preventDefault();
			const productId = parseInt(e.target.dataset.id);
			updateQuantity(productId, 1);
		}
	
		if (e.target.classList.contains('decrease-quantity')) {
			e.preventDefault();
			const productId = parseInt(e.target.dataset.id);
			updateQuantity(productId, -1); 
		}
	
		if (e.target.classList.contains('delete-item')) {
			e.preventDefault();
			const productId = parseInt(e.target.dataset.id);
			removeFromCart(productId); 
		}
	});

	
const addCart = ({id}) => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(kQ => {
		let product = kQ.data;

        let sanpham = cart.find((i) => i.id === product.id);

        if(!sanpham){
            cart.push({
                id: product.id,
                image: product.images[0],
                title: product.title,
                price: product.price,
                quantity: 1
            })
        }else{
            sanpham.quantity++;
        }
        sessionStorage.setItem('cart', JSON.stringify(cart))
        alert('Thêm vào giỏ hàng thành công');
		displayCart();
		updateCartTotals();

    })
    .catch(e => console.error(e));
}

const removeFromCart = (id) => {

    const productIndex = cart.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Sản phẩm đã xóa khỏi giỏ hàng');
        displayCart();
		updateCartTotals();

    } else {
        alert('Sản phẩm không tồn tại');
    }
};

const updateQuantity = (id, change) => {
    const product = cart.find((item) => item.id === id);

    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            cart = cart.filter((item) => item.id !== id);
            alert('Sản phẩm được xóa khỏi giỏ hàng');
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));

        displayCart();
		updateCartTotals();

    } else {
        alert('Sản phẩm không tồn tại');
    }
};
const updateCartTotals = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    let subtotal = 0;
    let totalQuantity = 0;

    cart.forEach((item) => {
        subtotal += item.quantity * item.price;
        totalQuantity += item.quantity;
    });


    let discountRate = 0;
    if (totalQuantity > 10) {
        discountRate = 0.15;
    } else if (totalQuantity > 5) {
        discountRate = 0.10;
    } else if (totalQuantity > 2) {
        discountRate = 0.05; 
    }

    const discount = subtotal * discountRate;
    const deliveryFee = subtotal > 0 ? 5.0 : 0.0; 
    const total = subtotal - discount + deliveryFee;

    document.querySelector('#Subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('#Delivery').textContent = `$${deliveryFee.toFixed(2)}`;
    document.querySelector('#Discount').textContent = `-$${discount.toFixed(2)}`;
    document.querySelector('#total-price').textContent = `$${total.toFixed(2)}`;
};

document.addEventListener('DOMContentLoaded', () => {
updateCartTotals();
});






document.getElementById('searchButton').addEventListener('click', function() {
	const query = document.getElementById('searchInput').value.trim();
	const resultsContainer = document.getElementById('results');
  
	// Reset kết quả cũ
	resultsContainer.innerHTML = '';
  
	if (query) {
	  // Mock dữ liệu kết quả
	  const mockResults = [
		{ id: 1, name: 'Result 1', description: 'This is the first result for ' + query },
		{ id: 2, name: 'Result 2', description: 'Second result containing ' + query },
		{ id: 3, name: 'Result 3', description: 'More information about ' + query },
	  ];
  
	  // Render kết quả tìm kiếm
	  mockResults.forEach(result => {
		const resultElement = document.createElement('div');
		resultElement.style.marginBottom = '10px';
  
		resultElement.innerHTML = `
		  <h3>${result.name}</h3>
		  <p>${result.description}</p>
		`;
  
		resultsContainer.appendChild(resultElement);
	  });
	} else {
	  resultsContainer.innerHTML = '<p>Please enter a query to search.</p>';
	}
  });
  

 
