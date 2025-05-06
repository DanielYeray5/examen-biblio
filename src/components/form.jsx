    import React, { useState, useContext } from 'react';
    import { AppContext } from '../context/AppContext';

    const Form = () => {
    const { dispatch } = useContext(AppContext);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoLibro = {
        id: Date.now(),
        titulo,
        autor,
        genero,
        anio,
        leido: false,
        };
        dispatch({ type: 'AGREGAR_LIBRO', payload: nuevoLibro });
        setTitulo('');
        setAutor('');
        setGenero('');
        setAnio('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="border p-2" required />

            <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} className="border p-2" required />

            <input type="text" placeholder="Género" value={genero} onChange={(e) => setGenero(e.target.value)} className="border p-2" required />

            <input type="number" placeholder="Año" value={anio} onChange={(e) => setAnio(e.target.value)} className="border p-2" required />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Agregar Libro
        </button>
        </form>
    );
    };

    export default Form;