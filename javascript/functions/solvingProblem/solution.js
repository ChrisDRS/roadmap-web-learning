function reportStudent({ name = "Anónimo", minNote = 45, notes = [] }) {
    if (!Array.isArray(notes) || notes.length === 0) {
        return `
        -----------------------------------------------
                    Reporte de estudiante
        -----------------------------------------------

            Estudiante:                ${name}
            Estado del estudiante:     Sin notas registradas
            Calificaciones:            No hay notas.

        -----------------------------------------------
        `;
    }

    const sum = notes.reduce((a, b) => a + b, 0);
    const avg = sum / notes.length;

    const status = avg >= minNote ? "Aprobado" : "Reprobado";
    const best = Math.max(...notes);
    const worst = Math.min(...notes);

    return `
        -----------------------------------------------
                    Reporte de estudiante
        -----------------------------------------------

            Estudiante:                 ${name}
            Estado del estudiante:      ${status}
            Promedio del estudiante:    ${avg.toFixed(2)}
            Calificaciones destacadas:
                Mejor nota:             ${best}
                Peor nota:              ${worst}

        -----------------------------------------------
    `;
}








// Test...

const estudiantes = [
    { name: "Cristian Romero", notes: [82, 91, 100, 56, 98, 72, 65] },
    { name: "Kathy", notes: [60, 59, 55, 70] },
    { name: "Luis", notes: [80, 79, 85, 90] }, 
    { name: "Daniela", notes: [] }, 
    {} 
];

// Imprimir reportes
estudiantes.forEach(est => {
    console.log(reportStudent(est));
});
