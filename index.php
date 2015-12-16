<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package BeAgency
 */

get_header(); ?>

	<div class="blog-page content-wrap">
		<div class="container clearfix">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<?php if ( is_home() && ! is_front_page() ) : ?>
						<header class="heading-block text-center">
							<h1 class="page-title text-uppercase"><?php single_post_title(); ?></h1>

							<?php
								$page = get_page_by_title( single_post_title( '', false ) );
								$the_excerpt = $page->post_excerpt;
							?>

							<?php if ( $the_excerpt != '' ) : ?> 
								<span><?php echo $the_excerpt; ?></span>
							<?php endif; ?>
						</header>
					<?php endif; ?>

					<div id="posts" class="post-masonry clearfix">
						<?php
							if ( have_posts() ) {
								while ( have_posts() ) : the_post();

									get_template_part( 'template-parts/content', get_post_format() );

								endwhile;
							} else {
								get_template_part( 'template-parts/content', 'none' );
							}
						?>
					</div><!-- .post-grid -->

					<div id="load-more-posts" class="text-center">
						<?php beagency_posts_navigation(); ?>
					</div>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- .container -->
	</div><!-- .blog-page -->

<?php get_footer(); ?>
