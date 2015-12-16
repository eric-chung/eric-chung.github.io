/**
 * jquery.app.js
 *
 * Contain all handlers for jQuery applications.
 */

var APP = APP || {};

( function( $ ) {
	var $window = $( window ),
		$body = $( 'body' ),
		$header = $( '#masthead' ),
		$headerWrap = $( '#header-wrap' ),
		$portfolio = $( '.portfolio-items' ),
		$portfolioAjaxLoader = $( '#portfolio-ajax-loader' ),
		$portfolioItems = $( '.portfolio-items' ).find( '.portfolio-item' ),
		$portfolioDetails = $( '#portfolio-ajax-wrap' ),
		$portfolioDetailsContainer = $( '#portfolio-ajax-container' ),
		$blogCarouselContainer = $( '.blog-carousel' ),
		$blogMasonryContainer = $( '#posts' ),
		$goToTopEl = $( '#go-to-top' );

	APP.initialize = {
		init: function() {
			APP.initialize.bootstrap();
			APP.initialize.responsiveClasses();
			APP.initialize.topScrollOffset();
			APP.initialize.lightbox();
			APP.initialize.imageFade();
			APP.initialize.goToTop();
		},

		bootstrap: function() {
			$( 'table' ).addClass( 'table table-striped' );
			$( 'label input' ).addClass( 'input-form-control' );
			$( 'input[type=submit]' ).addClass( 'button button-sm' );
			$( 'select' ).addClass( 'btn btn-default dropdown-toggle' );
			$( '.entry-content img' ).addClass( 'img-thumbnail img-responsive' );
		},

		responsiveClasses: function() {
			var jRes = jRespond( [
					{ label: 'smallest', enter: 0, exit: 479 },
					{ label: 'handheld', enter: 480, exit: 767 },
					{ label: 'tablet', enter: 768, exit: 991 },
					{ label: 'laptop', enter: 992, exit: 1199 },
					{ label: 'desktop', enter: 1200, exit: 10000 }
				] );

			jRes.addFunc( [
				{ breakpoint: 'desktop',
					enter: function() {
						$body.addClass( 'device-lg' );
					},
					exit: function() {
						$body.removeClass( 'device-lg' );
					}
				},

				{ breakpoint: 'laptop',
					enter: function() {
						$body.addClass( 'device-md' );
					},
					exit: function() {
						$body.removeClass( 'device-md' );
					}
				},

				{ breakpoint: 'tablet',
					enter: function() {
						$body.addClass( 'device-sm' );
					},
					exit: function() {
						$body.removeClass( 'device-sm' );
					}
				},

				{ breakpoint: 'handheld',
					enter: function() {
						$body.addClass( 'device-xs' );
					},
					exit: function() {
						$body.removeClass( 'device-xs' );
					}
				},

				{ breakpoint: 'smallest',
					enter: function() {
						$body.addClass( 'device-xxs' );
					},
					exit: function() {
						$body.removeClass( 'device-xxs' );
					}
				}
			] );

			if ( APP.isMobile.any() ) {
				$body.addClass( 'device-touch' );
			}
		},

		topScrollOffset: function() {
			var adminBarHeight = 0,
				topOffsetScroll = 0;

			if ( $body.hasClass( 'admin-bar' ) ) {
				adminBarHeight = 32;
			}

			if ( $body.hasClass( 'device-lg' ) || $body.hasClass( 'device-md' ) ) {
				if ( $header.hasClass( 'sticky' ) ) {
					topOffsetScroll = adminBarHeight + 78;
				} else {
					topOffsetScroll = adminBarHeight;
				}
			}

			if ( $body.hasClass( 'device-sm' ) || $body.hasClass( 'device-xs' ) ) {
				topOffsetScroll = adminBarHeight + 15;
			}

			return topOffsetScroll;
		},

		lightbox: function() {
			$( '.entry-content a:has(img)' ).each( function() {
				var url = $( this ).attr( 'href' );

				if ( url.match( /\.(jpeg|jpg|gif|png)$/ ) != null ) {
					$( this ).attr( 'data-lightbox', 'image' );
				}
			} );

			var $lightboxImageEl = $( '[data-lightbox="image"]' );

			if ( $lightboxImageEl.length > 0 ) {
				$lightboxImageEl.magnificPopup( {
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					tLoading: '<i class="fa fa-spinner fa-pulse"></i>',
					fixedContentPos: true,
					mainClass: 'mfp-fade',
					image: {
						verticalFit: true
					}
				} );
			}
		},

		imageFade: function() {
			$( '.image-fade' ).hover( function() {
				$( this ).animate( {
					opacity: 0.8
				}, 400 );
			}, function() {
				$( this ).animate( {
					opacity: 1
				}, 400 );
			} );
		},

		goToTop: function() {
			$goToTopEl.click( function( e ) {
				$( 'body, html' ).stop( true ).animate( {
					scrollTop: 0
				}, 500, 'easeOutQuad' );

				e.preventDefault();
			} );
		},

		goToTopScroll: function() {
			if ( $body.hasClass( 'device-lg' ) || $body.hasClass( 'device-md' ) || $body.hasClass( 'device-sm' ) ) {
				if ( $window.scrollTop() > 450 ) {
					$goToTopEl.fadeIn();
				} else {
					$goToTopEl.fadeOut();
				}
			}
		}
	}

	APP.header = {
		init: function() {
			APP.header.stickyMenu();
			APP.header.superfish();
			APP.header.mobileMenu();
		},

		stickyMenu: function( headerOffset ) {
			if ( $window.scrollTop() > headerOffset ) {
				if ( ( $body.hasClass( 'device-lg' ) || $body.hasClass( 'device-md' ) ) && $header.hasClass( 'sticky' ) ) {
					$header.addClass( 'sticky-header' );
				}
			} else {
				APP.header.removeStickyness();
			}
		},

		removeStickyness: function() {
			if ( $header.hasClass( 'sticky-header' ) ) {
				$header.removeClass( 'sticky-header' );
			}
		},

		superfish: function() {
			if ( $().superfish ) {
				if ( $body.hasClass( 'device-lg' ) || $body.hasClass( 'device-md' ) ) {
					$( '.main-navigation ul ul' ).css( 'display', 'block' );
					APP.header.menuInvert();
				}

				$( '.main-navigation > div > ul' ).superfish ( {
					popUpSelector: 'ul',
					delay: 250,
					speed: 350,
					animation: { opacity: 'show' },
					animationOut:  { opacity: 'hide' },
					cssArrows: false
				} );
			}
		},

		menuInvert: function() {
			$( '.main-navigation ul ul' ).each( function( index, element ) {
				var $menuChildElement = $( element ),
					windowWidth = $window.width(),
					menuChildOffset = $menuChildElement.offset(),
					menuChildWidth = $menuChildElement.width(),
					menuChildLeft = menuChildOffset.left;

				if ( windowWidth - ( menuChildWidth + menuChildLeft ) < 0 ) {
					$menuChildElement.addClass( 'menu-pos-invert' );
				}
			} );

		},

		mobileMenu: function() {
			$( '#main-navigation-trigger' ).click( function( e ) {
				$( '.main-navigation > div > ul' ).toggleClass( 'show' );

				e.preventDefault();
			} );

			if ( ( $body.hasClass( 'device-xs' ) || $body.hasClass( 'device-xxs' ) || $body.hasClass( 'device-sm' ) ) && ! $body.hasClass( 'device-touch' ) ) {
				$( '.main-navigation ul li.menu-item' ).hover( function() {
					if ( $( this ).parents( 'li' ).hasClass( 'menu-item-has-children' ) ) {
						$( this ).parents( 'li' ).children( 'a' ).addClass( 'menu-hover' );
					}
				}, function() {
					$( this ).children( 'a' ).removeClass( 'menu-hover' );
				} );
			}

			if ( ( $body.hasClass( 'device-xs' ) || $body.hasClass( 'device-xxs' ) || $body.hasClass( 'device-sm' ) ) && $body.hasClass( 'device-touch' ) ) {
				$( '.main-navigation > div > ul' ).superfish( 'destroy' ).addClass( 'mobile-menu' );

				$( '.main-navigation ul li:has(ul)' ).append( '<a href="#" class="submenu-trigger"><i class="fa fa-angle-down"></i></a>' );

				$( '.main-navigation ul li.menu-item-has-children' ).children( 'a.submenu-trigger' ).click( function( e ) {
					$( this ).parent().toggleClass( 'open' );
					$( this ).parent().find( 'ul.sub-menu' ).stop( true, true ).toggle();

					e.preventDefault();
				} );
			}
		}
	}

	APP.portfolio = {
		init: function() {
			APP.portfolio.load();
			APP.portfolio.ajaxload();
		},

		load: function() {
			$portfolio.imagesLoaded( function() {
				$portfolio.isotope( {
					transitionDuration: '.65s'
				} );
			} );
		},

		ajaxload: function() {
			$( '.portfolio-item a.center-icon, .portfolio-item .portfolio-desc a' ).click( function( e ) {
				var portfolioId = $( this ).parents( '.portfolio-item' ).attr( 'id' );

				if ( ! $( this ).parents( '.portfolio-item' ).hasClass( 'portfolio-active' ) ) {
					APP.portfolio.loadItem( portfolioId );
				}

				e.preventDefault();
			} );
		},

		loadItem: function( portfolioId ) {
			var portfolioNext = APP.portfolio.getNextItem( portfolioId ),
				portfolioPrev = APP.portfolio.getPrevItem( portfolioId );

			APP.portfolio.closeItem();
			$portfolioAjaxLoader.fadeIn();

			$portfolioDetailsContainer.load(
				$.ajax( {
					type: 'POST',
					url: app_vars.ajax_url,
					data: {
						action: 'portfolio_ajax',
						portfolio_id: portfolioId,
						portfolio_next: portfolioNext,
						portfolio_prev: portfolioPrev
					},

					success: function( html ) {
						$( '#portfolio-ajax-container' ).append( html );
						APP.portfolio.initializeAjax( portfolioId );
						APP.portfolio.openItem();

						$portfolioItems.removeClass( 'portfolio-active' );
						$( '#' + portfolioId ).addClass( 'portfolio-active' );
					}
				} )
			);
		},

		getNextItem: function( portfolioId ) {
			var portfolioNext = '',
				hasNext = $( '#' + portfolioId ).nextAll( ':visible' ).first();

			if ( hasNext.length != 0 ) {
				portfolioNext = hasNext.attr( 'id' );
			}

			return portfolioNext;
		},

		getPrevItem: function( portfolioId ) {
			var portfolioPrev = '',
				hasPrev = $( '#' + portfolioId ).prevAll( ':visible' ).first();

			if ( hasPrev.length != 0 ) {
				portfolioPrev = hasPrev.attr( 'id' );
			}

			return portfolioPrev;
		},

		closeItem: function() {
			if ( $portfolioDetails.find( '#portfolio-ajax-single' ).length != 0 ) {
				$portfolioAjaxLoader.fadeIn();

				$portfolioDetails.find( '#portfolio-ajax-single' ).fadeOut( '600', function() {
					$( this ).remove();
				} );

				$portfolioDetails.removeClass( 'portfolio-ajax-opened' );
			}
		},

		initializeAjax: function( portfolioId ) {
			$( '#next-portfolio, #prev-portfolio' ).click( function( e ) {
				var portfolioId = $( this ).attr( 'data-id' );

				$portfolioItems.removeClass( 'portfolio-active' );
				$( '#' + portfolioId ).addClass( 'portfolio-active' );

				APP.portfolio.loadItem( portfolioId );

				e.preventDefault();
			} );

			$portfolioDetailsContainer.on( 'click', '#close-portfolio', function( e ) {
				$portfolioDetailsContainer.fadeOut( '600', function() {
					$portfolioDetails.find( '#portfolio-ajax-single' ).remove();
				} );

				$portfolioDetails.removeClass( 'portfolio-ajax-opened' );
				$portfolioItems.removeClass( 'portfolio-active' );

				e.preventDefault();
			} );
		},

		openItem: function() {
			var topOffsetScroll = APP.initialize.topScrollOffset();

			$portfolioDetailsContainer.imagesLoaded( function() {
				$portfolioDetailsContainer.fadeIn();
			} );

			$portfolioDetails.addClass( 'portfolio-ajax-opened' );
			$portfolioAjaxLoader.fadeOut();

			var t = setTimeout( function() {
				APP.initialize.lightbox();

				$( 'html, body' ).stop( true ).animate( {
					'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
				}, 900, 'easeOutQuad' );
			}, 500 );
		},

		layout: function() {
			$portfolio.isotope( 'layout' );
		}
	}

	APP.blog = {
		init: function() {
			APP.blog.carousel();
		},

		carousel: function() {
			if ( $blogCarouselContainer.find( '.blog-item' ).length > 0 ) {
				$blogCarouselContainer.owlCarousel( {
					margin: 1,
					loop: true,
					nav: true,
					navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					autoplay: false,
					autoplayHoverPause: true,
					dots: false,
					responsive:{
						0: { items: 1 },
						600: { items: 2 },
						1000: { items: 3 },
						1200: { items: 4 }
					}
				} );
			} else {
				$blogCarouselContainer.show();
			}
		},

		masonry: function() {
			$blogMasonryContainer.isotope( {
				transitionDuration: '.65s'
			} );
		},

		layout: function() {
			$blogMasonryContainer.isotope( 'layout' );
		},

		infiniteScroll: function() {
			$blogMasonryContainer.infinitescroll( {
				loading: {
					finishedMsg: '<i class="fa fa-check"></i>',
					msgText: '<i class="fa fa-spinner fa-pulse"></i>',
					speed: 'normal'
				},

				state: {
					isDone: false
				},

				nextSelector: '#load-more-posts .nav-previous a',
				navSelector: '#load-more-posts',
				itemSelector: 'article.post'
			}, function( newElements ) {
				APP.initialize.lightbox();
				$blogMasonryContainer.isotope( 'appended', $( newElements ) );

				var t = setTimeout( function() {
					APP.blog.layout();
				}, 1000 );
			} );
		}
	}

	APP.isMobile = {
		Android: function() {
			return navigator.userAgent.match( /Android/i );
		},

		BlackBerry: function() {
			return navigator.userAgent.match( /BlackBerry/i );
		},

		iOS: function() {
			return navigator.userAgent.match( /iPhone|iPad|iPod/i );
		},

		Opera: function() {
			return navigator.userAgent.match( /Opera Mini/i );
		},

		Windows: function() {
			return navigator.userAgent.match( /IEMobile/i );
		},

		any: function() {
			return ( APP.isMobile.Android() || APP.isMobile.BlackBerry() || APP.isMobile.iOS() || APP.isMobile.Opera() || APP.isMobile.Windows() );
		}
	}

	APP.documentOnReady = {
		init: function() {
			APP.initialize.init();
			APP.header.init();
			APP.portfolio.init();
			APP.blog.init();
			APP.documentOnReady.windowscroll();
		},

		windowscroll: function() {
			var headerOffset = 0,
				headerWrapOffset = 0;

			if ( $header.length > 0 ) {
				headerOffset = $header.offset().top;
			}

			if ( $header.length > 0 ) {
				headerWrapOffset = $headerWrap.offset().top;
			}

			$window.on( 'scroll', function() {
				APP.header.stickyMenu( headerWrapOffset );
				APP.initialize.goToTopScroll();
			} );
		}
	}
	
	APP.documentOnLoad = {
		init: function() {
			APP.blog.masonry();
			APP.blog.infiniteScroll();
		}
	}

	APP.documentOnResize = {
		init: function() {
			var t = setTimeout( function() {
				APP.portfolio.layout();
				APP.blog.layout();
			}, 500 );
		}
	}

	$( document ).ready( APP.documentOnReady.init );
	$window.load( APP.documentOnLoad.init );
	$window.on( 'resize', APP.documentOnResize.init );
} )( jQuery );
