(function(a){var b=a(window);b.on("load",function(){a("#preloader").fadeOut("1000",function(){a(this).remove()})});b.on("scroll",function(){if(b.scrollTop()>0){a(".header-area").addClass("sticky")}else{a(".header-area").removeClass("sticky")}});if(a.fn.owlCarousel){var d=a(".welcome_slides");d.owlCarousel({items:1,loop:true,autoplay:true,smartSpeed:1500,nav:true,navText:["<i class='ti-angle-left'</i>","<i class='ti-angle-right'</i>"],dots:true,animateIn:"fadeIn",animateOut:"fadeOut"});d.on("translate.owl.carousel",function(){var e=a("[data-animation]");e.each(function(){var f=a(this).data("animation");a(this).removeClass("animated "+f).css("opacity","0")})});a("[data-delay]").each(function(){var e=a(this).data("delay");a(this).css("animation-delay",e)});a("[data-duration]").each(function(){var e=a(this).data("duration");a(this).css("animation-duration",e)});d.on("translated.owl.carousel",function(){var e=d.find(".owl-item.active").find("[data-animation]");e.each(function(){var f=a(this).data("animation");a(this).addClass("animated "+f).css("opacity","1")})});a(".client_slides").owlCarousel({responsive:{0:{items:1},991:{items:2},767:{items:1}},loop:true,autoplay:true,smartSpeed:700,dots:true});var c=a(".client_slides .owl-dot");c.each(function(){var e=a(this).index()+1;if(e<10){a(this).html("0").append(e)}else{a(this).html(e)}})}if(a.fn.magnificPopup){a("#videobtn").magnificPopup({type:"iframe"});a(".gallery_img").magnificPopup({type:"image",gallery:{enabled:true},removalDelay:300,mainClass:"mfp-fade",preloader:true})}if(a.fn.imagesLoaded){a(".dream-portfolio").imagesLoaded(function(){a(".portfolio-menu").on("click","button",function(){var f=a(this).attr("data-filter");e.isotope({filter:f})});var e=a(".dream-portfolio").isotope({itemSelector:".single_gallery_item",percentPosition:true,masonry:{columnWidth:".single_gallery_item"}})})}a(".portfolio-menu button.btn").on("click",function(){a(".portfolio-menu button.btn").removeClass("active");a(this).addClass("active")});if(a.fn.scrollUp){a.scrollUp({scrollSpeed:1500,scrollText:"Scroll Top"})}if(a.fn.onePageNav){a("#nav").onePageNav({currentClass:"active",scrollSpeed:1500,easing:"easeOutQuad"})}if(a.fn.counterUp){a(".counter").counterUp({delay:10,time:2000})}if(b.width()>767){new WOW().init()}if(a.fn.jarallax){a(".jarallax").jarallax({speed:0.2})}a("a[href='#']").on("click",function(e){e.preventDefault()});(function(){var e=a("dd");e.filter(":nth-child(n+3)").hide();a("dl").on("click","dt",function(){a(this).next().slideDown(500).siblings("dd").slideUp(500)})})();if(a.fn.classyNav){a("#dreamNav").classyNav({theme:"dark"})}if(a.fn.niceScroll){a(".timelineBody").niceScroll()}})(jQuery);