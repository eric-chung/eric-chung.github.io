<?php
/**
 * Template part for displaying portfolio posts.
 *
 * @package BeAgency
 */

$terms = get_the_terms( $post->ID, 'portfolio_tag' );

if ( $terms && ! is_wp_error( $terms ) ) {
	$tag = array();
	$filter = array();

	foreach ( $terms as $term ) {
		$tag[] = $term->name;
		$filter[] = 'portfolio-tag-' . $term->name;
	}

	$filter = str_replace( ' ', '-', $filter );
	$portfolio_tag = ( join( ', ', $tag ) );
	$portfolio_filter = strtolower( join( ' ', $filter ) );
}
?>

<article id="portfolio-item-<?php the_ID() ?>" class="portfolio-item<?php echo isset( $portfolio_filter ) ? ' ' . $portfolio_filter : ''; ?>">
	<div class="portfolio-image">
		<?php
			if ( has_post_thumbnail() ) {
				the_post_thumbnail( 'post-thumb' );
			} else {
				printf( '<img src="%s">', esc_url( get_template_directory_uri() . '/images/placeholder.png' ) );
			}
		?>

		<div class="portfolio-overlay">
			<a href="#<?php echo $post->post_name; ?>" class="center-icon"><i class="fa fa-plus"></i></a>
		</div><!--.portfolio-overlay -->
	</div><!--.portfolio-image -->

	<div class="portfolio-desc">
		<h3><a href="#<?php echo $post->post_name; ?>"><?php the_title(); ?></a></h3>
		<?php echo isset( $portfolio_tag ) ? '<span>' . esc_html( $portfolio_tag ) . '</span>' : ''; ?>
	</div><!--.portfolio-desc -->
</article>
