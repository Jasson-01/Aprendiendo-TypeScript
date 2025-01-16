# Interfaces

En TypeScript, las interfaces son una forma de definir la estructura de un objeto. Se utilizan para especificar los tipos de propiedades, métodos y eventos que un objeto debe tener.

Una interfaz se define utilizando la palabra clave interface seguida del nombre de la interfaz.
`
interface Persona {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    ciudad: string;
  }
}
`
Las interfaces se pueden utilizar para:

-Definir la estructura de un objeto
-Especificar los tipos de propiedades y métodos
-Implementar interfaces para clases
-Utilizar interfaces en funciones y parámetros de función