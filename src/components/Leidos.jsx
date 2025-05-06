    import React, { useContext } from 'react';
    import { AppContext } from '../context/AppContext';

    const Leidos = () => {
    const { state } = useContext(AppContext);

    const librosLeidos = state.libros.filter((libro) => libro.leido);

    return (
        <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Libros Leídos</h2>
        {librosLeidos.length === 0 ? (
            <p>No hay libros marcados como leídos.</p>
        ) : (
            <ul className="space-y-2">
            {librosLeidos.map((libro) => (
                <li key={libro.id} className="border p-2">
                <p className="font-bold">{libro.titulo}</p>
                <p>{libro.autor} - {libro.genero} ({libro.anio})</p>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
    };

    export default Leidos;