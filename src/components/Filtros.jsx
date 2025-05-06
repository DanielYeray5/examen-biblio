import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Filtros = () => {
  const { state } = useContext(AppContext);
  const [filtro, setFiltro] = useState('');

  const librosFiltrados = state.libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      libro.autor.toLowerCase().includes(filtro.toLowerCase()) ||
      libro.genero.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Buscar por título, autor o género"
        value={filtro}
        onChange={handleFiltroChange}
        className="border p-2 w-full"
      />
      <ul className="space-y-2 mt-2">
        {librosFiltrados.map((libro) => (
          <li key={libro.id} className="border p-2">
            <p className="font-bold">{libro.titulo}</p>
            <p>
              {libro.autor} - {libro.genero} ({libro.anio})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtros;