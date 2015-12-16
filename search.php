<?php
/**
 * The template for displaying search results pages.
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
							<h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'beagency' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
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
	</div><!-- .content-wrap -->

<?php get_footer(); ?>