<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package BeAgency
 */

get_header(); ?>

	<div class="single-page content-wrap">
		<div class="container clearfix">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<?php
						while ( have_posts() ) : the_post();

							get_template_part( 'template-parts/content', 'page' );

							if ( comments_open() || get_comments_number() ) {
								comments_template();
							}

						endwhile;
					?>
				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .container -->
	</div><!-- .single-page -->

<?php get_footer(); ?>
