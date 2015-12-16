<?php
/**
 * Kirki Advanced Customizer
 *
 * @category BeAgency
 * @package Kirki
 * @link    https://github.com/aristath/kirki
 */

/**
 * Remover or change default sections for Theme Customizer.
 */
function beagency_remove_customize_section( $wp_customize ) {
	$wp_customize->remove_section( 'colors' );
	$wp_customize->remove_section( 'title_tagline' );
	$wp_customize->remove_section( 'background_image' );
	$wp_customize->remove_section( 'static_front_page' );

	$wp_customize->get_panel( 'nav_menus' )->priority = 20;
	$wp_customize->get_control( 'site_icon' )->priority = 20;
	$wp_customize->get_control( 'site_icon' )->section = 'site_general';
}
add_action( 'customize_register', 'beagency_remove_customize_section', 1000 );

// Early exit if Kirki is not installed
if ( ! class_exists( 'Kirki' ) ) {
	return;
}

/**
 * Create panels using the Kirki API.
 */
Kirki::add_section( 'site_general', array(
	'priority'    => 10,
	'title'       => __( 'General', 'beagency' ),
	'description' => __( 'You may need to refresh the page to see the changes.', 'beagency' ),
) );

Kirki::add_section( 'site_homepage', array(
	'priority'        => 20,
	'title'           => __( 'Homepage', 'beagency' ),
	'description'     => __( 'Here you can customize your homepage.', 'beagency' ),
	'active_callback' => 'is_front_page',
) );

Kirki::add_section( 'site_404_page', array(
	'priority'        => 30,
	'title'           => __( '404 Page', 'beagency' ),
	'description'     => __( 'Here you can customize your 404 Page.', 'beagency' ),
	'active_callback' => 'is_404',
) );

Kirki::add_section( 'site_footer', array(
	'priority'    => 120,
	'title'       => __( 'Site Footer', 'beagency' ),
	'description' => __( 'Here you can customize the footer on your site.', 'beagency' )
) );

Kirki::add_section( 'upgrade_theme', array(
	'priority' => 130,
	'title'    => __( 'Upgrade', 'beagency' )
) );

/**
 * Create a config instance that will be used by fields added via the static methods.
 */
Kirki::add_config( 'beagency_kirki', array(
	'option_type' => 'theme_mod'
) );

/**
 * Create fields using the Kirki API static functions.
 */
Kirki::add_field( 'beagency_kirki', array(
	'type'      => 'text',
	'settings'  => 'general_site_title',
	'label'     => __( 'Site Title', 'beagency' ),
	'section'   => 'site_general',
	'default'   => get_bloginfo( 'name' ),
	'priority'  => 10,
	'transport' => 'postMessage',
	'js_vars'   => array(
		array(
			'element'  => '.site-title a',
			'function' => 'html',
			'property' => 'text'
		)
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'dropdown-pages',
	'settings' => 'general_front_page',
	'label'    => __( 'Front Page', 'beagency' ),
	'help'     => __( 'Create a blank page with Home Page template and set it as Front Page.', 'beagency' ),
	'section'  => 'site_general',
	'default'  => get_option( 'page_on_front' ),
	'priority' => 20
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'dropdown-pages',
	'settings' => 'general_posts_page',
	'label'    => __( 'Posts Page', 'beagency' ),
	'help'     => __( 'Create a blank page and set it as Posts Page.', 'beagency' ),
	'section'  => 'site_general',
	'default'  => get_option( 'page_for_posts' ),
	'priority' => 30
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'general_sticky_menu',
	'label'    => __( 'Enable Sticky Menu?', 'beagency' ),
	'help'     => __( 'If enable, the menu will be accessible from anywhere without having to scroll.', 'beagency' ),
	'section'  => 'site_general',
	'default'  => '1',
	'priority' => 40
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'general_go_to_top',
	'label'    => __( 'Enable Go to Top Button?', 'beagency' ),
	'section'  => 'site_general',
	'default'  => '1',
	'priority' => 50
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'homepage_heading',
	'label'    => __( 'Enable Heading Block?', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => '1',
	'priority' => 10
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'textarea',
	'settings' => 'homepage_heading_h1',
	'label'    => __( 'Heading', 'beagency' ),
	'help'     => __( 'If you want to color the word, just wrap it with \"span\" tag.', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'Hello, We are <span>BeTheme</span>. We <span><i class="fa fa-heart-o"></i></span> WordPress!',
	'priority' => 20,
	'required' => array(
        array(
            'setting'  => 'homepage_heading',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'textarea',
	'settings' => 'homepage_heading_span',
	'label'    => __( 'Content', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'We handcraft well-thought-out WordPress themes built on solid coding and elegant design.',
	'priority' => 30,
	'required' => array(
        array(
            'setting'  => 'homepage_heading',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'homepage_image',
	'label'    => __( 'Enable Header Image?', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => '0',
	'priority' => 40
) );

Kirki::add_field( 'beagency_kirki', array(
    'type'     => 'image',
    'settings' => 'homepage_image_url',
    'label'    => __( 'Current Header Image', 'beagency' ),
    'section'  => 'site_homepage',
    'default'  => '',
    'priority' => 50,
	'required' => array(
        array(
            'setting'  => 'homepage_image',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'text',
	'settings' => 'homepage_portfolio_title',
	'label'    => __( 'Portfolio Block Title', 'beagency' ),
	'help'     => __( 'If you want to color the word, just wrap it with \"span\" tag.', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'Our <span>Latest</span> Works',
	'priority' => 60
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'homepage_blog',
	'label'    => __( 'Enable Blog Block?', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => '1',
	'priority' => 70
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'text',
	'settings' => 'homepage_blog_title',
	'label'    => __( 'Blog Block Title', 'beagency' ),
	'help'     => __( 'If you want to color the word, just wrap it with \"span\" tag.', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'Our <span>Latest</span> Blog',
	'priority' => 80,
	'required' => array(
        array(
            'setting'  => 'homepage_blog',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'homepage_promotion',
	'label'    => __( 'Enable Promotion Block?', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => '1',
	'priority' => 90
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'textarea',
	'settings' => 'homepage_promotion_title',
	'label'    => __( 'Promotion Title', 'beagency' ),
	'help'     => __( 'If you want to color the word, just wrap it with \"span\" tag.', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => '<span>WordPress Themes</span> That Make Your Life <span>Easier</span>',
	'priority' => 100,
	'required' => array(
        array(
            'setting'  => 'homepage_promotion',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'textarea',
	'settings' => 'homepage_promotion_content',
	'label'    => __( 'Promotion Content', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'We build more than just Themes. We build User Experience for both, you and your visitors.',
	'priority' => 110,
	'required' => array(
        array(
            'setting'  => 'homepage_promotion',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'text',
	'settings' => 'homepage_promotion_btn_text',
	'label'    => __( 'Promotion Button Text', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'Start Browsing',
	'priority' => 120,
	'required' => array(
        array(
            'setting'  => 'homepage_promotion',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'text',
	'settings' => 'homepage_promotion_btn_link',
	'label'    => __( 'Promotion Button Link', 'beagency' ),
	'section'  => 'site_homepage',
	'default'  => 'http://betheme.me/',
	'priority' => 140,
	'required' => array(
        array(
            'setting'  => 'homepage_promotion',
            'operator' => '==',
            'value'    => 1
        )
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'      => 'text',
	'settings'  => '404_page_title',
	'label'     => __( 'Page Title', 'beagency' ),
	'section'   => 'site_404_page',
	'default'   => '404',
	'priority'  => 10,
	'transport' => 'postMessage',
	'js_vars'   => array(
		array(
			'element'  => '.error-404',
			'function' => 'html',
			'property' => 'text'
		)
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'      => 'textarea',
	'settings'  => '404_error_message',
	'label'     => __( 'Error Message', 'beagency' ),
	'section'   => 'site_404_page',
	'default'   => __( 'Oops! The page you were looking for could not be found.', 'beagency' ),
	'priority'  => 20,
	'transport' => 'postMessage',
	'js_vars'   => array(
		array(
			'element'  => '.error-message',
			'function' => 'html',
			'property' => 'text'
		)
    )
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'editor',
	'settings' => 'footer_copyright',
	'label'    => __( 'Copyright Information', 'beagency' ),
	'help'     => __( 'Want to remove the theme byline? See section "Upgrade" for more information.', 'beagency' ),
	'section'  => 'site_footer',
	'default'  => __( 'Copyrights &copy; 2015. All Rights Reserved.', 'beagency'),
	'priority' => 10
) );

Kirki::add_field( 'beagency_kirki', array(
	'type'     => 'checkbox',
	'settings' => 'footer_link',
	'label'    => __( 'Enable Footer Menu?', 'beagency' ),
	'section'  => 'site_footer',
	'default'  => '1',
	'priority' => 20
) );

Kirki::add_field( 'beagency_kirki', array(
    'type'     => 'custom',
    'settings' => 'upgrade_theme_info',
    'section'  => 'upgrade_theme',
    'default'  => '<p>' . __( "Want to remove the theme byline from your website's footer?", 'beagency' ) . '</p><p><i><a href="' . esc_url( 'http://betheme.me/themes/beagency/' ) . '" target="_blank">' . __( 'Upgrade to BeAgency Pro Now', 'beagency' ) . '</a></i></p>',
    'priority' => 10
) );

/**
 * Configuration for the Kirki Customizer.
 */
function beagency_kirki_configuration() {
	$args = array(
		'logo_image'   => 'http://betheme.me/wp-content/uploads/2015/09/logo.png',
		'color_accent' => '#1abc9c',
		'color_back'   => '#fff',
	);

	return $args;
}
add_filter( 'kirki/config', 'beagency_kirki_configuration' );

/**
 * Change the URL that will be used by Kirki
 * to load its assets in the customizer.
 */
function beagency_kirki_update_url( $config ) {
    $config['url_path'] = get_template_directory_uri() . '/inc/kirki/';

    return $config;
}
add_filter( 'kirki/config', 'beagency_kirki_update_url' );
