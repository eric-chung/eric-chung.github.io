<?php
/**
 * The template for displaying all single posts.
 *
 * @package BeAgency
 */

get_header(); ?>

	<div class="single-post content-wrap">
		<div class="container clearfix">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<?php
						while ( have_posts() ) : the_post();

							get_template_part( 'template-parts/content', 'single' );

						endwhile;
					?>
				</main><!-- #main -->
			</div><!-- #primary -->

			<?php get_sidebar(); ?>
		</div><!-- .container -->
	</div><!-- .single-post -->

<?php get_footer(); ?>
