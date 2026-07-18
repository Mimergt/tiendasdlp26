<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');

/**
 * Load Select2. Copy paste this into functions.php, then use this jQuery to init:
 * jQuery('select').select2();
 */
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('select2_css', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css');
    wp_register_script('select2_js', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js', array('jquery'), '4.0.3', true);
    wp_enqueue_script('select2_js');

    //wp_register_script( 'google_api', 'http://maps.google.com/maps/api/js?key=AIzaSyD3yyERvzeZ5PAUKHxwO46W8qeyvLkeSlc&libraries=places', array('jquery'), '4.0.3', true );
    //wp_enqueue_script('google_api');
    wp_register_script('custom_script', site_url() . '/wp-content/themes/dlp/custom_script.js?var=' . time(), array('jquery'), '4.0.3', true);
    wp_enqueue_script('custom_script');
    wp_register_script('locationpicker', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-locationpicker/0.1.12/locationpicker.jquery.min.js', array('jquery'), '4.0.3', false);
    wp_enqueue_script('locationpicker');
});

// The original code is from: https://stackoverflow.com/questions/63066590/allow-customer-to-change-order-status-in-woocommerce/63067443#63067443
// The original code was for Complete Order. The modifications is for change the order to "ready to pickup (rtp)" we can't make it usefull without use the "on-hold" args.
// The button Url and the label
function customer_order_confirm_args($order_id) {
    return array(
        'url' => wp_nonce_url(add_query_arg('rtp_order', $order_id), 'wc_rtp_order'), //stil on-hold (ready to pickup needed)
        'name' => __('Ya estoy aqui por mi pedido.', 'woocommerce')
    );
}

/*

  // Add a custom action button to processing orders (My account > Orders)
  add_filter( 'woocommerce_my_account_my_orders_actions', 'complete_action_button_my_accout_orders', 50, 2 );
  function complete_action_button_my_accout_orders( $actions, $order ) {
  if ($order->get_meta('woofood_order_type') == 'pickup' && $order->has_status( 'dlv' )  ) {
  $actions['order_confirmed'] = customer_order_confirm_args( $order->get_id() );
  }
  return $actions;
  }
 */


// Add button to Order confirmed/received Page
add_action('woocommerce_thankyou', 'complete_action_button_my_accout_order_view1', 5);

function complete_action_button_my_accout_order_view1($order_id) {
    // Avoiding displaying buttons on email notification
    $order = wc_get_order($order_id);
    $data = customer_order_confirm_args($order_id);
    if ($order->get_meta('woofood_order_type') == 'pickup' && $order->has_status('dlv')) {
        echo '<div style="margin:16px 0 24px; text-align: center;">
            <a class="button changeStatus rtp" data-order-id="' . $order_id . '" href="' . $data['url'] . '">' . $data['name'] . '</a>
        </div>';
        ?>

        <script>
            jQuery(document).on('click', '.changeStatus', function (e) {
                e.preventDefault();
                var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
                var order_id = jQuery(this).attr('data-order-id');

                jQuery.ajax({
                    type: "post",
                    url: ajaxurl,
                    data: {action: "change_order_status", order_id: order_id},
                    success: function (response) {
                        alert('Su pedido ha sido notificado. En breve se lo estarán entregando');
                        location.reload(true);
                    }
                })

            });
        </script>
    <?php
    } elseif ($order->has_status('rtp')) {
        echo '<h4 style="padding:10px;background: #DAD7D8;margin:15px  5px;border-radius:5px;text-transform: initial;text-align:center;">En breve se estarán comunicando contigo para coordinar la entrega de tu pedido.</h4>';
        ?>
    <?php
    } elseif ($order->has_status('completed')) {
        echo '<h4 style="padding:10px;background: #DAD7D8;margin:15px  5px;border-radius:5px;text-transform: initial;text-align:center;">Tu pedido se ha completado.</h4>';
        ?>
    <?php
    } else {
        echo '';
        ?>


            <script>
                jQuery(document).on('click', '.changeStatus', function (e) {
                    e.preventDefault();
                    var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
                    var order_id = jQuery(this).attr('data-order-id');
                    jQuery.ajax({
                        type: "post",
                        url: ajaxurl,
                        data: {action: "change_order_status", order_id: order_id},
                        success: function (response) {
                            alert('Su pedido ha sido notificado. En breve se lo estarán entregando');
                            location.reload(true);
                        }
                    })

                });
            </script>
        <?php
        } elseif ($order->has_status('rtp')) {
            echo '<h4 style="padding:10px;background: #DAD7D8;margin:15px  5px;border-radius:5px;text-transform: initial;text-align:center;">En breve se estarán comunicando contigo para coordinar la entrega de tu pedido.</h4>';
            ?>
        <?php
        } elseif ($order->has_status('completed')) {
            echo '<h4 style="padding:10px;background: #DAD7D8;margin:15px  5px;border-radius:5px;text-transform: initial;text-align:center;">Tu pedido se ha completado.</h4>';
            ?>
        <?php
        } else {
            echo '';
            ?>

        <?php
        }
    }
}

add_action("wp_ajax_change_order_status", "change_order_status");
add_action("wp_ajax_nopriv_change_order_status", "change_order_status");

function change_order_status() {
    if (isset($_POST['order_id']) && !empty($_POST['order_id'])) {
        $order = new WC_Order($_POST['order_id']);
        //$order->update_status('wc-rtp', 'order_note');
        $order->update_status('rtp', 'order_note');
    }
    die;
}

function wpa66834_role_admin_body_class($classes) {
    global $current_user;
    foreach ($current_user->roles as $role)
        $classes .= ' role-' . $role;
    return trim($classes);
}

add_filter('admin_body_class', 'wpa66834_role_admin_body_class');





// create new column in et_pb_layout screen
add_filter('manage_et_pb_layout_posts_columns', 'ds_create_shortcode_column', 5);
add_action('manage_et_pb_layout_posts_custom_column', 'ds_shortcode_content', 5, 2);
// register new shortcode
add_shortcode('ds_layout_sc', 'ds_shortcode_mod');

// New Admin Column
function ds_create_shortcode_column($columns) {
    $columns['ds_shortcode_id'] = 'Module Shortcode';
    return $columns;
}

//Display Shortcode
function ds_shortcode_content($column, $id) {
    if ('ds_shortcode_id' == $column) {
        ?>
        <p>[ds_layout_sc id="<?php echo $id ?>"]</p>
        <?php
    }
}

// Create New Shortcode
function ds_shortcode_mod($ds_mod_id) {
    extract(shortcode_atts(array('id' => '*'), $ds_mod_id));
    return do_shortcode('[et_pb_section global_module="' . $id . '"][/et_pb_section]');
}

//El checkout Form

add_filter('woocommerce_checkout_fields', 'custom_override_checkout_fields');

function custom_override_checkout_fields($fields) {
    if (is_user_logged_in()) {
        unset($fields['billing']['user_bday']);
        unset($fields['shipping']['shipping_first_name']);
    } else {
        
    }

    return $fields;
}



// Make address field optional
add_filter( 'woocommerce_default_address_fields' , 'nm_set_address_optional' ,99999 );
function nm_set_address_optional( $b_fields ) {
    $b_fields['address_1']['required'] = false;
 //   $b_fields['address_2']['required'] = false;
   // $b_fields['city']['required'] = false;
    return $b_fields;
}




add_filter('woocommerce_checkout_fields', 'mimer1_custom_override_checkout_fields');
add_filter('woocommerce_billing_fields', 'mimer1_custom_override_billing_fields');

function mimer1_custom_override_checkout_fields($fields) {
    unset($fields['billing']['billing_postcode']);

    return $fields;
}

function mimer1_custom_override_billing_fields($fields) {
    unset($fields['billing_postcode']);
    return $fields;
}

// Añadir el tiempo del pedido a la orden
add_action('woocommerce_order_status_changed', 'calculo_tiempos', 10, 3);

function calculo_tiempos($order_id, $from_status, $to_status) {
    global $wpdb;

    if ($to_status === 'completed') {
        $order = wc_get_order($order_id);
        $creado = $order->get_date_created();
        $creadoF = $creado->date("Y-m-d H:i:s");
        $terminado = $order->get_date_completed();
        $terminadoF = $terminado->date("Y-m-d H:i:s");

        $d1 = strtotime($terminadoF) - strtotime($creadoF);
        $dif = gmdate('H:i', $d1);

        update_post_meta($order_id, 'tiempo_total', $dif);
    }
}

date_default_timezone_set('UTC');

/*
  $elorigen = $_GET['device'];
  add_action('woocommerce_checkout_create_order', 'agregar_orgien_al_pedido', 20, 2);
  function agregar_orgien_al_pedido($order_id, $data,$elorigen){
  add_post_meta($order_id, 'pedido_origen', $elorigen);
  }

 */






/* INICIA BLOQUE DE CODIGO -> BAIRES */

include( dirname(__FILE__) . "/inc/oauth-functions.php" );

/* FIN BLOQUE DE CODIGO -> BAIRES */









// Remove the payment options form from default location
remove_action('woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20);




// Add the payment options form under the "order notes" section
// Important you will have to also add the following custom CSS to your site:
// body .woocommerce-checkout-payment { float: none; width: 100%; }
add_action('woocommerce_after_order_notes', 'woocommerce_checkout_payment', 20);

function add_cors_http_header() {
    header("Access-Control-Allow-Origin: *");
}

add_action('init', 'add_cors_http_header');

//Aisgnación de las tiendas según las zonas Mimer
add_action('woocommerce_checkout_update_order_meta', 'new_store_meta');

function new_store_meta($order_id) {
    $zona = get_post_meta($order_id, '_billing_city', true);

    switch ($zona) {
        // Nogales - Antes Varieta
        case "Zona 16 - Ciudad": $tienda_asignada = 155165; //2244
            break;
        case "Zona 5 - Ciudad": $tienda_asignada = 155165;
            break;
        case "Zona 15 - Ciudad": $tienda_asignada = 155165;
            break;
       
			// Calle Marti
        case "Condominio Valle del zapote zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio Monte limar zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio Encinos del zapote zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Finca el zapote zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Vertical el Zapote zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales el Karal zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio Villas del zapote zona 2 de capital": $tienda_asignada = 2239;
            break;
        case "Condominio Jardines del zapote zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Jardines santa delfina zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Cerveceria Centroamericana zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Avenida simeon cañas zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Apartamentos 8-80 zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Avenida indepencia zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Apartamentos santa clara zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio villa marti zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales ciudad nueva 1 zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Colonia las 3 ceibas zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Villa verona zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales Maria ines zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Calle clutural Barrio moderno zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales Maria alejandra zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Hermanos cooper zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio la floresta zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Condominio Alamedas de san Gabriel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales san angel 2 y 3 zona 2 capital": $tienda_asignada = 2239;
            break;
        case "San angel 2 y 3 zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Villas arcangel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Residenciales san angel 4 zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Villas de san angel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Reserva san angel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Parque san angel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Peñon de san angel zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Ciudad nueva zona 2 capital": $tienda_asignada = 2239;
            break;
        case "Colonia lo de bran zona 3 capital": $tienda_asignada = 2239;
            break;
        case "Avenida elena": $tienda_asignada = 2239;
            break;
        case "Zona 3 capital a hasta la 23 calle": $tienda_asignada = 2239;
            break;
        case "Colonia las victorias zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Matamoros zona 1": $tienda_asignada = 2239;
            break;
        case "Distribuidora el caribe zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Mercado colon zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Gerona zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Hasta la 24 calle de la zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Colonia 10 de mayo zona 1 capital": $tienda_asignada = 2239;
            break;
        case "Avenida Centro america zona 1 capital ": $tienda_asignada = 2239;
            break;
        case "Centro comercial zona 4 capital": $tienda_asignada = 2239;
            break;
        case "Intecap zona 4 capital": $tienda_asignada = 2239;
            break;
        case "Terminal zona 4": $tienda_asignada = 2239;
            break;
        case "Colonia proyectos 4-3 zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia proyectos 4-4 zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia bienestar social zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Villa de los niños zona 6 capital": $tienda_asignada = 2239;
            break;
        case "cipresales zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Residencial cipresales zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Barrio san antonio hasta las 12 calle": $tienda_asignada = 2239;
            break;
        case "Torre marti zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia Martinico 1 y 2 zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia melgar diaz zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Condominio parroquia zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia los angeles zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Finca san rafael zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia el Molino zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Santa isabel 1 y 2 zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Estadio cementos progreso zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Barrio el gallito zona 3 capital": $tienda_asignada = 2239;
            break;
        case "Santa faz zona 6 capital": $tienda_asignada = 2239;
            break;
        case "San julian zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Santa marta zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Santa Luisa zona 6 capital": $tienda_asignada = 2239;
            break;
        case "El sausalito zona 6 capital": $tienda_asignada = 2239;
            break;
        case "La joya de senahu zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Avenida totonicapan zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Avenida alta verapaz zona 6 capital ": $tienda_asignada = 2239;
            break;
        case "La reinita zona 6 capital": $tienda_asignada = 2239;
            break;
        case "Colonia san juan de dios zona 6 capital": $tienda_asignada = 2239;
            break;
        case "La joyita zona 6 capital": $tienda_asignada = 2239;
            break;
        case "El gallito zona 3 capital": $tienda_asignada = 2239;
            break;
        case "Avenida bolivar zona 3 capital": $tienda_asignada = 2239;
            break;
        case "Colonia el inciencio zona 3 capital": $tienda_asignada = 2239;
            break;
        //SanCristobal
        case "Zona 1 de Mixco": $tienda_asignada = 3068;
            break;
        case "Zona 8 de Mixco": $tienda_asignada = 3068;
            break;
        // petapa

       
			
			
			
    
        
        // SM-Petapa 31771 > ahora Frutal 2248

        case "Residenciales Petapa 1 y 2": $tienda_asignada = 2248;
            break; 
        case "San miguelito": $tienda_asignada = 2248;
            break;             	
        case "Covitigss": $tienda_asignada = 2248;
            break;             	
        case "Residenciales el tabacal": $tienda_asignada = 2248;
            break;             	
        case "Colonia la felicidad": $tienda_asignada = 2248;
            break;             	
        case "Reformadores": $tienda_asignada = 2248;
            break;             	
        case "Ciudad del sol": $tienda_asignada = 2248;
            break;             	
        case "Arada 1 y 2": $tienda_asignada = 2248;
            break;             	
        case "Jardines de la virgen ": $tienda_asignada = 2248;
            break;             	
        case "Jardines del carmen 1 y 2": $tienda_asignada = 2248;
            break;             	
        case "Fuentes de valle 1, 2,3, 4 y 5": $tienda_asignada = 2248;
            break;             	
        case "Condado el carmen": $tienda_asignada = 2248;
            break;             	
        case "villas del condado 1 y 2": $tienda_asignada = 2248;
            break;             	
        case "Prados de castilla": $tienda_asignada = 2248;
            break;             	
        case "Luminela": $tienda_asignada = 2248;
    break;             	
case "Adarha": $tienda_asignada = 2248;
    break;             	
case "Colonia enriqueta": $tienda_asignada = 2248;
    break;             	
case "Colonia los planes": $tienda_asignada = 2248;
    break;             	
case "Panorama del frutal": $tienda_asignada = 2248;
    break;             	
case "Colonia paraiso del frutal": $tienda_asignada = 2248;
    break;             	
case "Colonia el paraiso 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Entre valles": $tienda_asignada = 2248;
    break;             	
case "Solana entrevalles": $tienda_asignada = 2248;
    break;             	
case "frutal 1,2,3,4 y 5": $tienda_asignada = 2248;
    break;             	
case "fuentes del valle 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Prados de tabal 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Altos de fuentes 1,2 y 3": $tienda_asignada = 2248;
    break;             	
case "Paseo las fuentes 1,2 y 3": $tienda_asignada = 2248;
    break;             	
case "Villa hermosa 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Prados de villa hermosa": $tienda_asignada = 2248;
    break;             	
case "Alamedas de san miguel": $tienda_asignada = 2248;
    break;             	
case "Colonia santa ines": $tienda_asignada = 2248;
    break;             	
case "Colonia eucaliptos": $tienda_asignada = 2248;
    break;             	
case "Colonia las palmas": $tienda_asignada = 2248;
    break;             	
case "Condominio villa real": $tienda_asignada = 2248;
    break;             	
case "La joya 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Pradera del sur": $tienda_asignada = 2248;
    break;             	
case "Villa la joya": $tienda_asignada = 2248;
    break;             	
case "Los arcos": $tienda_asignada = 2248;
    break;             	
case "Valles de san miguel": $tienda_asignada = 2248;
    break;             	
case "San luis": $tienda_asignada = 2248;
    break;             	
case "El rosario": $tienda_asignada = 2248;
    break;             	
case "Viñas del sur": $tienda_asignada = 2248;
    break;             	
case "Los amates": $tienda_asignada = 2248;
    break;             	
case "Colonia eterna primavera": $tienda_asignada = 2248;
    break;             	
case "Prados de sonora": $tienda_asignada = 2248;
    break;             	
case "Villa de san mateo": $tienda_asignada = 2248;
    break;             	
case "Catalina linda vista": $tienda_asignada = 2248;
    break;             	
case "Jardines de la virgen": $tienda_asignada = 2248;
    break;             	
case "Valles de sonora 1,2,3 y 4": $tienda_asignada = 2248;
    break;             	
case "Residenciales doña leonor": $tienda_asignada = 2248;
    break;             	
case "Santorini": $tienda_asignada = 2248;
    break;             	
case "Colonia el cortijo": $tienda_asignada = 2248;
    break;             	
case "Guatel": $tienda_asignada = 2248;
    break;             	
case "Condominio el prado": $tienda_asignada = 2248;
    break;             	
case "Inde y guatel 2": $tienda_asignada = 2248;
    break;             	
case "Residenciales altamira": $tienda_asignada = 2248;
    break;             	
case "Altos de sonora": $tienda_asignada = 2248;
    break;             	
case "Jardines de la mancion 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Torres de villa hermosa": $tienda_asignada = 2248;
    break;             	
case "Zona 1 de Villa Nueva": $tienda_asignada = 2248;
    break;
case "Zona 2 de Villa Nueva": $tienda_asignada = 2248;
    break;
case "Zona 4 de Villa Nueva": $tienda_asignada = 2248;
    break;
case "Zona 5 de Villa Nueva": $tienda_asignada = 2248;
    break;
case "Colinas de monte maria": $tienda_asignada = 2248;
    break;             	
case "Villa de andalucia": $tienda_asignada = 2248;
    break;             	
case "San jose villa nueva": $tienda_asignada = 2248;
    break;             	
case "Lomas del sur": $tienda_asignada = 2248;
    break;             	
case "Residenciales terranova": $tienda_asignada = 2248;
    break;             	
case "Los celajes": $tienda_asignada = 2248;
    break;             	
case "Jardines de san jose": $tienda_asignada = 2248;
    break;             	
case "Planes de barcenas": $tienda_asignada = 2248;
    break;             	
case "Colonia los olivos": $tienda_asignada = 2248;
    break;             	
case "Condominio valle verde": $tienda_asignada = 2248;
    break;             	
case "ENCA": $tienda_asignada = 2248;
    break;             	
case "Altos de barcenas 1,2 y 3": $tienda_asignada = 2248;
    break;             	
case "Condominio los tanques": $tienda_asignada = 2248;
    break;             	
case "Condominio bosques de san jose": $tienda_asignada = 2248;
    break;             	
case "Condominio valle verde": $tienda_asignada = 2248;
    break;             	
case "Valle de maria": $tienda_asignada = 2248;
    break;             	
case "Hacienda de las flores": $tienda_asignada = 2248;
    break;             	
case "Residenciales villa lobos": $tienda_asignada = 2248;
    break;             	
case "Valles de doña leonor": $tienda_asignada = 2248;
    break;             	
case "Residenciales valles de sevilla": $tienda_asignada = 2248;
    break;             	
case "Residenciales el placer": $tienda_asignada = 2248;
    break;             	
case "Residenciales guadalupe 1 al 5": $tienda_asignada = 2248;
    break;             	
case "Residenciales catalina": $tienda_asignada = 2248;
    break;             	
case "Residenciales prado alto": $tienda_asignada = 2248;
    break;             	
case "Residenciales terrazas de san jose": $tienda_asignada = 2248;
    break;             	
case "Residenciales condominio fuente 1 y 2": $tienda_asignada = 2248;
    break;             	
case "Residenciales valle buena ventura": $tienda_asignada = 2248;
    break;             	
case "Residenciales villa ofelia": $tienda_asignada = 2248;
    break;             	
case "Colonia santa monica": $tienda_asignada = 2248;
    break;             	
case "Colonia jacaranda 2": $tienda_asignada = 2248;
    break;             	
case "Alto de veronia": $tienda_asignada = 2248;
    break;             	
case "Colonia monte carlo": $tienda_asignada = 2248;
    break;
			
			///**** fix 3/2026 ***////
case "Zona 11 San Miguel Petapa": $tienda_asignada = 2248;
    break;						      


/* 


		case "Zona 3 San Miguel Petapa": $tienda_asignada = 31771;
            break;
		case "Zona 7 de San Miguel Petapa": $tienda_asignada = 31771;
            break;
		case "Zona 8 San Miguel Petapa": $tienda_asignada = 31771;
            break;			
		case "Zona 11 San Miguel Petapa": $tienda_asignada = 31771;
            break;						
		case "Zona 13 San Miguel Petapa": $tienda_asignada = 31771;
            break;									


 */

		
			
			
			
            //Montufar
        case "Zona 9 - Ciudad": $tienda_asignada = 2242;//Ahora es montufar 8_2024 
            break;
        case "Zona 10 - Ciudad": $tienda_asignada = 2242;//Ahora es montufar 8_2024
            break;
        case "Zona 13 - Ciudad": $tienda_asignada = 2242;//Ahora es montufar 8_2024
            break;
        case "Zona 14 - Ciudad": $tienda_asignada = 2242; //Ahora es montufar 8_2024
            break;
        case "Santa catarina Pinula hasta el km 11": $tienda_asignada = 2242;//Ahora es montufar 29_7_2024
            break;
        
            // Majadas
        case "Residenciales roosevelt zona 7 de mixco": $tienda_asignada = 2237;
            break;
        case "Residenciales parque 7 zona 7 de mixco": $tienda_asignada = 2237;
            break;
        case "El paraiso 1 y 2 zona 7 de mixco": $tienda_asignada = 2237;
            break;
        case "Zona 2 de Mixco (Completa)": $tienda_asignada = 2237;
            break;
        case "Zona 3 de mixco (Completo)": $tienda_asignada = 2237;
            break;
        case "Molino de las flores zona 2 Mixco": $tienda_asignada = 2237;
            break;
        case "km 16 ruta al pacifico zona 6 de mixco": $tienda_asignada = 2237;
            break;
        case "edificio multifamiliares zona 3 capital": $tienda_asignada = 2237;
            break;
        case "Zona 11 Capital (Completa)": $tienda_asignada = 2237;
            break;
        case "Zona 8 capital": $tienda_asignada = 2237;
            break;
        case "Colonia El Carmen Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Villa Sol Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Javier Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Calzada Aguilar Batres Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Santa Elisa Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Prados de Monte María Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Monte María 3 Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia El Bosque Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia La Reformita Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Condominio El Rosario Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Residenciales Pamplona Zona 12 Capital": $tienda_asignada = 2237;
            break;
        case "Avenida Petapa Zona 12 Capital (Hasta la 50 calle)": $tienda_asignada = 2237;
            break;
        case "Colonia vientos del valle zona 12": $tienda_asignada = 2237;
            break;
        case "Colonia miles rock": $tienda_asignada = 2237;
            break;
        case "Colonia El Rodeo Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Quinta Samayoa Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Castillo Lara Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Ciudad de Plata I y II Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia San Martín Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Condominio 20-01 Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Kaminal Juyú I y II Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Tikal I, II y III Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Utatlán I Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Landivar Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia 3 de julio zona 12": $tienda_asignada = 2237;
            break;
        case "Zona 12 de monte maría 1,2,3 y prados de montemaria": $tienda_asignada = 2237;
            break;
        case "Colonia santa rosa 1 y 2": $tienda_asignada = 2237;
            break;
        case "Zona 12 Cortijo 1,2 y 3": $tienda_asignada = 2237;
            break;
        case "San Rafael Zona 21": $tienda_asignada = 2237;
            break;
        case "Residenciales Atanacio 3 Zona 21": $tienda_asignada = 2237;
            break;
        case "Lomas de Macadamia Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Bello Horizonte Zona 21": $tienda_asignada = 2237;
            break;
        case "Condominio San Juan de Los Encinos Zona 21": $tienda_asignada = 2237;
            break;
        case "Torres Petapa Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Arenera Zona 21": $tienda_asignada = 2237;
            break;
        case "Residenciales Eureka Zona 21": $tienda_asignada = 2237;
            break;
        case "Vientos del Valle Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Cerro Gordo Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Vasquez Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Justo Rufino Barrios Zona 21": $tienda_asignada = 2237;
            break;
        case "Condominio Jardines de Florentina Zona 21": $tienda_asignada = 2237;
            break;
        case "Guajitos Zona 21": $tienda_asignada = 2237;
            break;
        case "Colonia Morse Zona 21": $tienda_asignada = 2237;
            break;
        case "Villas de San Jose zona 7": $tienda_asignada = 2237;
            break;
        case "Condominio villas de san martin zona 7 capital": $tienda_asignada = 2237;
            break;
        case "El Arenal Petapa Zona 21": $tienda_asignada = 2237;
            break;
        case "Campo Bello": $tienda_asignada = 2237;
            break;
        case "Asentamiento Esquipulitas": $tienda_asignada = 2237;
            break;
        case "El Esfuerzo": $tienda_asignada = 2237;
            break;
        case "Letran": $tienda_asignada = 2237;
            break;
        case "El Tamarindo": $tienda_asignada = 2237;
            break;
        case "Anexo 1 y 2": $tienda_asignada = 2237;
            break;
        case "Loma Real": $tienda_asignada = 2237;
            break;
        case "El Bucaro": $tienda_asignada = 2237;
            break;
        case "Esquipulitas": $tienda_asignada = 2237;
            break;
        case "Mezquital": $tienda_asignada = 2237;
            break;
        case "La Esperanza": $tienda_asignada = 2237;
            break;
        case "El Éxodo": $tienda_asignada = 2237;
            break;
        case "Colonia La Bethania Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Sakerty Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia El Granizo I, II, III Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia El Niño Dormido Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia 4 de Febrero Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia Tecún Umán Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia El Amparo I, II, III Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Colonia el Incienso Zona 7 Capital": $tienda_asignada = 2237;
            break;
        case "Torres de tulam tzu zona 4 de mixco": $tienda_asignada = 2237;
            break;
        case "Cañadas del naranjo zona 4 de mixco": $tienda_asignada = 2237;
            break;
        case "Colonia valle del sol zona 4 de mixco": $tienda_asignada = 2237;
            break;
		
        

            // Condado
        case "Carretera a El Salvador hasta el km 26": $tienda_asignada = 3066;
            break;
        case "San José Pinula": $tienda_asignada = 3066;
            break;
			
			
		
			
            // Amati
		case "Amatitlán": $tienda_asignada = 28656;
			break;
			
			
        // Chimaltenango
        case "Zona 1 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 2 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 3 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 4 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 5 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 6 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 7 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 8 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 9 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 10 - Chimaltenango": $tienda_asignada = 3615;
            break;
        case "Zona 11 - Chimaltenango": $tienda_asignada = 3615;
            break;
        
			//Quetzaltenango
        case "Zona 1 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 2 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 3 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 4 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 5 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 6 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 7 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 8 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 9 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 10 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 11 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Zona 12 - Quetzaltenango": $tienda_asignada = 2250;
            break;
        case "Parque el carmen - Salcaja": $tienda_asignada = 103619; //tienda 4 caminos
            break;
        case "Curruchique - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;            
        case "Baños de san juan salcaja - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;            
        case "Mirador barrio boys - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;            
        case "Barrio nuevo - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Cementerio municipal - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Parque san luis salcaja - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Aldea infantil rudolf walther - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Arenal - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Cruz del milagro - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Bella tierra - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Bosque magico - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Parque memorial los olivos - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Cancha marroquin - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Mirador el carmen - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;
        case "Cruz de las madres - Salcaja": $tienda_asignada = 103619;//tienda 4 caminos
            break;


        

        //Escuintla
        case "Zona 1 - Escuintla": $tienda_asignada = 14750;
            break;
        case "Zona 2 - Escuintla": $tienda_asignada = 14750;
            break;
        case "Zona 3 - Escuintla": $tienda_asignada = 14750;
            break;
        case "Zona 4 - Escuintla": $tienda_asignada = 14750;
            break;
        //Jutiapa
        case "Zona 1 - Jutiapa": $tienda_asignada = 31901;
            break;
        case "Zona 2 - Jutiapa": $tienda_asignada = 31901;
            break;
        case "Zona 3 - Jutiapa": $tienda_asignada = 31901;
            break;
        case "Zona 4 - Jutiapa": $tienda_asignada = 31901;
            break; 

			 //Reu
        case "Zona 1 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 2 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 3 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 4 - Retalhuleu": $tienda_asignada = 14750;
            break;
		case "Zona 5 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 6 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 7 - Retalhuleu": $tienda_asignada = 14750;
            break;
        case "Zona 8 - Retalhuleu": $tienda_asignada = 14750;
            break;

			
			 //Coatepeque
        case "Zona 1 - Coatepeque": $tienda_asignada = 47915;
            break;
        case "Zona 2 - Coatepeque": $tienda_asignada = 47915;
            break;
        case "Zona 3 - Coatepeque": $tienda_asignada = 47915;
            break;
        case "Zona 4 - Coatepeque": $tienda_asignada = 47915;
            break;

			
			
			
			
		
			 //Cocales
        case "Centro de Patulul": $tienda_asignada = 105305;
            break;
		case "Entrada Oxipec": $tienda_asignada = 105305;
            break;	
		case "San Juan Bautista": $tienda_asignada = 105305;
            break;	        
		case "La Pepsi": $tienda_asignada = 105305;
            break;	        			
		case "Entrada Chipo": $tienda_asignada = 105305;
            break;	  
		case "Nueva Esperanza": $tienda_asignada = 105305;
            break;	  
		case "Buena vista": $tienda_asignada = 105305;
            break;	  			
		case "Vista Hermosa": $tienda_asignada = 105305;
            break;	  						
		case "El manantial": $tienda_asignada = 105305;
            break;	  									
		case "Los sauces": $tienda_asignada = 105305;
            break;	  												
		case "Oxipec dentro": $tienda_asignada = 105305;
            break;	  											
		case "Las Marias": $tienda_asignada = 105305;
            break;	  								
		case "Santa Terecita": $tienda_asignada = 105305;
            break;	  											
		case "Chipo": $tienda_asignada = 105305;
            break;	  												
		case "San Carlos": $tienda_asignada = 105305;
            break;	  										
		case "Centro de Salud San Juan Bautista": $tienda_asignada = 105305;
            break;	  											

		case "Barrio la cienaga - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  			
		case "Xetacabaj - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  						
		case "Barrio la cienaga hasta la xelac - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  									
		case "moreria - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  												
		case "Barrio la independencia 1, y 2 - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  															
		case "Barrio el calvario - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																	
		case "Barrio el santiago - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																				
		case "Baños chiquitos - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																
		case "Barrio las claras - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																	
		case "Barrio el chorro - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																	
		case "Pasarela - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  															
		case "San sebastian 1 y 2 - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																	
		case "San salvador - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																
		case "Puente marimba - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																
		case "Cuatro caminos - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																			
		case "Rastro - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  														
		case "Baños grandes - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																
		case "Sector de las picinas de fray - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																			
		case "Xecanchavox mas conocido la cruz - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																					
		case "Xecanchavox escuela intervida - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																				
		case "Aldeas de San Cristobal Totonicapan - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																					
		case "Xesuc  carretera principal - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																			
		case "San ramon  carretera pincipal hasta la iglesia - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																						
		case "Pacanac carretera pincipal - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																			
		case "Patachaj carretera pincipal - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																						
		case "Aldea nueva candelaria carretera pincipal hasta el centro  - San Cristobal Totonicapan": $tienda_asignada = 105305;
            break;	  																						
  			
			
						
			
			
			//Jalapa
			
		case "Jalapa - Zona 1": $tienda_asignada = 117799;
            break;	  											
			case "Jalapa - Zona 2": $tienda_asignada = 117799;
            break;	  												
			case "Jalapa - Zona 5": $tienda_asignada = 117799;
            break;	  															
			case "Jalapa - Zona 6": $tienda_asignada = 117799;
            break;	  																		
		case "Jalapa - Zona 7": $tienda_asignada = 117799;
            break;	

			
		// Antigua 126504
case "Condominio Bella Vista Jocotenango": $tienda_asignada = 126504; break;
case "Calle San Isidro Final Jocotenango": $tienda_asignada = 126504; break;
case "Colonia el carmen ": $tienda_asignada = 126504; break;
case "Guatetubo Jocotenango": $tienda_asignada = 126504; break;
case "Jardín La Esperanza Jocotenango": $tienda_asignada = 126504; break;
case "Sistegua Jocotenango": $tienda_asignada = 126504; break;
case "Residenciales Las Rosas Jocotenango": $tienda_asignada = 126504; break;
case "San cristobal el bajo ": $tienda_asignada = 126504; break;
case "Escuela Integrada de Niños Trabajadores Jocotenango": $tienda_asignada = 126504; break;
case "Universidad Maria Galvez Jocotenango": $tienda_asignada = 126504; break;
case "2da Calle Jocotenango": $tienda_asignada = 126504; break;
case "Colonia Las Victorias Lote f-7 Jocotenango": $tienda_asignada = 126504; break;
case "Calle Real de Jocotenango": $tienda_asignada = 126504; break;
case "Colegio Mixto San Vicente de Paúl Jocotenango": $tienda_asignada = 126504; break;
case "Gasolinera Puma Jocotenango": $tienda_asignada = 126504; break;
case "Antigua Geeks Jocotenango": $tienda_asignada = 126504; break;
case "Antigüedades El Oso Jocotenango": $tienda_asignada = 126504; break;
case "Librería Colibrí Jocotenango": $tienda_asignada = 126504; break;
case "Asociación Casa Del Niño Antigua Guatemala": $tienda_asignada = 126504; break;
case "Casa Jocotenango": $tienda_asignada = 126504; break;
case "1a Calle a 7a Calle Colonia Los Llanos Jocotenango": $tienda_asignada = 126504; break;
case "Centro Comercial Plaza Jocotenango": $tienda_asignada = 126504; break;
case "Finaca La Azotea Jocotenango": $tienda_asignada = 126504; break;
case "Mundo Natural Jocotenango": $tienda_asignada = 126504; break;
case "Calle de La Azotea Jocotenango": $tienda_asignada = 126504; break;
case "1a Avenida y 3ra Calle Jocotenango": $tienda_asignada = 126504; break;
case "Santuario de San Felipe de Jesús Jocotenango": $tienda_asignada = 126504; break;
case "Hospital Nacional Pedro Bethancourt Antigua": $tienda_asignada = 126504; break;
case "Estadio Pensativo Atigua Guatemala": $tienda_asignada = 126504; break;
case "2a Avenida y Calle de Chajón Antigua": $tienda_asignada = 126504; break;
case "Calle de La Cruz Antigua": $tienda_asignada = 126504; break;
case "Plazuela de San Sebastián Antigua": $tienda_asignada = 126504; break;
case "Iglesia La Merced Antigua": $tienda_asignada = 126504; break;
case "Call de Recoletos Antigua": $tienda_asignada = 126504; break;
case "1a Calle Poniente de 3a a 4a Avenida Norte Antigua": $tienda_asignada = 126504; break;
case "Mercado de Artesanías El Carmen": $tienda_asignada = 126504; break;
case "La Bodegona Antigua": $tienda_asignada = 126504; break;
case "Rancho Nimajay": $tienda_asignada = 126504; break;
case "Mc Donald´s Antigua": $tienda_asignada = 126504; break;
case "Hotel Soleil La Antigua": $tienda_asignada = 126504; break;
case "Calle de San Bartolo Becerra": $tienda_asignada = 126504; break;
case "7a Avenida Sur Antigua": $tienda_asignada = 126504; break;
case "Los tres Tiempos Antigua": $tienda_asignada = 126504; break;
case "Porta Hotel Antigua": $tienda_asignada = 126504; break;
case "Mezon Panza Verde": $tienda_asignada = 126504; break;
case "5a Calle a 9a calle Oriente": $tienda_asignada = 126504; break;
case "Hotel Quinta de Las Flores": $tienda_asignada = 126504; break;
case "Calle de Chiplilapa": $tienda_asignada = 126504; break;
case "Parque Central Antigua Guatemala": $tienda_asignada = 126504; break;
case "Casa y Mueseo del Jade Antigua": $tienda_asignada = 126504; break;
case "Condominio Villas Orotava Antigua": $tienda_asignada = 126504; break;
case "Call de Los Duelos Antigua": $tienda_asignada = 126504; break;
case "Hotel Palacio de Doña Beatriz Antigua": $tienda_asignada = 126504; break;
case "Hotel Boutique Villa Sofia Antigua": $tienda_asignada = 126504; break;
case "Ruinas de Candelaria Antigua": $tienda_asignada = 126504; break;
case "Cerro de La Cruz Antigua": $tienda_asignada = 126504; break;
case "5a Calle a 7a Calle Oriente": $tienda_asignada = 126504; break;
case "4a Avenida Sur Antigua": $tienda_asignada = 126504; break;
case "5a Avenida Sur": $tienda_asignada = 126504; break;
case "Girasoles de Antigua": $tienda_asignada = 126504; break;
case "Colegio Mixto Santiago de Los Caballeros": $tienda_asignada = 126504; break;
case "Calle san luquitas ": $tienda_asignada = 126504; break;
case "Finca Colombia La Antigua Guatemala": $tienda_asignada = 126504; break;
case "Barrios Coloniales Antigua Guatemala": $tienda_asignada = 126504; break;
case "3a a 5a Calle Ciudad Vieja": $tienda_asignada = 126504; break;
case "Despensa Familiar Ciudad Vieja": $tienda_asignada = 126504; break;
case "La Bodegona Ciudad Vieja": $tienda_asignada = 126504; break;
case "Ciudad Vieja Centro": $tienda_asignada = 126504; break;
case "Ciudad Vieja Ruta a Antigua": $tienda_asignada = 126504; break;
case "Hotel Colonial Ciudad Vieja": $tienda_asignada = 126504; break;
case "Alotenango": $tienda_asignada = 126504; break;
case "San Cristobal El Alto": $tienda_asignada = 126504; break;
case "Santiago Zamora": $tienda_asignada = 126504; break;
case "Santa Catarina Barahona": $tienda_asignada = 126504; break;
case "San Andrés Ceballos": $tienda_asignada = 126504; break;
			
   
// Chiquimula 14197
case "Barrio el molino chiquimula": $tienda_asignada = 14197; break;
case "Colonia el caminero chiquimula": $tienda_asignada = 14197; break;
case "Colonia el banvi chiquimula": $tienda_asignada = 14197; break;
case "Colonia ruano chiquimula": $tienda_asignada = 14197; break;
case "Residenciales Campollano premier chiquimula": $tienda_asignada = 14197; break;
case "Barrio shusho abajo chiquimula": $tienda_asignada = 14197; break;
case "Villas jose chiquimula": $tienda_asignada = 14197; break;
case "Colonia los cerezos chiquimula": $tienda_asignada = 14197; break;
case "Residenciales prados de canaan chiquimula": $tienda_asignada = 14197; break;
case "Condominio Cebalia chiquimula": $tienda_asignada = 14197; break;
case "Colonia shoporin chiquimula": $tienda_asignada = 14197; break;
case "Colonia Prados de de san andres chiquimula": $tienda_asignada = 14197; break;
case "Residenciales villa verde chiquimula": $tienda_asignada = 14197; break;
case "Condado la Pradera chiquimula": $tienda_asignada = 14197; break;
case "Colonia los tanques chiquimula": $tienda_asignada = 14197; break;
case "Residenciales el Jurgalion chiquimula": $tienda_asignada = 14197; break;
case "Prados de chiquimula": $tienda_asignada = 14197; break;
case "Residencial paseo real chiquimula": $tienda_asignada = 14197; break;
case "Colonia petapilla chiquimula": $tienda_asignada = 14197; break;
case "Colonia sasmo arriba chiquimula": $tienda_asignada = 14197; break;
case "Barrio el teatro chiquimula": $tienda_asignada = 14197; break;
case "Colonia de linda vista chiquimula": $tienda_asignada = 14197; break;
case "Colonia buena ventura chiquimula": $tienda_asignada = 14197; break;
case "Residenciales Chiquimula": $tienda_asignada = 14197; break;
case "Colonia el Angel chiquimula": $tienda_asignada = 14197; break;
case "Colonia las brisas de san jose chiquimula": $tienda_asignada = 14197; break;
case "Colonia el manguito chiquimula": $tienda_asignada = 14197; break;
case "Colonia las flores chiquimula": $tienda_asignada = 14197; break;
case "Barrio san pedrito Chiquimula": $tienda_asignada = 14197; break;
case "Colonia el Centro chiquimula": $tienda_asignada = 14197; break;
case "Colonia Lemus chiquimula": $tienda_asignada = 14197; break;
case "Barrio el Zapotillo": $tienda_asignada = 14197; break;
case "Colonia las Lomas chiquimula": $tienda_asignada = 14197; break;
case "Colonia las rosas Chiquimula": $tienda_asignada = 14197; break;
case "Residenciales GYT chiquimula": $tienda_asignada = 14197; break;
case "Colonia el Mirador chiquimula": $tienda_asignada = 14197; break;
case "Colonia el milagro chiquimula": $tienda_asignada = 14197; break;
case "Colonia Minerva chiquimula": $tienda_asignada = 14197; break;
case "Colonia la esperanza Chiquimula": $tienda_asignada = 14197; break;
case "Barrio san isidro chiquimula": $tienda_asignada = 14197; break;
case "Jardines de concepcion chiquimula": $tienda_asignada = 14197; break;
case "Barrio El Jurgallón chiquimula": $tienda_asignada = 14197; break;
case "Barrio de Candelaria chiquimula": $tienda_asignada = 14197; break;
case "Barrio el calvario Chiquimula": $tienda_asignada = 14197; break;
case "Barrio la democracia chiquimula": $tienda_asignada = 14197; break;
case "Lotificación Villas de Manolo chiquimula": $tienda_asignada = 14197; break;
			
		
			//Huehuetenango
        case "Colonia Santa agape Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Residencial bosqueta Huehuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia el Valle Huehuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia las Flores Huehuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia Reyna Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia el prado Huehuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia la bendición Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Proyecto san José Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Cambote zona 11 Huehuetenango": $tienda_asignada = 144324;
            break;
        case "Barrio san Miguel Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Laguna de zaculeu Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia moscamed de las lagunas Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Quinta Samayoa Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Condominio del bosque Gardens Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Condado los encinos Huhuetenango": $tienda_asignada = 144324;
            break;
        case "El manantial Huhuetenango": $tienda_asignada = 144324;
            break;
        case "La Salle diversificado Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Condominio el Pedregal Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Chimusinique Huhuetenango": $tienda_asignada = 144324;
            break;
        case "La joya Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Residenciales villa verde Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Condominio Santa fe Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia los castillos Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia la Hondonada Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia el bosque Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia san Sebastián Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia las luces Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Apartamentos la floresta Huhuetenango": $tienda_asignada = 144324;
            break;
        case "Colonia la floresta Huhuetenango": $tienda_asignada = 144324;
            break;

			
			//Mazate
case "Universidad Mariano Gálvez - Mazate": $tienda_asignada = 156344;
    break;
case "Universidad Da Vinci de Guatemala - Mazate": $tienda_asignada = 156344;
    break;
case "INTECAP Suchitepéquez - Mazate": $tienda_asignada = 156344;
    break;
case "Hotel Costa Verde - Mazate": $tienda_asignada = 156344;
    break;
case "Hotel Alba - Mazate": $tienda_asignada = 156344;
    break;
case "Bambú Resort - Mazate": $tienda_asignada = 156344;
    break;
case "Hotel Villa Isabel - Mazate": $tienda_asignada = 156344;
    break;
case "Hotel Roma - Mazate": $tienda_asignada = 156344;
    break;
case "Auto Hotel Frome - Mazate": $tienda_asignada = 156344;
    break;
case "Colegio Centroamericano - Mazate": $tienda_asignada = 156344;
    break;
case "Colegio Froebel - Mazate": $tienda_asignada = 156344;
    break;
case "Centro de Estudios Integrales - Mazate": $tienda_asignada = 156344;
    break;
case "Colegio Científico - Mazate": $tienda_asignada = 156344;
    break;
case "Colegio Hebrón - Mazate": $tienda_asignada = 156344;
    break;

			
			
			
			
			
			
			
			
						
			
			
			
			//default: $tienda_asignada = 9419;
	    default: $tienda_asignada = 2239;
    }

    $order = new WC_Order($order_id);
    $order_id = $order->get_id();

    $order_typeT = get_post_meta($order_id, 'woofood_order_type', true);
    
    if ($order_typeT === "delivery") {
        update_post_meta($order_id, 'extra_store_name', esc_attr($tienda_asignada));
    }
}


// Añade el Nombre de la Tienda al Meta del pedido
add_action('woocommerce_checkout_update_order_meta', 'add_store_name_to_order');
add_action('woocommerce_before_order_object_save', 'update_store_name_if_changed');

// Función para agregar el nombre de la tienda asignada a partir del ID en el checkout
function add_store_name_to_order($order_id) {
    update_store_name_meta($order_id);
}

// Función para actualizar el nombre de la tienda si el meta 'extra_store_name' cambia
function update_store_name_if_changed($order) {
    $order_id = $order->get_id();
    $current_store_id = get_post_meta($order_id, 'extra_store_name', true);
    $previous_store_id = $order->get_meta('_previous_extra_store_name');

    if ($current_store_id !== $previous_store_id) {
        update_store_name_meta($order_id);
        update_post_meta($order_id, '_previous_extra_store_name', $current_store_id);
    }
}

// Función principal para asignar y actualizar el nombre de la tienda
function update_store_name_meta($order_id) {
    // Obtener el ID de la tienda asignada
    $store_id = get_post_meta($order_id, 'extra_store_name', true);

    // Asignar nombre de tienda a partir del ID
    switch ($store_id) {
        case 2239: $store_name = 'Calle Marti'; break;
        case 2241: $store_name = 'Diagonal 6'; break;
        case 2244: $store_name = 'Varieta'; break;
        case 2238: $store_name = 'Alamos'; break;
        case 2249: $store_name = 'Plaza Madero'; break;
        case 3068: $store_name = 'San Cristobal'; break;
        case 2247: $store_name = 'Petapa'; break;
        case 2242: $store_name = 'Montufar'; break;
        case 2237: $store_name = 'Majadas'; break;
        case 31771: $store_name = 'SM-Petapa'; break;
        case 3066: $store_name = 'Carretera a El Salvador'; break;
        case 2250: $store_name = 'Xela'; break;
        case 3615: $store_name = 'Chimaltenango'; break;
        case 14750: $store_name = 'Escuintla'; break;
        case 31901: $store_name = 'Jutiapa'; break;
        case 47915: $store_name = 'Coatepeque'; break;
        case 70568: $store_name = 'Villa Lobos'; break;
        case 103619: $store_name = 'Salcaja'; break;
        case 28656: $store_name = 'Amatitlán'; break;
        case 105305: $store_name = 'Cocales'; break;
        case 117799: $store_name = 'Jalapa'; break;
        case 2248: $store_name = 'El Frutal'; break;
        case 2243: $store_name = 'Metronorte'; break;
        case 2245: $store_name = 'Naranjo'; break;
        case 97714: $store_name = 'Interplaza CHI'; break;
        case 44936: $store_name = 'Reu'; break;
        case 24829: $store_name = 'San Juan'; break;
        case 24021: $store_name = 'Xela Interplaza'; break;
        case 2246: $store_name = 'Zona 1'; break;
        case 126504: $store_name = 'Antigua'; break;
        case 14197: $store_name = 'Chiquimula'; break;
        case 141967: $store_name = 'Chiquimula'; break;
        case 144324: $store_name = 'Huehuetenango'; break;		
        case 155165: $store_name = 'Nogales'; break;	
        case 156344: $store_name = 'Mazate'; break;				

        default: $store_name = 'Tienda Desconocida'; // Valor predeterminado
    }

    // Guardar el nombre de la tienda asignada como un nuevo meta en el pedido
    update_post_meta($order_id, 'tienda_asignada', sanitize_text_field($store_name));
}






//Añade el DEVICE al Meta del pedido Mimer
add_action('woocommerce_checkout_update_order_meta', 'yc_save_device_os_to_order');

function yc_save_device_os_to_order($order_id) {
    $url = get_post_meta($order_id, 'handl_landing_page', true);

    if (strpos($url, 'Android') !== false) {
        $device = 'Android';
    } elseif (strpos($url, 'IOS') !== false) {
        $device = 'IOS';
    } else {
        $device = 'MWeb';
    }

    update_post_meta($order_id, 'device', esc_attr($device));
}

//Show added query var to admin order
add_action('woocommerce_admin_order_data_after_billing_address', 'yc_show_device_os_to_admin_order');

function yc_show_device_os_to_admin_order($order) {

    if ($order->get_meta('device')) {
        echo '<p><b>Device:</b><br/>' . $order->get_meta('device') . '</p>';
    }
}





// Mimer Add Phone to edit account page
add_action('woocommerce_edit_account_form', 'add_billing_mobile_phone_to_edit_account_form'); // After existing fields

function add_billing_mobile_phone_to_edit_account_form() {
    $user = wp_get_current_user();
    ?>
    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="billing_phone"><?php _e('Teléfono', 'woocommerce'); ?> <span class="required">*</span></label>
        <input type="text" class="woocommerce-Input woocommerce-Input--phone input-text" name="billing_phone" id="billing_mobile_phone" value="<?php echo esc_attr($user->billing_phone); ?>" />
    </p>
    <?php
}

// Check and validate the mobile phone
add_action('woocommerce_save_account_details_errors', 'billing_mobile_phone_field_validation', 20, 1);

function billing_mobile_phone_field_validation($args) {
    if (isset($_POST['billing_phone']) && empty($_POST['billing_phone']))
        $args->add('error', __('Por favor ingrese su teléfono', 'woocommerce'), '');
}

// Save the mobile phone value to user data
add_action('woocommerce_save_account_details', 'my_account_saving_billing_mobile_phone', 20, 1);

function my_account_saving_billing_mobile_phone($user_id) {
    if (isset($_POST['billing_phone']) && !empty($_POST['billing_phone']))
        update_user_meta($user_id, 'billing_phone', sanitize_text_field($_POST['billing_phone']));
}
















add_action('init','redirect_after_passrecovery');
function redirect_after_passrecovery() {
    if ( strpos($_SERVER['REQUEST_URI'], '/mi-cuenta/lost-password/?reset-link-sent=true') !== false ) {
		echo "<script>
				alert('Reestablecimiento de contraseña Exitoso!!! Se ha enviado el enlace a su correo electrónico. Desde ahí podrá reestablecer su contraseña.');
				window.location.href='/ingresar/';
				</script>";
		
		
		exit;
    }
}



add_action('init','redirect_after_passreset');
function redirect_after_passreset() {
    if ( strpos($_SERVER['REQUEST_URI'], '/mi-cuenta/?password-reset=true') !== false ) {
		echo "<script>
				alert('Has cambiado exitosamente tu contraseña. Ahora puedes ingresar como tu usuario y nueva contraseña');
				window.location.href='/ingresar/';
				</script>";
		
		
		exit;
    }
}



//assign user in guest order
add_action( 'woocommerce_new_order', 'action_woocommerce_new_order', 10, 1 );
function action_woocommerce_new_order( $order_id ) {
	$order = new WC_Order($order_id);
	$user = $order->get_user();
	
	if( !$user ){
		//guest order
		$userdata = get_user_by( 'email', $order->get_billing_email() );
		if(isset( $userdata->ID )){
			//registered
			update_post_meta($order_id, '_customer_user', $userdata->ID );
		}else{
			//Guest
		}
	}
}








// Create user if one does not exist
function tn_checkout_create_acct( $post_data ) {
	$user = get_user_by( 'email', $post_data['billing_email'] );
	if ( $user ) {
		$post_data['createaccount'] = 0;
	} else {
		$post_data['createaccount'] = 1;
	}
	return $post_data;
}

add_filter('woocommerce_checkout_posted_data', 'tn_checkout_create_acct');

// Attach order to existing account if user not logged in
function tn_checkout_set_customer_id( $current_user_id ) { 
	if ( !$current_user_id ) {
		$user = get_user_by('email', $_POST['billing_email']);
		if ( $user ) {
			$current_user_id = $user->ID;
		}
	}
	return $current_user_id;
} 

add_filter('woocommerce_checkout_customer_id', 'tn_checkout_set_customer_id');



add_action( 'woocommerce_after_checkout_validation', 'validate_billing_fields', 10, 2 );

function validate_billing_fields( $fields, $errors ) {
    // Verificar si la opción de Pickup está seleccionada
    $order_type = isset( $_POST['woofood_order_type'] ) ? $_POST['woofood_order_type'] : '';
    
    // Si es Pickup, no aplicar validación a los campos de Departamento y Zona
    if ( $order_type === 'pickup' ) {
        return;
    }

    // Obtener los valores de los campos de Departamento y Zona
    $billing_city_2 = isset( $_POST['billing_city_2'] ) ? $_POST['billing_city_2'] : '';
    $billing_state_2 = isset( $_POST['billing_state_2'] ) ? $_POST['billing_state_2'] : '';

    // Aplicar validación solo si los campos no están llenos
    if ( empty( $billing_city_2 ) || $billing_city_2 === '' ) {
        $errors->add( 'billing_city_2_error', 'Por favor selecciona una Zona.' );
    }

    if ( empty( $billing_state_2 ) || $billing_state_2 === '' ) {
        $errors->add( 'billing_state_2_error', 'Por favor selecciona un Departamento.' );
    }
}










