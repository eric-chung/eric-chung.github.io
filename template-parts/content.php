<?php
/**
 * Template part for displaying posts.
 *
 * @package BeAgency
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?>>
	<header class="entry-header">
		<?php
			if( has_post_thumbnail() ) {
				$thumb_id = get_post_thumbnail_id();
				$thumb_url = wp_get_attachment_image_src( $thumb_id, 'full' );

				printf(
					'<div class="entry-image">
						<a href="%1$s" data-lightbox="image">%2$s</a>
					</div>',
					esc_url( $thumb_url[0] ) ,
					get_the_post_thumbnail( null, 'post-thumbnail', array( 'class' => 'image-fade' ) )
				);
			}
		?>

		<div class="entry-title">
			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</div>
	</header><!-- .entry-header -->

	<ul class="entry-meta clearfix">
		<?php beagency_posted_on(); ?>
	</ul>

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->

	<footer class="entry-footer">
		<?php beagency_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
