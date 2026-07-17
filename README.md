# tiendasdlp26

Baseline inicial para versionar la logica de asignacion de tiendas y las opciones visibles al cliente en WooCommerce.

## Archivos versionados

- `dlp-26-functions.php`: asignacion automatica de tienda por ubicacion y metadatos del pedido.
- `custom_script.js`: opciones de departamento/zona mostradas al cliente en checkout.

## Regla de trabajo

Los cambios de ubicaciones deben sincronizarse en ambos archivos dentro del mismo commit para evitar desalineaciones entre lo que ve el cliente y la tienda que se asigna automaticamente.

## Estado inicial

- Se agruparon las ubicaciones de `Majadas` en ambos archivos.
- Este repositorio excluye artefactos zip y repos anidados que viven en esta misma carpeta.

## Siguiente actualizacion importante

- Incorporar el nuevo listado de ubicaciones.
- Mantener agrupadas las ubicaciones por tienda en `dlp-26-functions.php`.
- Reflejar el mismo orden operativo en `custom_script.js`.
