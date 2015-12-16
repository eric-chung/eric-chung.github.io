<?php
/**
 * Template Name: Home Page
 * 
 * @package BeAgency
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="content-wrap">
				<div class="container clearfix">
					<?php if ( Kirki::get_option( 'homepage_heading' ) == '1' ) : ?> 
						<section id="heading-block">
							<div class="heading-block text-center">
								<h1 class="text-uppercase"><?php echo strip_tags( html_entity_decode( Kirki::get_option( 'homepage_heading_h1' ) ), '<span><i>' ); ?></h1>
								<span><?php echo Kirki::get_option( 'homepage_heading_span' ); ?></span>
							</div><!-- .heading-block -->
						</section><!-- #heading-block -->
						
					<?php endif; ?>

					<?php if ( Kirki::get_option( 'homepage_image' ) == '1' ) : ?>
						<section id="heading-image">
							<div class="heading-image text-center">
								<img src="<?php echo Kirki::get_option( 'homepage_image_url' ); ?>">
							</div><!-- .heading-image -->
						</section><!-- #heading-image -->
					<?php endif; ?>

					<section id="portfolio">
						<div class="line line-lg"></div>

						<?php if( Kirki::get_option( 'homepage_portfolio_title' ) != '' ) : ?>
							<h2 class="portfolio-title text-center"><?php echo strip_tags( html_entity_decode( Kirki::get_option( 'homepage_portfolio_title' ) ), '<span><i>' ); ?></h2>
						<?php endif; ?>

						<div id="portfolio-ajax-wrap">
							<div id="portfolio-ajax-container"></div>
						</div><!-- #portfolio-ajax-wrap -->

						<div id="portfolio-ajax-loader">
							<i class="fa fa-spinner fa-pulse"></i>
						</div><!-- .portfolio-ajax-loader -->

						<div class="portfolio-items clearfix">
							<?php
								$args = array(
									'post_type' => 'portfolio',
									'posts_per_page' => -1
								);
								$query = new WP_Query( $args );

								if ( $query->have_posts() ) {
									while ( $query->have_posts() ) : $query->the_post();

										get_template_part( 'template-parts/content', 'portfolio' );

									endwhile;
								} else {
									$switch_portfolio_post = 'portfolio';

									get_template_part( 'template-parts/content', 'none' );
								}

								wp_reset_postdata();
							?>
						</div><!--#portfolio-items -->
					</section><!--#portfolio -->

					<?php if ( Kirki::get_option( 'homepage_blog' ) == '1' ) : ?>
						<section id="blog">
							<div class="line line-lg"></div>

							<?php if ( Kirki::get_option( 'homepage_blog_title' ) != '' ) : ?>
								<h2 class="blog-title text-center"><?php echo strip_tags( html_entity_decode( Kirki::get_option( 'homepage_blog_title' ) ), '<span><i>' ); ?></h2>
							<?php endif; ?>

							<div class="blog-carousel owl-carousel">
								<?php
									$args = array(
										'meta_query' => array(
											array(
												'key'     => '_thumbnail_id',
												'compare' => 'EXISTS'
											)
										),
										'ignore_sticky_posts' => 1
									);
									$query = new WP_Query( $args );

									if ( $query->have_posts() ) {
										while ( $query->have_posts() ) : $query->the_post();

											get_template_part( 'template-parts/content', 'carousel' );

										endwhile;
									} else {
										$switch_portfolio_post = 'post';

										get_template_part( 'template-parts/content', 'none' );
									}

									wp_reset_postdata();
								?>
							</div><!--.blog-carousel -->
						</section><!--#blog -->
					<?php endif; ?>

					<?php if ( Kirki::get_option( 'homepage_promotion' ) == '1' ) : ?>
						<section id="promotion">
							<div class="promotion">
								<?php if ( Kirki::get_option( 'homepage_promotion_title' ) != '' ) : ?>
									<h3><?php echo strip_tags( html_entity_decode( Kirki::get_option( 'homepage_promotion_title' ) ), '<span><i>' ); ?></h3>
								<?php endif; ?>

								<?php if ( Kirki::get_option( 'homepage_promotion_content' ) != '' ) : ?>
									<span><?php echo Kirki::get_option( 'homepage_promotion_content' ); ?></span>
								<?php endif; ?>

								<a href="<?php echo Kirki::get_option( 'homepage_promotion_btn_link' ); ?>" class="button button-lg"><?php echo Kirki::get_option( 'homepage_promotion_btn_text' ); ?></a>
							</div><!--.promotion -->
						</section><!--#promotion -->
					<?php endif; ?>
				</div><!--.container -->
			</div><!--.content-wrap -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
