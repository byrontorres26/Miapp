
Semana 3 — Investigación
A1. Flexbox
1. ¿Cuál es el valor por defecto de flexDirection en React Native? ¿En qué se diferencia del valor por defecto en CSS para la web?
En React Native, el valor por defecto de flexDirection es column, por lo que los elementos se organizan verticalmente, uno debajo del otro. En CSS para la web, el valor por defecto de flex-direction dentro de un contenedor flex es row, así que los elementos se organizan horizontalmente, uno al lado del otro.

2. Explica la diferencia entre justifyContent y alignItems. ¿Sobre qué eje actúa cada uno cuando flexDirection es 'column'? ¿Y cuando es 'row'?
justifyContent distribuye los elementos a lo largo del eje principal, mientras que alignItems los alinea en el eje secundario (perpendicular al principal).

    Con flexDirection: 'column', el eje principal es vertical: justifyContent actúa verticalmente y alignItems horizontalmente.
    Con flexDirection: 'row', el eje principal es horizontal: justifyContent actúa horizontalmente y alignItems verticalmente.

3. Menciona al menos cuatro valores posibles de justifyContent y describe en una línea qué hace cada uno.
    flex-start: coloca los elementos al inicio del eje principal.
    center: agrupa los elementos en el centro del eje principal.
    flex-end: coloca los elementos al final del eje principal.
    space-between: distribuye los elementos dejando el espacio libre entre ellos, sin espacio en los extremos.
    space-around: distribuye espacio alrededor de cada elemento; los extremos reciben aproximadamente la mitad del espacio que hay entre elementos.
    space-evenly: distribuye el espacio de manera uniforme entre los elementos y también en los extremos.

4. ¿Qué significa flex: 1 en un componente? Si dos View hermanos tienen flex: 1 y flex: 2, ¿cómo se reparten el espacio disponible?
flex: 1 hace que el componente crezca para ocupar una parte del espacio disponible dentro de su contenedor, según las reglas de Flexbox. Si dos View hermanos tienen flex: 1 y flex: 2, se reparten el espacio disponible en proporción 1:2: el primero recibe aproximadamente un tercio y el segundo dos tercios, siempre que no haya otras restricciones de tamaño o estilos que alteren el resultado.

A2. Estilos de View
5. Explica la diferencia entre padding y margin. ¿Qué hacen paddingHorizontal y marginVertical?
padding es el espacio interno entre el contenido de un componente y sus bordes. margin es el espacio externo que separa el componente de los elementos que lo rodean. paddingHorizontal aplica espacio interno a la izquierda y a la derecha; marginVertical aplica espacio externo arriba y abajo.

6. ¿Qué propiedades se usan para dibujar un borde y redondear las esquinas de un View? Indica el nombre de al menos tres.
    borderWidth
    borderColor
    borderRadius

A3. Estilos de Text

7. Describe para qué sirven fontSize, fontWeight, color, textAlign, lineHeight y letterSpacing. ¿Qué tipo de valor recibe fontWeight (número o texto)?
    fontSize: establece el tamaño de la letra.
    fontWeight: controla el grosor de la letra, por ejemplo normal o negrita. Acepta valores de texto como 'normal', 'bold' y valores numéricos representados como texto, por ejemplo '400', '600' o '700'.
    color: define el color del texto.
    textAlign: alinea el texto, por ejemplo a la izquierda, al centro o a la derecha.
    lineHeight: establece la altura de línea y la separación vertical entre líneas.
    letterSpacing: ajusta el espacio entre caracteres.

8. ¿Qué hacen textTransform y textDecorationLine? Da un ejemplo de valor para cada una.
textTransform cambia la presentación de las letras sin modificar el texto original; por ejemplo, 'uppercase' muestra el texto en mayúsculas. textDecorationLine agrega una decoración al texto; por ejemplo, 'underline' lo subraya. También existen valores como 'line-through' para tacharlo.

9. Un Text dentro de otro Text hereda estilos, pero un Text dentro de un View no hereda el color ni el fontSize del View. Explica por qué según la documentación.
React Native permite que los componentes Text anidados hereden los estilos de texto del Text que los contiene. En cambio, View es un contenedor de diseño y no transmite automáticamente sus propiedades de estilo a sus hijos. Por eso, establecer color o fontSize en un View no aplica esos estilos al Text interno: deben definirse directamente en el Text o en un Text que lo contenga

A4. StyleSheet

10. ¿Qué ventajas tiene usar StyleSheet.create en lugar de escribir objetos de estilo directamente dentro del JSX?
StyleSheet.create permite separar los estilos de la estructura del componente, mejorar la organización y la legibilidad del código, reutilizar estilos y mantenerlos en un solo lugar. Además, ayuda a detectar algunos errores de nombres de propiedades durante el desarrollo y facilita modificar el diseño sin llenar el JSX de objetos de estilo.

11. Observa este fragmento: style={[estilos.tarjeta, estilos.tarjetaDestacada]}. ¿Qué ocurre si ambos estilos definen backgroundColor? ¿Cuál gana y por qué?
Cuando se combinan estilos en un arreglo, React Native los aplica en orden. Si ambos definen backgroundColor, gana el valor del último estilo que lo establece; en este caso, gana estilos.tarjetaDestacada, porque aparece después de estilos.tarjeta.