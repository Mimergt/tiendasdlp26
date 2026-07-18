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
  // Calle Marti
  'Condominio Valle del zapote zona 2 capital',
  'Condominio Monte limar zona 2 capital',
  'Condominio Encinos del zapote zona 2 capital',
  'Finca el zapote zona 2 capital',
  'Vertical el Zapote zona 2 capital',
  'Residenciales el Karal zona 2 capital',
  'Condominio Villas del zapote zona 2 de capital',
  'Condominio Jardines del zapote zona 2 capital',
  'Jardines santa delfina zona 2 capital',
  'Cerveceria Centroamericana zona 2 capital',
  'Avenida simeon cañas zona 2 capital',
  'Apartamentos 8-80 zona 2 capital',
  'Avenida indepencia zona 2 capital',
  'Apartamentos santa clara zona 2 capital',
  'Condominio villa marti zona 2 capital',
  'Residenciales ciudad nueva 1 zona 2 capital',
  'Colonia las 3 ceibas zona 2 capital',
  'Villa verona zona 2 capital',
  'Residenciales Maria ines zona 2 capital',
  'Calle clutural Barrio moderno zona 2 capital',
  'Residenciales Maria alejandra zona 2 capital',
  'Hermanos cooper zona 2 capital',
  'Condominio la floresta zona 2 capital',
  'Condominio Alamedas de san Gabriel zona 2 capital',
  'Residenciales san angel 2 y 3 zona 2 capital',
  'San angel 2 y 3 zona 2 capital',
  'Villas arcangel zona 2 capital',
  'Residenciales san angel 4 zona 2 capital',
  'Villas de san angel zona 2 capital',
  'Reserva san angel zona 2 capital',
  'Parque san angel zona 2 capital',
  'Peñon de san angel zona 2 capital',
  'Ciudad nueva zona 2 capital',
  'Colonia lo de bran zona 3 capital',
  'Avenida elena',
  'Zona 3 capital a hasta la 23 calle',
  'Colonia las victorias zona 1 capital',
  'Matamoros zona 1',
  'Distribuidora el caribe zona 1 capital',
  'Mercado colon zona 1 capital',
  'Gerona zona 1 capital',
  'Hasta la 24 calle de la zona 1 capital',
  'Colonia 10 de mayo zona 1 capital',
  'Avenida Centro america zona 1 capital ',
  'Centro comercial zona 4 capital',
  'Intecap zona 4 capital',
  'Terminal zona 4',
  'Colonia proyectos 4-3 zona 6 capital',
  'Colonia proyectos 4-4 zona 6 capital',
  'Colonia bienestar social zona 6 capital',
  'Villa de los niños zona 6 capital',
  'cipresales zona 6 capital',
  'Residencial cipresales zona 6 capital',
  'Barrio san antonio hasta las 12 calle',
  'Torre marti zona 6 capital',
  'Colonia Martinico 1 y 2 zona 6 capital',
  'Colonia melgar diaz zona 6 capital',
  'Condominio parroquia zona 6 capital',
  'Colonia los angeles zona 6 capital',
  'Finca san rafael zona 6 capital',
  'Colonia el Molino zona 6 capital',
  'Santa isabel 1 y 2 zona 6 capital',
  'Estadio cementos progreso zona 6 capital',
  'Barrio el gallito zona 3 capital',
  'Santa faz zona 6 capital',
  'San julian zona 6 capital',
  'Santa marta zona 6 capital',
  'Santa Luisa zona 6 capital',
  'El sausalito zona 6 capital',
  'La joya de senahu zona 6 capital',
  'Avenida totonicapan zona 6 capital',
  'Avenida alta verapaz zona 6 capital ',
  'La reinita zona 6 capital',
  'Colonia san juan de dios zona 6 capital',
  'La joyita zona 6 capital',
  'El gallito zona 3 capital',
  'Avenida bolivar zona 3 capital',
  'Colonia el inciencio zona 3 capital',
  // Metronorte 2243
  'condominio villa norte zona 18',
  'Residenciales Caracoles Zona 18 ',
  'Ruta al atlatico hasta centra norte ',
  'Residenciales Atlantico , zona 18',
  'Colonia Santa Clara Zona 18 ',
  'Residenciales Casa Grande Zona 18',
  'Residenciales El Manantial Zona 18 ',
  'Colonia Santa Cristina Torre Atlántica Zona 18',
  'Condominio El Refugio I y II de San Rafael Zona 18',
  'Villas de San Rafael Zona 18',
  'Colonia Galilea Zona 18',
  'Residenciales Atlantida Zona 18',
  'Colonia Militar Atlantida Zona 18',
  'Condominio Brisas del Norte Zona 18',
  'Condominio El Manantial Zona 18',
  'Colonia Genoveva 3 Zona 18',
  'Residenciales Altos de la Atlántida ',
  'Colonia Los Pinos Zona 18 ',
  'Residenciales Los Olivos Zona 18 ',
  'Colonia Villas de San Rafael Zona 18 ',
  'Colonia La Atlantida Zona 18 ',
  'Colonia Maya Zona 18 ',
  'Residencial San Rafael Buena Vista Zona 18 ',
  'Barrio Colombia Zona 18 ',
  'Colonia La Kennedy Zona 18 ',
  'Colonia Santa Elena I y II Zona 18 ',
  'Colonia El Rosario Zona 18',
  'Juana de Arco Zona 18',
  'San Rafael I y II Zona 18 ',
  'Condominio Casa Florentina Zona 18 ',
  'Fuentes del Valle Norte 1 Y 2 Zona 18',
  'RESIDENCIAL SAN ANTONIO, ZONA 18',
  'Residenciales Portal del Valle Zona 18',
  'Residenciales El Prado Zona 18',
  'Altos de Casa Grande Zona 18 ',
  'Residenciales Valle de Jesús Zona 18',
  'Residenciales Valle del Norte Zona 18',
  'Jardines del Norte Zona 18 ',
  'Vistas del Prado Zona 18',
  'Colonia Pinares del Norte Zona 18 ',
  'Llano Largo Zona 18',
  'Torres las tapias (apartamentos)',
  'Calle Real las Tapias, Granja Julia, Zona 18',
  'COLONIA SAN RAMON, ZONA 18',
  'La Estancia Feliz , Zona 18',
  'Valle de Jesus I, Zona 18',
  'Colonia El Paraiso I y II Zona 18  ',
  'Colonia La Alameda I, II, III y VI Zona 18 ',
  'Colonia La Esperanza Zona 18 ',
  'Colonia San Rafael La Laguna ',
  'San Pascual 2 Zona 18',
  'Colonia Las Tapias Zona 18 ',
  'Colonia el Limón Zona 18 ',
  'Colonia Las Ilusiones Zona 18 ',
  'San Pedro Ayampuc Zona 18',
  'Colonia San Judas Tadeo Zona 18 ',
  'Colonia Holanda Zona 18 ',
  'Colonia El Renacimiento Zona 18 ',
  'Colonia la Barreda',
  'Lomas de la Barreda Zona 18',
  'residenciales las perlas zona 18',
  'Colonia Lomas del Norte Zona 17',
  'COLONIA MEYER, ZONA 17',
  'Colonia Covitigss Zona 17 ',
  'Centro Comercial Portales Zona 17 ',
  'Brigada Militar Mariscal Zabala Zona 17 ',
  'Condominio Villa Atlantis Zona 17 ',
  'Casa Florentina Premier Zona 17',
  'Residenciales del Norte Zona 17',
  'Colonia Maestros Zona 17',
  '0 AV  ZONA 5 CALZADA LA PAZ (CENTRO DE NEGOCIOS)',
  'Colonia San Fernando Zona 17 ',
  'Colonia el Mirador Zona 17 ',
  'Colonia San Antonio Zona 17',
  'La Kerns Zona 17',
  'Colonia Hermano Pedro Zona 17 ',
  'Colonia Casatenango Zona 17 ',
  'Colonia Los Pinos del Carmen Zona 17',
  'Zona 25 ',
  'Colonia el Carmen Zona 17 ',
  'Colonia Los Tinos Zona 17 ',
  'Colonia La Hondonada Zona 17 ',
  'Camino al Buen Pastor Zona 17 ',
  'Canalitos Zona 24 ',
  // Condado C 3066
  'Residenciales montebello 2',
  'Condominio Cumbres de la Arboleda ',
  'Residenciales vistas del valle',
  'Camara Guatemalteca de la construccion',
  'Carretera al salvador km 9.6 al 25.5',
  'Residenciales Santa rosalia',
  'Las luces',
  'Condominio lomas de puerta parada',
  'Residenciales puerta grande',
  'La española de muxbal',
  'La luz',
  'Colonia las flores',
  'Bosques las luces',
  'Colonia Puerta parada',
  'Altos de Muxbal',
  'Condominio Los Encinos',
  'Residenciales los Diamantes',
  'Residenciales San antonio',
  'Lotificacion Lomas de san rafael',
  'Condominio real de providencia',
  'Condominio Los manantiales',
  'Lotificacion lo de Valdez',
  'Zona 1, 2, y 3 de San José Pinula',
  'Hacienda san anagel san jose pinula',
  'Condominios Geranios 2',
  'Altos de San Nicolas 1,2 y 3',
  'Condado almeria',
  'Carretera a Olmeca y Pavon',
  'Los Manzanos carretera a olmeca',
  'Terravista Coventry',
  'Residenciales san jose pinula',
  'Carretera a pavon',
  'Arrazola panorama',
  'Jardines de Arrazola',
  'Bosques de Arrazola',
  'Alika club residenciales',
  'Condominio cañadas de Arrazola',
  'Arrazola Country Club',
  'Condado Filadelfia',
  'Verdea de Arrazola',
  'Villas picaso',
  'Sausalito casa club',
  'Lazos de Fraijanes',
  'La rioja',
  'Condominio colinas de castel',
  'Universidad del Itsmo',
  'La foresta',
  'Condominio la foresta carr a fraijanes ',
  'Prados de Fraijanes',
  'Villas entreverdes',
  'Condominio bosque escondido',
  'Condominio Villas de entreverde',
  'Condominio Villa italia 2',
  'Carretera a fraijanes',
  'Decocity',
  'Fraijanes (Pueblo) zona 1, 2 y 3',
  'Residenciales la Fontana',
  'Residenciales la Fontana 3',
  'Condominio casa y campo',
  'Villas campestres 1 y 2',
  'Residencial portal del bosque',
  'Premier campestre',
  'Residenciales Vilao',
  'Casa de dios',
  'Bosques del eden',
  'Residenciales santa clara',
  'Villas del bosque',
  'Entre bosques',
  'Residenciales Santa clara',
  'Residenciales san antonio',
  'La encantada',
  'Callejon el Faro',
  'Villas de Monte cristo',
  'Colonia santa sofia',
  'Carretera al salvador',
  'Condominio la reserva ',
  'Villas de san jose',
  '4 Caminos Cienega Grande',
  'Laguna Bermeja',
  'El pajon',
  'Residenciales santa anita 1 Y 2',
  'Monte cristo y Puerta negra ',
  'Todo lo que esta despues del estadio de SJP',
  'Sector el pinito',
  'Cumbres de san nicolas',
  'Valle de navarra',
  'Aldea las anonas',
  'Hacienda Coutry club San jose pinula',
  'Puerta negra san luis',
  'Villas del renacer 1, 2 y 3',
  'Villas montesino 1, 2 y 3',
  'Santa elena barillas',
  'Sendero de monte cristo',
  'Aldea el platanar',
  'Las mercedes 1y 2 san jose pinula',
  'Cristo rey piedra parada',
  'Foret de arrazola',
  'Condominio la Florenza',
  'Villa el renacer 2',
  'Villa montecinos 1 y 2',
  'Carretera a lo de dieguez',
  'Colonia pavon',
  'Lotificacion santo domingo',
  'Santa catarina pinula zona 1 y 2',
  'Resideniciales villas de catarina',
  'km 8 carr a muxbal',
  'Condominio villas del prado',
  'Cupertino muxbal',
  'Condominio pergolas del prado',
  'Condominio san rafael 2',
  'Edificio jardin de san rafael',
  'Finca la plata muxbal',
  'Muxbalia',
  'Condominio arama de san miguel',
  'Antaria bellas luces',
  'Residenciales san miguel buena vista ',
  'Condominio bellas luces',
  'Lomas del carmen',
  'Zona 10 de santa catarina pinula ',
  'Apartamentos buenos aires',
  'Villas granada',
  'cañadas del carmen',
  'Cuchilla del carmen',
  'Piedra parada',
  'Cerro gordo',
  // El Frutal 2248
  'Ciudad real 1 y 2',
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
  'Jardines de Villa nueva ',
  'Colonia luisa alejandra 1 san miguel petapa ',
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
  'villa hermosa 1 y 2',
  'prados de villa hermosa',
  'Alamedas de san miguel',
  'colonia santa ines',
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
  'Jardines de la virgen',
  'Valles de sonora 1,2,3 y 4',
  'Residenciales doña leonor',
  'santorini',
  'colonia el cortijo',
  'Guatel',
  'Condominio el prado',
  'Inde y guatel 2',
  'Residenciales altamira',
  'Altos de sonora',
  'Jardines de la manSion 1 y 2',
  'Torres de villa hermosa',
  'Villa nueva zona 1, 4 y 5',
  'Colinas de monte maria',
  'Villa de andalucia',
  'San jose villa nueva',
  'Lomas del sur',
  'Residenciales terranova',
  'Los celajes',
  'Jardines de san jose',
  'Planes de barcenas',
  'Colonia los olivos',
  'Condominio valle verde',
  'Enca',
  'Altos de barcenas 1,2 y 3',
  'Condominio los tanques',
  'Condominio bosques de san jose',
  'Condominio valle verde',
  'Valle de maria',
  'Hacienda de las flores',
  'Residenciales villa lobos',
  'Valles de doña leonor',
  'Residenciales valles de sevilla',
  'Residenciales el placer',
  'Residenciales guadalupe 1 al 5',
  'Residenciales catalina',
  'Residenciales prado alto',
  'Residenciales terrazas de san jose',
  'Residenciales condominio fuente 1 y 2',
  'Residenciales valle buena ventura',
  'Residenciales villa ofelia',
  'Colonia santa monica',
  'Colonia jacaranda 2',
  'Alto de veronia',
  'Colonia monte carlo',
  'Santa isabel 2 villa nueva ',
  'Cañadas del rio 1,2 y 3',
  'Colonia naranjito zona 6 de villa nueva',
  'El sarzal zona 4 de villa nueva',
  'Colonia bairi zona 4 de villa nueva',
  'Cenma',
  'Colonia las margaritas',
  'El mezquital',
  'Rivera del rio ',
  'Colonia el bucaro ',
  'Colonia la esperanza ',
  'Colonia ulises rojas ',
  'Mayan Golf ',
  'Nimajuyu Zona 21',
  'Nimajuyu II Zona 21',
  'Residencial Valle de San Alfonzo',
  'Las Castañas',
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
  'Colonia valle del sol zona 4 de mixco'
 
  ];

  let gtgu_opciones_2 = [''];

  let gtgu_opciones_3 = [''];

  let gtgu_opciones_4 = [''];

  let gtgu_opciones_5 = [''];
  
   let gtgu_opciones_6 = [''];
   let gtgu_opciones_7 = [''];
	

  let gtgu_opciones_8 = [
    '',
    // Cuatro Caminos 103619 (Totonicapan)
    'Nueva colonia salcaja',
    'Condominio terraverde salcaja',
    'Villas de san luis salcaja',
    'Cementerio municipal de salcaja',
    'Residenciales villas de san andres',
    'Colonia el cangrejo de oro salcaja',
    'Lotificacion maria fernanda salcaja',
    'Colonia casa blanca salcaja',
    'Colonia la paz salcaja',
    'Colonia bella vista salcaja',
    'Barrio el carmen salcaja',
    'Colonia el esfuerzo salcaja',
    'Barrio la cienega totonicapan',
    'San cristobal totonicapan',
    'Barrio la independencia totonicapan',
    'La democracia totonicapan',
    'La moreira san cristobal',
    'Barrio el calvario zona 4 totonicapan',
    'Llega hasta parque san miguel toto',
    'Colonia angelita totonicapan',
    'Centro de totonicapan zona 1 hasta la 5',
    'Hospital nacional jose felipe hores toto',
    'Bomberos voluntarios totonicapan',
    'Universidad mariano galvez totonicapan',
    'INACOP totonicapan',
    'Colonia la bendicion totonicapan',
    'Poxlajuj totonicapan',
    'Tres coronas totonicapan',
    'Xantun totonicapan',
    'Barrio san sebastian',
    'Calle pahula',
    'Barrio las claras',
    'Barrio los chorros',
    'Puente la marimba',
    'Cuatro caminos',
    'Rastro',
    'Xesuc',
    'Pacanac',
    'San francisco el alto',
    'San adres xecul',
    'Xetacabaj',
    'Curruchiche',
    'Xecanchavox totonicapan',
    'Patachaj',
    'Patzizil',
    'Cacerio la libertad',
    'San jose chiquilaja'
  ];
	
	
 let gtgu_opciones_9 = [
    '',
   // Cocales 105305
    'Centro de Patulul',
    'Entrada Oxipec',
    'San Juan Bautista',	 
    'La Pepsi',	 	 
    'Entrada Chipo',	
  'Nueva esperanza',		 
  'Buena Vista',		 	 
    'Vista Hermosa',		 	 
  'El Mantial',		 	 	 
  'Los Sauces',		 	 	 	 
  'Oxipec Dentro',		 	 	 	 	 
    'Las Marias',		 	 	 	 	 	 
    'Chipo',		 	 	 	 	 	 
  'San Carlos',		 	 	 	 	 	 

    // Mazatenango 156344
    'Aceituno',
    'Bilbao',
    'Castillo Obregón',
    'Ciudad Nueva',
    'El Cafetalito',
    'El Compromiso',
    'El Obregón',
    'El Relicario',
    'Ferrocarrilera',
    'Flor del Café',
    'Los Almendros',
    'Los Jengibres',
    'Monte Cristo',
    'Pueblo Nuevo',
    'Rayos del Sol',
    'San Andrés',
    'San Benito',
    'Santa Marta',
    'Valles del Norte',
    'Villa Linda',
    'Candelaria',
    'El Milagro',
    'Brasilia',
    'Florencia',
    'Nuevo León',
    'Las Flores',
    'El Carmen',
    'La Democracia',
    'San Antonio',
    'San José',
    'San Francisco',
    'San Miguel',
    'Zona 1',
    'Zona 2',
    'Zona 3',
    'Zona 4',
    'Zona 5',
    'Zona 6',
    'Zona 7',
    'El Triunfo',
    'El Paraíso',
    'Vista Hermosa',
    'San Carlos',
    'La Bendición',
    'La Providencia',
    'El Recreo',
    'Santa Elisa',
    'San Lorenzo',
    'San Felipe',
    'Las Palmas',
    'El Rosario',
    'La Pradera',
    'Bosques del Sur',
    'El Progreso',
    'Nueva Esperanza',
    'Universidad Regional de Guatemala',
    'Universidad Mariano Gálvez',
    'Universidad Da Vinci de Guatemala',
    'INTECAP Suchitepéquez',
    'Hotel Costa Verde',
    'Hotel Alba',
    'Bambú Resort',
    'Hotel Villa Isabel',
    'Hotel Roma',
    'Auto Hotel Frome',
    'Colegio Centroamericano',
    'Colegio Froebel',
    'Centro de Estudios Integrales',
    'Colegio Científico',
    'Colegio Hebrón',
  
  ];

	
	
  let gtgu_opciones_10 = [
    '',
    // Jalapa 117799
    'Pepsi jalapa',
    'Bodega municipal jalapa',
    'Venta de gas la ruta jalapa',
    'Grupo serpral jalapa',
    'Barrio el terrero jalapa',
    'Lotificacion emanuel 1,2 y 3',
    'Villas de san antonio jalapa',
    'Lote los laureles jalapa',
    'Colonia los laureles jalapa',
    'Colonia las marias jalapa',
    'Colonia los encionos jalapa',
    'Colonia barrientos zona 1 jalapa',
    'Colonia linda vista zona 1 de jalapa',
    'Panoramicas de jumay jalapa',
    'Barrio san francisco jalapa',
    'Lotificacion las brisas de jumay jalapa',
    'Barrio chipilapa jalapa',
    'La democracia jalapa',
    'Colonia sansayo jalapa',
    'Colonia el lazareto',
    'Residenciales alcazar',
    'Colonia quebrada honda',
    'Colonia la cañada',
    'Barrio la esperanza',
    'Colonia panoramicas de jumay',
    'Barrio el porvenir',
    'Colonia bosques de viena',
    'Colonia calzada jose arturo ruano mejia',
    'Colonia calzada juan jose bonilla',
    'Los achiotes',
    'Caserio la quebrada honda',
    'Colonia la aurora',
    'Colonia los mangos',
    'Cerro alcoba',
    'Barrio la democracia',
    'Colonia lazareto',
    'Aldea san jose',
    'Colonia valle bello',
    'Colonia llano grande',
    'Colonia las margaritas',
    'Calzada justo rufino barrios',
    'Colonia las victorias',
    'Residenciales mayorca',
    'El chaguite',
    'La casona',
    'Los pinos',
    'El arenal',
    'La colina',
    'Colonia chinchilla',
    'Colonia la gracia',
    'La shule',
    'Terrero emanuel 4,5 y 6'
  ];
	
let gtgu_opciones_11 = [
    '',
    'Condominio Bella Vista Jocotenango',
    'Calle San Isidro Final Jocotenango',
  'Colonia el carmen ',
    'Guatetubo Jocotenango',
    'Jardín La Esperanza Jocotenango',
    'Sistegua Jocotenango',
    'Residenciales Las Rosas Jocotenango',
  'San cristobal el bajo ',
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
    'Estadio Pensativo Atigua Guatemala',
    '2a Avenida y Calle de Chajón Antigua',
    'Calle de La Cruz Antigua',
    'Plazuela de San Sebastián Antigua',
    'Iglesia La Merced Antigua',
    'Call de Recoletos Antigua',
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
    'Casa y Mueseo del Jade Antigua',
    'Condominio Villas Orotava Antigua',
    'Call de Los Duelos Antigua',
    'Hotel Palacio de Doña Beatriz Antigua',
    'Hotel Boutique Villa Sofia Antigua',
    'Ruinas de Candelaria Antigua',
    'Cerro de La Cruz Antigua',
    '5a Calle a 7a Calle Oriente',
    '4a Avenida Sur Antigua',
    '5a Avenida Sur',
    'Girasoles de Antigua',
    'Colegio Mixto Santiago de Los Caballeros',
    'Calle san luquitas ',
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
  // Huehuetenango 144324
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
  'Colonia la floresta Huhuetenango',
  'San vicente huehuetenango',
  'Villas el encanto Huehuetenango '
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