# Miniproyecto: Gestor de Listas y Usuarios

## 🌟 Objetivo
Desarrollar una aplicación simple en la consola para gestionar listas de tareas y asociarlas a usuarios.

## 📄 Requisitos

1. Crear un array de usuarios, donde cada usuario tiene un nombre y un identificador.
2. Crear un objeto `Map` que almacene las listas de tareas por cada ID de usuario.
3. Cada lista de tareas es un `Set` que contiene strings con el nombre de cada tarea.
4. Implementar funciones para:
   - Añadir un nuevo usuario.
   - Añadir tarea a un usuario.
   - Eliminar tarea de un usuario.
   - Mostrar todas las tareas de un usuario.
5. Implementar control de duplicados usando `Set`.
6. Usar `WeakMap` o `WeakSet` para simular datos privados, como una lista de usuarios eliminados.

## 📝 Sugerencia
Divide la lógica en funciones claras y usa `console.log()` para mostrar los estados intermedios del sistema.