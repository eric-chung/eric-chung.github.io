<?php
/**
 * Template part for displaying single posts.
 *
 * @package BeAgency
 */

?>

<div class="entry-header">
	<?php
		if( has_post_thumbnail() ) {
			$thumb_id = get_post_thumbnail_id();
			$thumb_url = wp_get_attachment_image_src( $thumb_id, 'full' );

			printf(
				'<div class="entry-image text-center">
					<a href="%1$s" data-lightbox="image">%2$s</a>
				</div>',
				esc_url( $thumb_url[0] ) ,
				get_the_post_thumbnail( null, 'post-thumbnail', array( 'class' => 'image-fade' ) )
			);
		}
	?>
</div><!-- .entry-header -->

<div class="post-content clearfix">
	<div class="entry">
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

			<ul class="entry-meta clearfix">
				<?php beagency_posted_on(); ?>
			</ul><!-- .entry-meta -->

			<div class="entry-content clearfix">
				<?php the_content(); ?>
				<?php
					wp_link_pages( array(
						'before' => '<div class="page-links text-center">' . esc_html__( 'Pages:', 'beagency' ),
						'after'  => '</div>',
					) );
				?>
			</div><!-- .entry-content -->

			<div class="entry-footer clearfix">
				<?php beagency_entry_footer(); ?>
			</div><!-- .entry-footer -->
		</article><!-- #post-## -->
	</div><!-- .entry -->

	<?php beagency_post_navigation(); ?>

	<?php
		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
	?>
</div><!-- .post-content -->
