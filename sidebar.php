<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package BeAgency
 */

if ( ! is_active_sidebar( 'sidebar-right' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area sidebar col-last clearfix" role="complementary">
	<div class="sidebar-widgets-wrap">
		<?php dynamic_sidebar( 'sidebar-right' ); ?>
	</div><!-- .sidebar-widgets-wrap -->
</div><!-- #secondary -->
