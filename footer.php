<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package BeAgency
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container clearfix">
			<div class="col-1_2">
				<div class="site-info">
					<?php
						$byline = sprintf( esc_html__( ' Build with %s.', 'beagency' ), '<a href="' . esc_url( 'http://betheme.me/' ) . '" rel="developer" target="_blank">BeTheme</a>' );

						echo html_entity_decode( Kirki::get_option( 'footer_copyright' ) ) . $byline;
					?>
				</div><!-- .site-info -->
			</div>

			<?php if ( Kirki::get_option( 'footer_link' ) == '1' ) : ?>
				<div class="col-1_2 col-last text-right">
					<div class="footer-link clearfix">
						<?php
							wp_nav_menu( array(
								'menu'           => 'secondary',
								'theme_location' => 'secondary',
								'container'      => false,
								'depth'          => 1,
								'fallback_cb'    => 'beagency_Walker_Nav_Menu::fallback'
								)
							);
						?>
					</div><!-- .footer-link -->
				</div>
			<?php endif; ?>
		</div>
	</footer><!-- #colophon -->

	<?php if( Kirki::get_option( 'general_go_to_top' ) == '1' ) : ?>
		<div id="go-to-top" class="go-to-top"><i class="fa fa-angle-up"></i></div>
	<?php endif; ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
