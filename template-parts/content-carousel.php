<?php
/**
 * Template part for displaying carousel posts.
 *
 * @package BeAgency
 */
?>

<div class="blog-item">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="entry-image">
			<?php the_post_thumbnail( 'post-thumb' ); ?>

			<div class="entry-overlay">
				<?php
					$thumb_id = get_post_thumbnail_id();
					$thumb_url = wp_get_attachment_image_src( $thumb_id, 'full' );

					printf( '<a href="%s" class="left-icon" data-lightbox="image"><i class="fa fa-picture-o"></i></a>', esc_url( $thumb_url[0] ) );
				?>

				<a href="<?php echo esc_url( get_permalink() ); ?>" class="right-icon"><i class="fa fa-ellipsis-h"></i></a>
			</div><!--.entry-overlay -->
		</div><!--.entry-image -->

		<div class="entry-meta">
			<?php the_title( sprintf( '<h3 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' ); ?>
			<?php
				$categories_list = get_the_category_list( ', ' );

				if ( $categories_list ) {
					printf( '<span class="cat-links">' . esc_html( '%s' ) . '</span>', $categories_list );
				}
			?>
		</div><!--.entry-meta -->
	</article><!-- #post-## -->
</div><!-- .blog-item -->