<?php
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package BeAgency
 */

get_header(); ?>

	<div class="cat-page content-wrap">
		<div class="container clearfix">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<?php if ( have_posts() ) : ?>
						<header class="heading-block text-center">
							<?php
								the_archive_title( '<h1 class="page-title text-uppercase">', '</h1>' );
								the_archive_description( '<span class="taxonomy-description">', '</span>' );
							?>
						</header>

						<div id="posts" class="post-masonry clearfix">
							<?php
								while ( have_posts() ) : the_post();

									get_template_part( 'template-parts/content', get_post_format() );

								endwhile;
							?>
						</div><!-- .post-grid -->

						<div id="load-more-posts" class="text-center">
							<?php beagency_posts_navigation(); ?>
						</div>

					<?php else : ?>

						<?php get_template_part( 'template-parts/content', 'none' ); ?>

					<?php endif; ?>
				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .container -->
	</div><!-- .cat-page -->

<?php get_footer(); ?>
