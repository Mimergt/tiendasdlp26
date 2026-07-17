//Sourcecode : http://logicify.github.io/jquery-locationpicker-plugin/
jQuery(document).ready(function ($) {

  //$('#extra_store_name_pickup:selected').remove();
  $('#extra_store_name_pickup option:selected').removeAttr('selected');
  $('#extra_store_name_pickup').prepend($('<option>', {
    value: 0,
    text: 'Elige un restaurante'
  }));

  $("#extra_store_name_pickup").val("0");
  $(".woofood_store_address_checkout").hide();


  let gtgu_opciones_1 = [
	'',  
	'Zona 1 - Ciudad',
	'Zona 2 - Ciudad',
	'Zona 4 - Ciudad',
	'Zona 5 - Ciudad',
	'Zona 6 - Ciudad',
	'Zona 9 - Ciudad',
	'Zona 10 - Ciudad',
	'Zona 13 - Ciudad',
	'Zona 14 - Ciudad',
	'Zona 15 - Ciudad',
	'Zona 16 - Ciudad',
	'Zona 17 - Ciudad',
	'Zona 18 - Ciudad',
	'Zona 19 - Ciudad',
	'Zona 25 - Ciudad',
	'Carretera al Atlántico hasta el km 10.5',
	'Km 16 Carretera al Altlántico',
	'Santa catarina Pinula hasta el km 11',
	'San José Pinula',
	'Carretera a El Salvador hasta el km 26',
  // Majadas
  'Residenciales roosevelt zona 7 de mixco',
  'Residenciales parque 7 zona 7 de mixco',
  'El paraiso 1 y 2 zona 7 de mixco',
  'Zona 2 de Mixco (Completa)',
  'Zona 3 de mixco (Completo)',
  'Molino de las flores zona 2 Mixco',
  'km 16 ruta al pacifico zona 6 de mixco',
  'edificio multifamiliares zona 3 capital',
  'Zona 11 Capital (Completa)',
  'Zona 8 capital',
  'Colonia El Carmen Zona 12 Capital',
  'Colonia Villa Sol Zona 12 Capital',
  'Colonia Javier Zona 12 Capital',
  'Calzada Aguilar Batres Zona 12 Capital',
  'Colonia Santa Elisa Zona 12 Capital',
  'Prados de Monte María Zona 12 Capital',
  'Monte María 3 Zona 12 Capital',
  'Colonia El Bosque Zona 12 Capital',
  'Colonia La Reformita Zona 12 Capital',
  'Condominio El Rosario Zona 12 Capital',
  'Residenciales Pamplona Zona 12 Capital',
  'Avenida Petapa Zona 12 Capital (Hasta la 50 calle)',
  'Colonia vientos del valle zona 12',
  'Colonia miles rock',
  'Colonia El Rodeo Zona 7 Capital',
  'Colonia Quinta Samayoa Zona 7 Capital',
  'Colonia Castillo Lara Zona 7 Capital',
  'Ciudad de Plata I y II Zona 7 Capital',
  'Colonia San Martín Zona 7 Capital',
  'Condominio 20-01 Zona 7 Capital',
  'Kaminal Juyú I y II Zona 7 Capital',
  'Tikal I, II y III Zona 7 Capital',
  'Colonia Utatlán I Zona 7 Capital',
  'Colonia Landivar Zona 7 Capital',
  'Colonia 3 de julio zona 12',
  'Zona 12 de monte maría 1,2,3 y prados de montemaria',
  'Colonia santa rosa 1 y 2',
  'Zona 12 Cortijo 1,2 y 3',
  'San Rafael Zona 21',
  'Residenciales Atanacio 3 Zona 21',
  'Lomas de Macadamia Zona 21',
  'Colonia Bello Horizonte Zona 21',
  'Condominio San Juan de Los Encinos Zona 21',
  'Torres Petapa Zona 21',
  'Colonia Arenera Zona 21',
  'Residenciales Eureka Zona 21',
  'Vientos del Valle Zona 21',
  'Colonia Cerro Gordo Zona 21',
  'Colonia Vasquez Zona 21',
  'Colonia Justo Rufino Barrios Zona 21',
  'Condominio Jardines de Florentina Zona 21',
  'Guajitos Zona 21',
  'Colonia Morse Zona 21',
  'Villas de San Jose zona 7',
  'Condominio villas de san martin zona 7 capital',
  'El Arenal Petapa Zona 21',
  'Campo Bello',
  'Asentamiento Esquipulitas',
  'El Esfuerzo',
  'Letran',
  'El Tamarindo',
  'Anexo 1 y 2',
  'Loma Real',
  'El Bucaro',
  'Esquipulitas',
  'Mezquital',
  'La Esperanza',
  'El Éxodo',
  'Colonia La Bethania Zona 7 Capital',
  'Colonia Sakerty Zona 7 Capital',
  'Colonia El Granizo I, II, III Zona 7 Capital',
  'Colonia El Niño Dormido Zona 7 Capital',
  'Colonia 4 de Febrero Zona 7 Capital',
  'Colonia Tecún Umán Zona 7 Capital',
  'Colonia El Amparo I, II, III Zona 7 Capital',
  'Colonia el Incienso Zona 7 Capital',
  'Torres de tulam tzu zona 4 de mixco',
  'Cañadas del naranjo zona 4 de mixco',
  'Colonia valle del sol zona 4 de mixco',
  'Zona 1 de Mixco',
	'Zona 8 de Mixco',
	'Zona 1 de Villa Nueva',
	'Zona 2 de Villa Nueva',
	'Zona 4 de Villa Nueva',
	'Zona 5 de Villa Nueva',  
	'Colinas de Monte María',
	'Colinas de Monte María Sur',
	'Call Center GENTRAC',
	'AVICOLA',
	'San José Villa Nueva',
	'Lomas del Sur',
	'Campos de San José',
	'Llano Alto 1,2, 3, 4, 5 Y 6',
	'Residenciales TERRANOVA',
	'Los Celajes',
	'Colonia Los Celajes',
	'Jardines de San José',
	'Colonia Los Olivos',
	'Condominio Valle Verde',
	'ENCA',
	'Alto de San Barcenas 1.2 Y 3',
	'Condominios TANQUES 1,2 Y 3',
	'Condominios Bosques de San José',
	'Colonia Valle Verde VN',
	'Valles de María',
	'Hacienda de Las Flores',
	'Residenciales Villa Lobos',
	'Valles de Doña Leonor',
/*	'Zona 3 San Miguel Petapa', */
/*	'Zona 7 de San Miguel Petapa', */
/*	'Zona 8 San Miguel Petapa', */
	'Zona 11 San Miguel Petapa', 
/*	'Zona 13 San Miguel Petapa', */
	'Amatitlán',
	'Residenciales Petapa 1 y 2',
	'San miguelito',
	'Covitigss',
	'Residenciales el tabacal',
	'Colonia la felicidad',
	'Reformadores',
	'Ciudad del sol',
	'Arada 1 y 2',
	'Jardines de la virgen',
	'Jardines del carmen 1 y 2',
	'Fuentes de valle 1, 2,3, 4 y 5',
	'Condado el carmen',
	'villas del condado 1 y 2',
	'Prados de castilla',
	'Luminela',
	'Adarha',
	'Colonia enriqueta',
	'Colonia los planes',
	'Panorama del frutal',
	'Colonia paraiso del frutal',
	'Colonia el paraiso 1 y 2',
	'Entre valles',
	'Solana entrevalles',
	'frutal 1,2,3,4 y 5',
	'fuentes del valle 1 y 2',
	'Prados de tabal 1 y 2',
	'Altos de fuentes 1,2 y 3',
	'Paseo las fuentes 1,2 y 3',
	'Villa hermosa 1 y 2',
	'Prados de villa hermosa',
	'Alamedas de san miguel',
	'Colonia santa ines',
	'Colonia eucaliptos',
	'Colonia las palmas',
	'Condominio villa real',
	'La joya 1 y 2',
	'Pradera del sur',
	'Villa la joya',
	'Los arcos',
	'Valles de san miguel',
	'San luis',
	'El rosario',
	'Viñas del sur',
	'Los amates',
	'Colonia eterna primavera',
	'Prados de sonora',
	'Villa de san mateo',
	'Catalina linda vista',
	'Valles de sonora 1,2,3 y 4',
	'Residenciales doña leonor',
	'Santorini',
	'Colonia el cortijo',
	'Guatel',
	'Condominio el prado',
	'Inde y guatel 2',
	'Residenciales altamira',
	'Altos de sonora',
	'Jardines de la mancion 1 y 2',
	'Torres de villa hermosa'
 
  ];

  let gtgu_opciones_2 = [
	  '',
    'Zona 1 - Quetzaltenango',
    'Zona 2 - Quetzaltenango',
    'Zona 3 - Quetzaltenango',
    'Zona 4 - Quetzaltenango',
    'Zona 5 - Quetzaltenango',
    'Zona 6 - Quetzaltenango',
    'Zona 7 - Quetzaltenango',
    'Zona 8 - Quetzaltenango',
    'Zona 9 - Quetzaltenango',
    'Zona 10 - Quetzaltenango',
    'Zona 11 - Quetzaltenango',
    'Zona 12 - Quetzaltenango',
    'Parque el carmen - Salcaja',
    'Curruchique - Salcaja',
    'Baños de san juan salcaja - Salcaja',
    'Mirador barrio boys - Salcaja',
    'Barrio nuevo - Salcaja',
    'Cementerio municipal - Salcaja',
   'Parque san luis salcaja - Salcaja',
   'Aldea infantil rudolf walther - Salcaja',
    'Arenal - Salcaja',
    'Cruz del milagro - Salcaja',
    'Bella tierra - Salcaja',
   'Bosque magico - Salcaja',
   'Parque memorial los olivos - Salcaja',
   'Cancha marroquin - Salcaja',
   'Mirador el carmen - Salcaja', 
  'Cruz de las madres - Salcaja'
  ];

  let gtgu_opciones_3 = [
	  '',
	  'Zona 1 - Chimaltenango',
    'Zona 2 - Chimaltenango',
    'Zona 3 - Chimaltenango',
    'Zona 4 - Chimaltenango',
    'Zona 5 - Chimaltenango',
    'Zona 6 - Chimaltenango',
    'Zona 7 - Chimaltenango',
    'Zona 8 - Chimaltenango',
    'Zona 9 - Chimaltenango',
    'Zona 10 - Chimaltenango',
    'Zona 11 - Chimaltenango'];

  let gtgu_opciones_4 = [
	  '',
	  'Zona 1 - Escuintla',
    'Zona 2 - Escuintla',
    'Zona 3 - Escuintla',
    'Zona 4 - Escuintla'];

  let gtgu_opciones_5 = [
	  '',
	  'Zona 1 - Jutiapa',
    'Zona 2 - Jutiapa',
    'Zona 3 - Jutiapa',
    'Zona 4 - Jutiapa'];
  
   let gtgu_opciones_6 = [
	   '',
	   'Zona 1 - Retalhuleu',
    'Zona 2 - Retalhuleu',
    'Zona 3 - Retalhuleu',
	'Zona 4 - Retalhuleu',
    'Zona 5 - Retalhuleu',
    'Zona 6 - Retalhuleu',
	'Zona 7 - Retalhuleu',
    'Zona 8 - Retalhuleu'];
   let gtgu_opciones_7 = [
	   '',
	   'Zona 1 - Coatepeque',
    'Zona 2 - Coatepeque',
    'Zona 3 - Coatepeque',
	'Zona 4 - Coatepeque'];
	
  let gtgu_opciones_8 = [
    '',
    'Barrio la cienaga - San Cristobal Totonicapan',
    'Xetacabaj - San Cristobal Totonicapan',
    'Barrio la cienaga hasta la xelac - San Cristobal Totonicapan',
    'moreria - San Cristobal Totonicapan',
    'Barrio la independencia 1, y 2 - San Cristobal Totonicapan',
    'Barrio el calvario - San Cristobal Totonicapan',
    'Barrio el santiago - San Cristobal Totonicapan',
    'Baños chiquitos - San Cristobal Totonicapan',
    'Barrio las claras - San Cristobal Totonicapan',
    'Barrio el chorro - San Cristobal Totonicapan',
    'Pasarela - San Cristobal Totonicapan',
    'San sebastian 1 y 2 - San Cristobal Totonicapan',
    'San salvador - San Cristobal Totonicapan',
    'Puente marimba - San Cristobal Totonicapan',
    'Cuatro caminos - San Cristobal Totonicapan',
    'Rastro - San Cristobal Totonicapan',
    'Baños grandes - San Cristobal Totonicapan',
    'Sector de las picinas de fray - San Cristobal Totonicapan',
    'Xecanchavox mas conocido la cruz - San Cristobal Totonicapan',
    'Xecanchavox escuela intervida - San Cristobal Totonicapan',
    'Aldeas de San Cristobal Totonicapan - San Cristobal Totonicapan',
    'Xesuc  carretera principal - San Cristobal Totonicapan',
    'San ramon  carretera pincipal hasta la iglesia - San Cristobal Totonicapan',
    'Pacanac carretera pincipal - San Cristobal Totonicapan',
    'Patachaj carretera pincipal - San Cristobal Totonicapan',
    'Aldea nueva candelaria carretera pincipal hasta el centro  - San Cristobal Totonicapan'
  
  ];
	
	
 let gtgu_opciones_9 = [
    '',
    'Centro de Patulul',
    'Entrada Oxipec',
    'San Juan Bautista',	 
    'La Pepsi',	 	 
    'Entrada Chipo',	
    'Nueva Esperanza',		 
    'Buena vista',		 	 
    'Vista Hermosa',		 	 
    'El manantial',		 	 	 
    'Los sauces',		 	 	 	 
    'Oxipec dentro',		 	 	 	 	 
    'Las Marias',		 	 	 	 	 	 
    'Santa Terecita',		 	 	 	 	 	 	 
    'Chipo',		 	 	 	 	 	 	 
    'San Carlos',		 	 	 	 	 	 	 	 
    'Centro de Salud San Juan Bautista',

	'Universidad Mariano Gálvez - Mazate',
    'Universidad Da Vinci de Guatemala - Mazate',
    'INTECAP Suchitepéquez - Mazate',
    'Hotel Costa Verde - Mazate',
    'Hotel Alba - Mazate',
    'Bambú Resort - Mazate',
    'Hotel Villa Isabel - Mazate',
    'Hotel Roma - Mazate',
    'Auto Hotel Frome - Mazate',
    'Colegio Centroamericano - Mazate',
    'Colegio Froebel - Mazate',
    'Centro de Estudios Integrales - Mazate',
    'Colegio Científico - Mazate',
    'Colegio Hebrón - Mazate'
  
  ];

	
	
	let gtgu_opciones_10 = [
    '',
    'Jalapa - Zona 1',
    'Jalapa - Zona 2',
    'Jalapa - Zona 5',	 
    'Jalapa - Zona 6',	 	 
    'Jalapa - Zona 7'	
  
  ];
	
let gtgu_opciones_11 = [
    '',
    'Condominio Bella Vista Jocotenango',
    'Calle San Isidro Final Jocotenango',
    'Guatetubo Jocotenango',
    'Jardín La Esperanza Jocotenango',
    'Sistegua Jocotenango',
    'Residenciales Las Rosas Jocotenango',
    'Escuela Integrada de Niños Trabajadores Jocotenango',
    'Universidad Maria Galvez Jocotenango',
    '2da Calle Jocotenango',
    'Colonia Las Victorias Lote f-7 Jocotenango',
    'Calle Real de Jocotenango',
    'Colegio Mixto San Vicente de Paúl Jocotenango',
    'Gasolinera Puma Jocotenango',
    'Antigua Geeks Jocotenango',
    'Antigüedades El Oso Jocotenango',
    'Librería Colibrí Jocotenango',
    'Asociación Casa Del Niño Antigua Guatemala',
    'Casa Jocotenango',
    '1a Calle a 7a Calle Colonia Los Llanos Jocotenango',
    'Centro Comercial Plaza Jocotenango',
    'Finaca La Azotea Jocotenango',
    'Mundo Natural Jocotenango',
    'Calle de La Azotea Jocotenango',
    '1a Avenida y 3ra Calle Jocotenango',
    'Santuario de San Felipe de Jesús Jocotenango',
    'Hospital Nacional Pedro Bethancourt Antigua',
    'Estadio Pensativo Antigua Guatemala',
    '2a Avenida y Calle de Chajón Antigua',
    'Calle de La Cruz Antigua',
    'Plazuela de San Sebastián Antigua',
    'Iglesia La Merced Antigua',
    'Calle de Recoletos Antigua',
    '1a Calle Poniente de 3a a 4a Avenida Norte Antigua',
    'Mercado de Artesanías El Carmen',
    'La Bodegona Antigua',
    'Rancho Nimajay',
    'Mc Donald´s Antigua',
    'Hotel Soleil La Antigua',
    'Calle de San Bartolo Becerra',
    '7a Avenida Sur Antigua',
    'Los tres Tiempos Antigua',
    'Porta Hotel Antigua',
    'Mezon Panza Verde',
    '5a Calle a 9a calle Oriente',
    'Hotel Quinta de Las Flores',
    'Calle de Chiplilapa',
    'Parque Central Antigua Guatemala',
    'Casa y Museo del Jade Antigua',
    'Condominio Villas Orotava Antigua',
    'Calle de Los Duelos Antigua',
    'Hotel Palacio de Doña Beatriz Antigua',
    'Hotel Boutique Villa Sofia Antigua',
    'Ruinas de Candelaria Antigua',
    'Cerro de La Cruz Antigua',
    '5a Calle a 7a Calle Oriente',
    '4a Avenida Sur Antigua',
    '5a Avenida Sur',
    'Girasoles de Antigua',
    'Colegio Mixto Santiago de Los Caballeros',
    'Finca Colombia La Antigua Guatemala',
    'Barrios Coloniales Antigua Guatemala',
    '3a a 5a Calle Ciudad Vieja',
    'Despensa Familiar Ciudad Vieja',
    'La Bodegona Ciudad Vieja',
    'Ciudad Vieja Centro',
    'Ciudad Vieja Ruta a Antigua',
    'Hotel Colonial Ciudad Vieja',
    'Alotenango',
    'San Cristobal El Alto',
    'Santiago Zamora',
    'Santa Catarina Barahona',
    'San Andrés Ceballos'
];
	

	
	
	
let gtgu_opciones_12 = [
	'',
    'Barrio el molino chiquimula',
    'Colonia el caminero chiquimula',
    'Colonia el banvi chiquimula',
    'Colonia ruano chiquimula',
    'Residenciales Campollano premier chiquimula',
    'Barrio shusho abajo chiquimula',
    'Villas jose chiquimula',
    'Colonia los cerezos chiquimula',
    'Residenciales prados de canaan chiquimula',
    'Condominio Cebalia chiquimula',
    'Colonia shoporin chiquimula',
    'Colonia Prados de de san andres chiquimula',
    'Residenciales villa verde chiquimula',
    'Condado la Pradera chiquimula',
    'Colonia los tanques chiquimula',
    'Residenciales el Jurgalion chiquimula',
    'Prados de chiquimula',
    'Residencial paseo real chiquimula',
    'Colonia petapilla chiquimula',
    'Colonia sasmo arriba chiquimula',
    'Barrio el teatro chiquimula',
    'Colonia de linda vista chiquimula',
    'Colonia buena ventura chiquimula',
    'Residenciales Chiquimula',
    'Colonia el Angel chiquimula',
    'Colonia las brisas de san jose chiquimula',
    'Colonia el manguito chiquimula',
    'Colonia las flores chiquimula',
    'Barrio san pedrito Chiquimula',
    'Colonia el Centro chiquimula',
    'Colonia Lemus chiquimula',
    'Barrio el Zapotillo',
    'Colonia las Lomas chiquimula',
    'Colonia las rosas Chiquimula',
    'Residenciales GYT chiquimula',
    'Colonia el Mirador chiquimula',
    'Colonia el milagro chiquimula',
    'Colonia Minerva chiquimula',
    'Colonia la esperanza Chiquimula',
    'Barrio san isidro chiquimula',
    'Jardines de concepcion chiquimula',
    'Barrio El Jurgallón chiquimula',
    'Barrio de Candelaria chiquimula',
    'Barrio el calvario Chiquimula',
    'Barrio la democracia chiquimula',
    'Lotificación Villas de Manolo chiquimula'
];

let gtgu_opciones_14 = [
    '',
    'Colonia Santa agape Huhuetenango',
    'Residencial bosqueta Huehuetenango',
    'Colonia el Valle Huehuetenango',
    'Colonia las Flores Huehuetenango',
    'Colonia Reyna Huhuetenango',
    'Colonia el prado Huehuetenango',
    'Colonia la bendición Huhuetenango',
    'Proyecto san José Huhuetenango',
    'Cambote zona 11 Huehuetenango',
    'Barrio san Miguel Huhuetenango',
    'Laguna de zaculeu Huhuetenango',
    'Colonia moscamed de las lagunas Huhuetenango',
    'Quinta Samayoa Huhuetenango',
    'Condominio del bosque Gardens Huhuetenango',
    'Condado los encinos Huhuetenango',
    'El manantial Huhuetenango',
    'La Salle diversificado Huhuetenango',
    'Condominio el Pedregal Huhuetenango',
    'Chimusinique Huhuetenango',
    'La joya Huhuetenango',
    'Residenciales villa verde Huhuetenango',
    'Condominio Santa fe Huhuetenango',
    'Colonia los castillos Huhuetenango',
    'Colonia la Hondonada Huhuetenango',
    'Colonia el bosque Huhuetenango',
    'Colonia san Sebastián Huhuetenango',
    'Colonia las luces Huhuetenango',
    'Apartamentos la floresta Huhuetenango',
    'Colonia la floresta Huhuetenango'
];
	

		
	
	
  let gtgu_opciones_13 = [''];

  // $( "<br><br><b>Nombre de la Dirección</b>" ).insertBefore( ".woocommerce-billing-fields__field-wrapper" );

  $('#billing_city').prop('type', 'hidden');
  $('#billing_state').prop('type', 'hidden');

  $('#billing_city').val('Zona 1 - Ciudad.');
  $('#billing_state').val('GT-GU');



	
	$("#billing_state_field").append('<label for="billing_city" class="">Selecciona un Departamento&nbsp;<abbr class="required" title="obligatorio">*</abbr></label><span class="woocommerce-input-wrapper"><select id="billing_state_2" name="billing_state_2" class="input-text select_ciudades" required><option value="">Selecciona un Departamento</option><option value="GT-GU">Guatemala</option><option value="GT-QZ">Quetzaltenango</option><option value="GT-CM">Chimaltenango</option><option value="GT-ES">Escuintla</option><option value="GT-JU">Jutiapa</option><option value="GT-RE">Retalhuleu</option><option value="GT-CO">Coatepeque</option><option value="GT-HU">Huehuetenango</option><option value="GT-TO">Totonicapan</option><option value="GT-SU">Suchitepéquez</option><option value="GT-JA">Jalapa</option><option value="GT-SC" disabled>Sacatepequez</option><option value="GT-CQ">Chiquimula</option></select></span>');
	
	
	
	
	
  $("#billing_city_field").append('<label for="billing_city" class="">Selecciona tu Zona&nbsp;<abbr class="required" title="obligatorio">*</abbr></label><span class="woocommerce-input-wrapper"><select id="billing_city_2" name="billing_city_2" class="input-text select_ciudades" required></select></span>');

  $("#billing_address_2_field").prepend('<label for="billing_city" class="">Ingrese su dirección completa&nbsp;<abbr class="required" title="obligatorio">*</abbr></label>');

  $("body").on('change', '#billing_state_2', function () {

    let estado_seleccionado = $(this).val();
    $('#billing_state').val(estado_seleccionado);

    if (estado_seleccionado === "GT-GU") { arreglo(gtgu_opciones_1); }
    if (estado_seleccionado === "GT-QZ") { arreglo(gtgu_opciones_2); }
    if (estado_seleccionado === "GT-CM") { arreglo(gtgu_opciones_3); }
    if (estado_seleccionado === "GT-ES") { arreglo(gtgu_opciones_4); }
    if (estado_seleccionado === "GT-JU") { arreglo(gtgu_opciones_5); }
    if (estado_seleccionado === "GT-RE") { arreglo(gtgu_opciones_6); }  
    if (estado_seleccionado === "GT-CO") { arreglo(gtgu_opciones_7); }  	  
    if (estado_seleccionado === "GT-HU") { arreglo(gtgu_opciones_14); }
    if (estado_seleccionado === "GT-TO") { arreglo(gtgu_opciones_8); }
    if (estado_seleccionado === "GT-SU") { arreglo(gtgu_opciones_9); }
    if (estado_seleccionado === "GT-JA") { arreglo(gtgu_opciones_10); }	  
    if (estado_seleccionado === "GT-SC") { arreglo(gtgu_opciones_11); }	  	
    if (estado_seleccionado === "GT-CQ") { arreglo(gtgu_opciones_12); }	 
	  
    if (estado_seleccionado === "") { arreglo(gtgu_opciones_13); }
    
    

    function arreglo(cual) {
      $('#billing_city_2').find('option').remove();
      var sel = document.getElementById('billing_city_2');
      for (var i = 0; i < cual.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = cual[i];
        opt.value = cual[i];
        sel.appendChild(opt);
      }
    }


  });

  $("body").on('change', '#billing_city_2', function () {
    $('#billing_city').val($(this).val());
    var address = $(this).val()
    jQuery('#billing_address_11').val(address);

  });

	
	
	
  /*
  'GT-GU' => 'Guatemala',
  'GT-QZ' => 'Quetzaltenango',
  //'GT-AV' => 'Alta Verapaz',
  //'GT-BV' => 'Baja Verapaz',
  'GT-CM' => 'Chimaltenango',
  */
});








jQuery('#woofood_address_checker_address').hide().after('<input onclick="showPosition();" class="get_current_location" type="button" value="Mi ubicación"><div class="map_container"><div id="map_locator" style="width: 300px; height: 200px;"></div></div><style>.woofood-address-wrapper .woofood-address-input{display: grid !important;}input#woofood_address_checker_address { width: 100%; }</style>');
jQuery('.woocommerce-checkout label[for="billing_address_1"]').before('<div class="map_container"><input onclick="showPosition();" class="get_current_location" type="button" value="Selecciona tu ubicación"><small>Debes tener activada la localización en tu dispositivo.</small><div id="map_locator1" style="width: 520px; height: 300px;"></div></div>');
jQuery('.woocommerce-checkout label[for="billing_address_1"]').next().find('input').attr('id', 'billing_address_11');


jQuery('.woocommerce-address-fields label[for="billing_address_1"]').before('<div class="map_container"><div id="map_locator1" style="width: 330px; height: 300px;"></div><input onclick="showPosition();" class="get_current_location" type="button" value="Selecciona tu ubicación"></div>');

jQuery('.woocommerce-address-fields label[for="billing_address_1"]').next().find('input').attr('id', 'billing_address_11');



function addressUpdated(addressComponents) {
  jQuery('#woofood_address_checker_address').val(addressComponents);
}
jQuery('#map_locator').locationpicker({
  radius: 0,
  location: {
    latitude: 14.628434,
    longitude: -90.522713
  },
  zoom: 10,
  enableReverseGeocode: true,
  markerInCenter: true,
  inputBinding: {
    locationNameInput: jQuery('#woofood_address_checker_address'),
  },
  onchanged: function (currentLocation, radius, isMarkerDropped) {
    var addressComponents = jQuery(this).locationpicker('map').location.formattedAddress;
    if (isMarkerDropped)
      addressUpdated(addressComponents);
  },
  oninitialized: function (component) {
    var addressComponents = jQuery(component).locationpicker('map').location.formattedAddress;
    addressUpdated(addressComponents);
  }
});


function addressUpdated1(addressComponents, isMarkerDropped = false) {



  var street = addressComponents.addressLine1;
  var city = addressComponents.district;
  var state = addressComponents.postalCode;
  var country = addressComponents.country;
  var completeAddress =
    ((street != null && street != "") ? street + " " : "") +
    ((city != null && city != "") ? city + ", ciudad de Guatemala " : ", ciudad de Guatemala ") +
    ((state != null && state != "") ? state + " " : "");
  //((country != null && country != "")?country+"":"");
  if (isMarkerDropped === true)
    jQuery('#billing_address_11').val(completeAddress);

  console.log(addressComponents);


}



var billing_address_11 = jQuery('#billing_address_11').val();
jQuery('#map_locator1').locationpicker({
  radius: 0,
  location: {
    latitude: 14.62843,
    longitude: -90.522713
  },
  zoom: 10,
  markerInCenter: true,
  inputBinding: {
    //locationNameInput: jQuery('#billing_address_11'), //commented due to edit address confliction
  },
  onchanged: function (currentLocation, radius, isMarkerDropped) {
    var addressComponents = jQuery(this).locationpicker('map').location.addressComponents;
    addressUpdated1(addressComponents, isMarkerDropped);
  },
  oninitialized: function (component) {
    var addressComponents = jQuery(component).locationpicker('map').location.addressComponents;
    addressUpdated1(addressComponents);
  }
});

jQuery(document).on('change', '#wf_availability_form_checker input[name="woofood_order_type"]', function (e) {
  if ($(this).val() == 'delivery') {
    $('#wf_availability_form_checker .map_container,.get_current_location').show();
  } else {
    $('#wf_availability_form_checker .map_container,.get_current_location').hide();
  }
});
function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      showPosition(position);
      jQuery('#map_locator,#map_locator1').locationpicker('location', {
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude)

      });


    });

    function showPosition(position) {
      var lat = position.coords.latitude;
      var lang = position.coords.longitude;
      var url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD3yyERvzeZ5PAUKHxwO46W8qeyvLkeSlc&latlng=" + lat + "," + lang + "&sensor=true";

      $.getJSON(url, function (data) {
        var address = data.results[0].formatted_address;
        //  document.getElementById("address").value = address;
        //console.log(address);
        jQuery('#billing_address_11').val(address);
      });
    }


  } else {
    alert("Sorry, your browser does not support geolocation.");
  }
}


//console.log('este '+fabfw_select_address)

jQuery(document).on('change', 'input[name="fabfw_address_billing_id"]', function (e) {
  var selectedValue = $(this).val();
  if (!$('input[name="fabfw_address_billing_id"]').length)
    return;

  if (selectedValue != 'new') {
    if(typeof fabfw_select_address !== "undefined"){
    var selectedAdress = fabfw_select_address.addresses[selectedValue].address_1;
    jQuery('#billing_address_11').val(selectedAdress);
    } else {
      jQuery('#billing_address_11').val('');
    }
  } else {
    showPosition();
  }
});
jQuery(window).load(function () {
  var selectedValue = $('input[name="fabfw_address_billing_id"]:checked').val();

  if (!$('input[name="fabfw_address_billing_id"]').length)
    return;

  if (selectedValue != 'new') {
    if(typeof fabfw_select_address !== "undefined"){
    var selectedAdress = fabfw_select_address.addresses[selectedValue].address_1;
    jQuery('#billing_address_11').val(selectedAdress);
  } else {
    jQuery('#billing_address_11').val('');
  }
  } else {
    showPosition();
  }
});