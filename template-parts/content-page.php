<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package BeAgency
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header heading-block text-center">
		<?php
			the_title( '<h1 class="entry-title text-uppercase">', '</h1>' );

			if ( has_excerpt() ) {
				echo '<span>' . get_the_excerpt() . '</span>';
			}
		?>
	</header><!-- .entry-header -->

	<div class="entry-content clearfix">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'beagency' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer clearfix">
		<?php edit_post_link( esc_html__( 'Edit', 'beagency' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->

