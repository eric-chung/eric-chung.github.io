<?php
/**
 * Search Form Template
 *
 * @package BeAgency
 */
?>

<form name="search-form" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" role="search">
	<div class="input-group">
		<input type="text" name="s" id="search" class="form-control" placeholder="<?php esc_attr_e( 'Search for &hellip;', 'beagency' ); ?>">

		<span class="input-group-btn">
			<button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
		</span><!-- .input-group-btn -->
	</div><!-- .input-group -->
</form>
