# Encapsulamiento y genéricos

El encapsulamiento y los genericos son dos conceptos fundamentales en la programación orientada a objetos.

## Encapsulamiento

El encapsulamiento es la capacidad de ocultar la implementación de un objeto y exponer solo la interfaz que se puede interactuar con él. En TypeScript, esto se logra mediante la utilización de propiedades privadas y métodos públicos.

Las propiedades privadas se declaran con el modificador private, lo que significa que solo pueden ser accedidas dentro de la clase que las define.
Las propiedades públicas se declaran con el modificador public, lo que significa que pueden ser accedidas desde cualquier parte del código.

## Genericos

Los genericos son un mecanismo que permite crear funciones y tipos que pueden trabajar con diferentes tipos de datos. En TypeScript, los genericos se declaran utilizando el modificador <T> seguido del tipo de dato.

Los genericos se utilizan para crear funciones que pueden trabajar con diferentes tipos de datos, como string, number, array, etc.
Los genericos se pueden utilizar para crear tipos de datos que pueden ser utilizados en diferentes contextos, como Array<T> o Map<K, V>.