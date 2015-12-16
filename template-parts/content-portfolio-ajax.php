<?php
/**
 * Template part for displaying portfolio posts with Ajax.
 *
 * @package BeAgency
 */

$next_id = isset( $_POST['portfolio_next'] ) ? $_POST['portfolio_next'] : '';
$prev_id = isset( $_POST['portfolio_prev'] ) ? $_POST['portfolio_prev'] : '';
$portfolio_id = isset( $_POST['portfolio_id'] ) ? $_POST['portfolio_id'] : '';
$post_id = str_replace( 'portfolio-item-', '', $portfolio_id );
?>

<div id="portfolio-ajax-single" class="clearfix">

    <div id="portfolio-ajax-title" style="position: relative;">
        <h2><?php echo get_the_title( $post_id ); ?></h2>
        <div id="portfolio-navigation">
			<?php if ( $prev_id ) { ?>
				<a href="#prev-portfolio" id="prev-portfolio" data-id="<?php echo $prev_id; ?>"><i class="fa fa-arrow-circle-left"></i></a>
			<?php } ?>

			<?php if ( $next_id ) { ?>
				<a href="#next-portfolio" id="next-portfolio" data-id="<?php echo $next_id; ?>"><i class="fa fa-arrow-circle-right"></i></a>
			<?php } ?>

            <a href="#close-portfolio" id="close-portfolio"><i class="fa fa-times-circle"></i></a>
        </div>
    </div>

    <div class="line line-sm"></div>

	<div class="col-3_5 portfolio-single-image">
		<?php
			if ( has_post_thumbnail( $post_id ) ) {
				$thumb_id = get_post_thumbnail_id( $post_id );
				$thumb_url = wp_get_attachment_image_src( $thumb_id, 'full' );

				printf( '<a href="%1$s" data-lightbox="image">%2$s</a>', esc_url( $thumb_url[0] ), get_the_post_thumbnail( $post_id ) );
			} else {
				printf( '<img src="%s">', esc_url( get_template_directory_uri() . '/images/placeholder.png' ) );
			}
		?>
	</div><!-- .portfolio-single-image -->

    <div class="col-2_5 portfolio-single-content col-last">

        <?php echo apply_filters( 'the_content', get_post_field( 'post_content', $post_id ) ); ?>

        <div class="line line-md"></div>

        <ul class="portfolio-meta">
			<?php
				$author = get_post_meta( $post_id, '_beagency_option_author', true );
				$date = get_post_meta( $post_id, '_beagency_option_date', true );
				$skill = get_post_meta( $post_id, '_beagency_option_skill', true );
				$client_name = get_post_meta( $post_id, '_beagency_option_client_name', true );
				$client_url = get_post_meta( $post_id, '_beagency_option_client_url', true );

				if ( $author != '' ) {
					printf( '<li><span><i class="fa fa-user"></i>%1$s:</span> %2$s</li>', esc_html__( 'Created by', 'beagency' ), esc_html( $author ) );
				}

				if ( $date != '' ) {
					printf( '<li><span><i class="fa fa-calendar-check-o"></i>%1$s:</span> %2$s</li>', esc_html__( 'Completed on', 'beagency' ), esc_html( $date ) );
				}

				if ( $skill != '' ) {
					printf( '<li><span><i class="fa fa-lightbulb-o"></i>%1$s:</span> %2$s</li>', esc_html__( 'Skills', 'beagency' ), esc_html( $skill ) );
				}

				if ( $client_name != '' ) {
					printf( '<li><span><i class="fa fa-link"></i>%1$s:</span> <a href="%2$s" target="_blank">%3$s</a></li>', esc_html__( 'Client', 'beagency' ), esc_url( $client_url ), esc_html( $client_name ) );
				}
			?>
        </ul><!-- .portfolio-meta -->
    </div><!-- .portfolio-single-content -->
</div>
