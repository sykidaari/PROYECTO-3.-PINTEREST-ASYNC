# PROYECTO: PINTEREST ASYNC

Hola! Gracias por corregir mi proyecto. Dejo aquí algunas aclaraciones sobre el mismo que creo que ayudan su comprensión.

## ORGANIZACIÓN DE LOS FICHEROS

· La carpeta src/assets contiene todos los "elementos propios" de la página. Esto incluye:

- Fuente
- Imágenes (las que no provienen de la API, los íconos)
- Las savedValues de SCSS, las variables de la página
- Los elementos del DOM (los que no provienen de la API)

· El resto de JS y SCSS se encuentran en src/scripts y src/styles respectivamente.

· Decidí optar por esta estructura, para que sea fácil cambiar cualquier elemento propio de la página, ya que están todos separatos en src/assets, y tienen una organización simple y cómodamente modificable y legible. Incluso alguien que no sepa programar podría cambiar rápidamente colores, textos, íconos, etc. en la página.

Vi más tarde la clase de componentes y veo que esta realmente no es una forma muy óptima de organizar los archivos, pero creo que igualmente funciona en este proyecto ya que no se va a escalar más.

## FUNCIÓN: createAndAppendChild

Creé esta función para agilizar el proceso de crear y pintar elementos en el DOM, ya que es una tarea que se repite constantemente en mi flujo de trabajo.
En esencia, la función sustituye las siguientes líneas:
const newElement=document.createElement(newTag)
parent.appenChild(newElement)

La función acepta dos parámetros:

1. parent: puede ser un elemento de DOM o un string.
2. newTag: la nueva etiqueta que se creará y pintará.

- parent será el elemento padre dentro de cual se insertará el newtag.

La función recupera el parent (separando los casos (elemento DOM/string) con "if ...else") e inserta (appenChild) el newtag en parent. Además retorna el newtag para que este pueda ser usado más adelante en el programa.

Agradezco si me pudieran dar algún feedback para un futuro, para saber si es una buena práctica.

### Explicación original ENG

Escribí la explicación de la función originalmente en inglés (para tenerla yo misma en un futuro), creo que se entiende un poco mejor, la dejo aquí por si acaso.

This function's purpose is to quickly create and appendChild an element(tag) to DOM. It accepts two parameters:

1. parent: can be either a DOM-element or a string.
2. newTag: the new tag to be created and appended.

The functions retrieves the parent (separating cases with 'if ...else'), and appends (appenChild) the newTag in it. It also returns the newTag as newElement so it can be used further on in the program.

The function essentially substitutes the following:
const newElement=document.createElement(newTag)
parent.appenChild(newElement)

## MASONRY LAYOUT

Tuve bastantes dificultades a la hora de crear el layout "Masonry" de Pinterest (no me quejo, me vino genial para aprender). Probé con varias soluciones distintas:

- grid-template-rows: masonry en SCSS

  · Problema: masonry es una propiedad experimental disponible en pocos navegadores, excluyendo a Chrome entre otros.

  · Posible solución: ninguna, opción descartada.

- Columns en SCSS:

  · Problema: los márgenes/gaps entre los <articles> (que son cada uno de los "posts") cambiaban según el tamaño de la pantalla.

  · Posible solución: muchas media queries para fijar el tamaño de #gallery (el contenedor de los posts).

- Display Grid en SCSS + JS

  · Problema: al ser las imágenes recogidas de la API, su altura (height) es desconocida inicialmente (y debe serlo, ya que en un Masonry el ancho(width) siempre es uno mismo y la altura es lo que varía) y por lo tanto la altura de los posts también. Así no se pueden establecer correctamente las grid-rows para crear un masonry.

  · Posible solución: calcular en JS la altura de cada imagen y post, y crear una variable de SCSS en la que se guarde dicha altura y configurar el grid en base a ello.

  - Estuve trabajando con esta alternativa, pero tuve problemas con el orden de ejecución las distintas funciones en JS yn en general con la configuración del grid.

  ### Solución final: importaciones masonry-layout

  Investigué mucho sobre distintas formas de hacer un masonry, y descubrí que es algo con lo que hay mucha problemática en general. Al final opté por usar la biblioteca de grid masonry.js.
  Instalé la biblioteca (npm install masonry-layout), y posteriormente importé y usé la función createMasonry en createMasonry.js.

También instalé la biblioteca imagesLoaded (npm install imagesLoaded) para importar y usar la funcion imagesLoaded dentro de createMasonry.

Tuve que investigar bastante para lograr que el masonry funcionara correctamente en todos los tamaños de pantalla, pero según lo que he revisado, debería estar correcto.

! El masonry no funciona correctamente en todos los navegadores al usar "npm run dev" con Vite. En Chrome funciona bien, pero en otros navegadores requiere el build.

#### FUNCIÓN: createMasonry

La función acepta dos parámetros:

1. gridBox: elemento padre/contenedor de DOM, el "grid"
2. griItem: elemento hijo de DOM, el objeto grid/masonry. Hay múltiples gridItems.

En SCSS, tanto gridBox como GridItem deben tener el ancho(width) determinado. GridBox debe tener la propiedad "margin: 0 auto".

##### Explicación original ENG

This function creates a masonry layout using the masonry.js library. To run this function, you need to have Node.js. Then you need to do the two following installations:

- npm install masonry-layout
- npm install imagesloaded

Run the function with the imports.

The functions accepts two parameters:

- gridBox: Parent DOM container element, the "grid"
- gridItem: Child DOM element, the grid/masonry item. There are multiple gridItems.

In CSS; both gridBox and gridItem need to have width set. GridBox must have margin:0 auto set.
