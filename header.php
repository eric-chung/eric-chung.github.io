<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package BeAgency
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site clearfix">
	<a class="skip-link sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'beagency' ); ?></a>

	<header id="masthead" class="site-header<?php echo Kirki::get_option( 'general_sticky_menu' ) == '1' ? ' sticky' : ''; ?>" role="banner">
		<div class="container site-branding clearfix">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		</div><!-- .site-branding -->

		<div id="header-wrap">
			<nav id="site-navigation" class="main-navigation" role="navigation">
				<div class="container clearfix">
					<div id="main-navigation-trigger"><i class="fa fa-bars"></i></div>
					<?php
						wp_nav_menu( array(
							'menu'           => 'primary',
							'theme_location' => 'primary',
							'container'      => false,
							'link_before'    => '<div class="text-uppercase">',
							'link_after'     => '</div>',
							'depth'          => 3,
							'fallback_cb'    => 'beagency_Walker_Nav_Menu::fallback'
							)
						);
					?>
				</div><!-- .container -->
			</nav><!-- #site-navigation -->
		</div><!-- #header-wrap -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
