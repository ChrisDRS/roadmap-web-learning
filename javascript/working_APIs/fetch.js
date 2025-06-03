async function obtenerTareasCompletadas() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    console.log('Obteniendo tareas completadas...');
  
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error en la solicitud HTTP: ${response.status}`);
        }
        const tasks = await response.json();
        console.log('Tareas completadas: ')
        let completedTasks = tasks.filter(task => task.completed); // Filtra las "tareas" que en la propiedad 'completed' sea 'true'
        for(let task of completedTasks){
            console.log(task.title);
        }
        console.log(`Total de tareas completadas: ${completedTasks.length}`)
    } catch (error) {
      console.error('Error al obtener o procesar las tareas:', error);
    }
  }
  
  // Llama a la función para ejecutarla
  obtenerTareasCompletadas();