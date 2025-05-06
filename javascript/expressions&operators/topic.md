# 📅 Semana 4, Día 4: Expresiones y Operadores en JavaScript

### 📚 Introducción

Las expresiones y operadores son el corazón de cualquier lenguaje de programación. En JavaScript, los operadores permiten manipular valores, evaluar condiciones, ejecutar código y tomar decisiones.

Hoy nos enfocamos especialmente en:

- Operadores bit a bit (bitwise)

- Operadores BigInt

Incluiremos también un ejercicio corto por cada tipo de operador.

## 🏋️ Operadores Bitwise (bit a bit)

Los bitwise operators trabajan a nivel de bits, y son más comunes en desarrollo de bajo nivel, criptografía, compresión, juegos o motores de gráficos.

Tipos:

Operador

Nombre

Ejemplo

Resultado

&

AND

5 & 3

1

`

`

OR

`5

3`

7

^

XOR

5 ^ 3

6

~

NOT (complemento)

~5

-6

<<

Desplazamiento izquierda

5 << 1

10

>>

Desplazamiento derecha

5 >> 1

2

>>>

Desplazamiento sin signo

-5 >>> 1

Número grande positivo

⚠️ Notas:

Operan en enteros de 32 bits.

Suelen usarse para manipular banderas o bytes.

🔧 Ejercicio:

Crea una función hasPermission(mask, flag) que reciba dos números enteros, y determine si un bit está activado usando AND (&).

## 🪙 Operadores BigInt

BigInt es un tipo especial de dato para representar números enteros extremadamente grandes, más allá de Number.MAX_SAFE_INTEGER (2^53 - 1).

Sintaxis:

const big = 9007199254740991n; // n al final
const suma = big + 100n;

Características:

No se puede mezclar con Number, hay que convertir primero.

Usa n al final para definir un BigInt literal.

Admite +, -, *, /, % pero no Math ni parseInt.

🔧 Ejercicio:

Crea una función factorialBigInt(n) que calcule el factorial de n usando BigInt, para valores de n mayores a 20.

🔍 Otros operadores vistos (repaso breve)

✅ Lógicos: &&, ||, !

Combinan condiciones y devuelven booleanos o valores cortocircuitados.

✅ Comparación: ===, !==, <, >, <=, >=

Comparan dos valores.

✅ Aritméticos: +, -, *, /, %, **

Operaciones matemáticas.

✅ Asignación: =, +=, -=, etc.

Asignan y actualizan variables.

✅ Unarios: +, -, ++, --, typeof, delete

Operan sobre un solo valor.

✅ Coma ,

Evalúa varias expresiones y devuelve la última.

✅ Condicional ? :

Ternario para elegir entre dos valores.

const status = edad >= 18 ? 'adulto' : 'menor';

### 💡 Conclusión

Hoy profundizamos en dos temas clave: Bitwise Operators y BigInt, que aunque menos usados en frontend, son esenciales para comprender todo el poder de JavaScript y estar preparados para procesamiento numérico, binario o estructuras de bajo nivel.

Los ejercicios prácticos ayudarán a reforzar estas ideas en menos de una hora. ¡Adelante!

