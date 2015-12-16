<?php
/**
 * The template for displaying comments.
 *
 * The area of the page that contains both current comments
 * and the comment form.
 *
 * @package BeAgency
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div class="line line-lg"></div>

<div id="comments" class="comments-area">

	<?php // You can start editing here -- including this comment! ?>

	<?php if ( have_comments() ) : ?>
		<h3 class="comments-title">
			<?php
				printf( // WPCS: XSS OK.
					esc_html( _nx( '1 Comment', '%s Comments', get_comments_number(), 'comments title', 'beagency' ) ),
					'<span>' . number_format_i18n( get_comments_number() ) . '</span>'
				);
			?>
		</h3>

		<ol class="comment-list clearfix">
			<?php
				wp_list_comments( array(
					'style'       => 'ol',
					'avatar_size' => 60,
					'short_ping' => true,
					'callback'    => 'beagency_comment'
				) );
			?>
		</ol><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
			<h4 class="sr-only"><?php esc_html_e( 'Comment navigation', 'beagency' ); ?></h4>
			<div class="nav-links clearfix">

				<div class="nav-previous col-1_2"><?php previous_comments_link( '&lArr; ' . esc_html__( 'Older Comments', 'beagency' ) ); ?></div>
				<div class="nav-next col-1_2 col-last text-right"><?php next_comments_link( esc_html__( 'Newer Comments', 'beagency' ) . ' &rArr;' ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-below -->
		<?php endif; // Check for comment navigation. ?>

	<?php endif; // Check for have_comments(). ?>

	<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && '0' != get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'beagency' ); ?></p>
	<?php endif; ?>

	<!-- Comment form begin -->
	<?php
		$commenter = wp_get_current_commenter();
		$req = get_option( 'require_name_email' );
		$aria_req = ( $req ? " required" : '' );
		$aria_req_mark = ( $req ? '&lowast;' : '' );

		$args = array(
			'class_submit'  => 'button button-sm',
			'label_submit'  => esc_html__( 'Submit Comment', 'beagency' ),
			'title_reply'   => wp_kses( __( 'Leave a <span>Comment</span>', 'beagency' ), array ( 'span' => array() ) ),
			'comment_field' =>
				'<fieldset class="col-full">' .
				'<label for="message">' . esc_html__( 'Comment', 'beagency' ) . '&lowast;</label>' .
				'<textarea name="comment" id="comment" rows="7" tabindex="4" class="input-form-control" required></textarea>' .
				'</fieldset>',

			'fields' => apply_filters( 'comment_form_default_fields', array(
				'author' =>
					'<fieldset class="col-1_3">' .
					'<label for="name">' . esc_html__( 'Name', 'beagency' ) . '&lowast;</label> ' .
					'<input type="text" name="author" id="name" value="' . esc_attr( $commenter['comment_author'] ) . '" size="22" tabindex="1" class="input-form-control"' . $aria_req . ' />' .
					'</fieldset>',

				'email' =>
					'<fieldset class="col-1_3">' .
					'<label for="email">' . esc_html__( 'E-Mail', 'beagency' ) . $aria_req_mark . '</label> ' .
					'<input type="email" name="email" id="email" value="' . esc_attr( $commenter['comment_author_email'] ) . '" size="22" tabindex="2" class="input-form-control"' . $aria_req . ' />' .
					'</fieldset>',

				'url' =>
					'<fieldset class="col-1_3 col-last">' .
					'<label for="url">' . esc_html__( 'Website', 'beagency') . '</label>' .
					'<input id="url" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="22" tabindex="3" class="input-form-control" />' .
					'</fieldset>',
				)
			),
		);

		comment_form( $args );
	?>
	<!-- Comment form end -->

</div><!-- #comments -->
