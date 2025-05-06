# Semana 5, dia 1: Ejercicio Integral de Funciones JS

Este archivo contiene un ejercicio de JavaScript diseñado para practicar varios conceptos avanzados de funciones, ideal para la Semana 5 de estudio.

## Enunciado del Ejercicio

Crea una función llamada `generarReporteCalificaciones` que procese las calificaciones de un estudiante y genere un reporte en formato string.

**Requisitos de la Función:**

1.  **Nombre:** `generarReporteCalificaciones`
2.  **Parámetros:**
    * `nombreEstudiante` (string): El nombre del estudiante.
    * `notaMinimaAprobado` (number, opcional): La nota mínima para aprobar. **Valor por defecto: 71**.
    * `...calificaciones` (numbers): Una secuencia de números representando las calificaciones del estudiante (usa **parámetros rest**). Debe recibir al menos una calificación.
3.  **Funcionalidad Interna:**
    * Si no se proporcionan calificaciones, debe devolver un mensaje indicando que se necesitan calificaciones.
    * Calcular la **calificación promedio** (usa métodos de array y considera usar una **función flecha**).
    * Determinar el **estado** del estudiante ("Aprobado" o "Reprobado") basado en el promedio y `notaMinimaAprobado`.
    * Identificar las calificaciones consideradas "Destacadas" (mayores o iguales a 95) usando métodos de array y **funciones flecha**.
    * Formatear el promedio a **2 decimales** (usa **métodos incorporados**).
4.  **Valor de Retorno:**
    * Un string (puedes usar **template literals**) con el reporte formateado, incluyendo:
        * Nombre del estudiante.
        * Calificación promedio formateada.
        * Estado (Aprobado/Reprobado).
        * Una lista de las calificaciones destacadas (si las hay). Si no hay, indicarlo.

## Conceptos a Practicar

* Parámetros por Defecto (Default Parameters)
* Parámetros Rest (`...`)
* Funciones Flecha (`=>`)
* Métodos de Array (`reduce`, `filter`, `join`)
* Funciones Incorporadas (`toFixed`)
* Template Literals
* Lógica condicional (`if`/`else`, operador ternario opcionalmente)
* Scope (implícito en el uso de variables)