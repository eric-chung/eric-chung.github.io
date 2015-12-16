<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package BeAgency
 */

get_header(); ?>

	<div class="404-page content-wrap">
		<div class="container clearfix">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<section class="not-found">
						<div class="page-content">
							<h1 class="error-404 text-center"><?php echo Kirki::get_option( '404_page_title' ); ?></h1>

							<h2 class="error-message text-center"><?php echo Kirki::get_option( '404_error_message' ); ?></h2>
						</div><!-- .page-content -->
					</section><!-- .not-found -->
				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .container -->
	</div><!-- .404-page -->

<?php get_footer(); ?>
