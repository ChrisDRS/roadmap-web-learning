# 📌 Type Casting en JavaScript

## 🧠 Type Conversion vs Coercion

- **Type Conversion**: Es la conversión explícita de tipos de datos realizada intencionalmente por el desarrollador usando funciones constructoras (`Number()`, `String()`, `Boolean()`).

- **Type Coercion**: Es la conversión implícita automática realizada por JavaScript al ejecutar operaciones entre tipos de datos diferentes.

## 🟢 Implicit Type Casting (Coercion)

JavaScript realiza automáticamente la conversión de tipos según el contexto de la operación:

- `'5' + 2` → `'52'` (concatena, convierte número a string).
- `'5' - 2` → `3` (convierte string a número para restar).
- `true + 1` → `2` (convierte `true` a `1`).

## 🔵 Explicit Type Casting (Conversion)

Conversión manual realizada por el programador para controlar exactamente los tipos:

- `Number('5')` → `5` (string a número).
- `String(100)` → `'100'` (número a string).
- `Boolean(0)` → `false` (número a boolean).

## 🔀 Type Conversion vs Coercion (Ejemplos comparativos)

- **Coercion**: `'10' + 2` → `'102'` (string concatenado).
- **Conversion**: `Number('10') + 2` → `12` (conversión explícita para suma).

> ✅ **Consejo:** Usa siempre conversiones explícitas para evitar comportamientos inesperados.
