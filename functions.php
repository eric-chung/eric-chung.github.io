<?php
/**
 * BeAgency functions and definitions
 *
 * @package BeAgency
 */

if ( ! function_exists( 'beagency_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function beagency_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on BeAgency, use a find and replace
	 * to change 'beagency' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'beagency', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Add style sheet for WordPress visual editor.
	add_editor_style( 'layouts/editor.style.css' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'post-thumb', 800, 600, true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Header Menu', 'beagency' ),
		'secondary' => esc_html__( 'Footer Menu', 'beagency' )
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'image'
	) );
}
endif; // beagency_setup
add_action( 'after_setup_theme', 'beagency_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function beagency_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'beagency_content_width', 1140 );
}
add_action( 'after_setup_theme', 'beagency_content_width', 0 );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function beagency_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'beagency' ),
		'id'            => 'sidebar-right',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s clearfix">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'beagency_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function beagency_scripts() {
	wp_enqueue_style( 'beagency-bootstrap-style', get_template_directory_uri() . '/layouts/bootstrap.min.css', array(), '3.3.6' );

	wp_enqueue_style( 'beagency-font-awesome-style', get_template_directory_uri() . '/layouts/font.awesome.min.css', array(), '4.5.0' );

	wp_enqueue_style( 'beagency-magnific-popup-style', get_template_directory_uri() . '/layouts/magnific.popup.css', array(), '1.0.0' );

	wp_enqueue_style( 'beagency-owl-carousel-style', get_template_directory_uri() . '/layouts/owl.carousel.min.css', array(), '2.0.0-beta.2.4' );

	wp_enqueue_style( 'beagency-owl-carousel-theme-style', get_template_directory_uri() . '/layouts/owl.theme.default.min.css', array(), '2.0.0-beta.2.4' );

	wp_enqueue_style( 'beagency-google-fonts', 'http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700s', array(), beagency_get_version() );

	wp_enqueue_style( 'beagency-style', get_stylesheet_uri() );

	wp_enqueue_style( 'beagency-responsive-style', get_template_directory_uri() . '/layouts/responsive.css', array(), beagency_get_version() );

	wp_enqueue_script( 'beagency-jRespond-script', get_template_directory_uri() . '/js/jrespond.min.js', array(), '0.10', true );

	wp_enqueue_script( 'beagency-superfish-script', get_template_directory_uri() . '/js/superfish.min.js', array(), '1.7.7', true );

	wp_enqueue_script( 'beagency-imagesloaded-script', get_template_directory_uri() . '/js/imagesloaded.pkgd.min.js', array(), '3.2.0', true );

	wp_enqueue_script( 'beagency-isotope-script', get_template_directory_uri() . '/js/isotope.pkgd.min.js', array(), '2.2.2', true );

	wp_enqueue_script( 'beagency-easing-script', get_template_directory_uri() . '/js/jquery.easing.min.js', array(), '1.3.2', true );

	wp_enqueue_script( 'beagency-magnific-popup-script', get_template_directory_uri() . '/js/jquery.magnific.popup.min.js', array(), '1.0.0', true );

	wp_enqueue_script( 'beagency-owl-carousel-script', get_template_directory_uri() . '/js/owl.carousel.min.js', array(), '2.0.0-beta.2.4', true );

	wp_enqueue_script( 'beagency-smoothscroll-script', get_template_directory_uri() . '/js/smoothscroll.js', array(), '1.4.1', true );

	wp_enqueue_script( 'beagency-infinitescroll-script', get_template_directory_uri() . '/js/jquery.infinitescroll.min.js', array(), '2.1.0', true );

	wp_enqueue_script( 'beagency-app-script', get_template_directory_uri() . '/js/jquery.app.js', array( 'jquery' ), beagency_get_version(), true );

	// Localize the script with new data.
	wp_localize_script( 'beagency-app-script', 'app_vars', array(
		'ajax_url' => admin_url( 'admin-ajax.php' )
	) );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'beagency_scripts' );

/**
 * Include the TGM_Plugin_Activation class.
 */
require_once get_template_directory() . '/inc/tgmpa/tgm-plugin-activation.php';

/**
 * Load Kirki Customizer Toolkit.
 */
require_once get_template_directory() . '/inc/kirki/kirki.php';

/**
 * Load Customizer configuration.
 */
require_once get_template_directory() . '/inc/kirki/config.php';

/**
 * Custom template tags for this theme.
 */
require_once get_template_directory() . '/inc/template-tags.php';

/**
 * Comments Callback.
 */
require_once get_template_directory() . '/inc/comments-callback.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require_once get_template_directory() . '/inc/extras.php';