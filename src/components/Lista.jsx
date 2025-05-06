import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Lista = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleEliminar = (id) => {
    dispatch({ type: 'ELIMINAR_LIBRO', payload: id });
  };

  const handleMarcarLeido = (id) => {
    dispatch({ type: 'MARCAR_LEIDO', payload: id });
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Lista de Libros</h2>
      {state.libros.length === 0 ? (
        <p>No hay libros registrados.</p>
      ) : (
        <ul className="space-y-2">
          {state.libros.map((libro) => (
            <li key={libro.id} className="border p-2 flex justify-between items-center">
              <div>
                <p className="font-bold">{libro.titulo}</p>
                <p>{libro.autor} - {libro.genero} ({libro.anio})</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleMarcarLeido(libro.id)}
                  className={`px-2 py-1 rounded flex items-center space-x-1 ${libro.leido ? 'bg-green-500' : 'bg-gray-500'} text-white`}
                >
                  <i className="bi bi-check-circle"></i>
                  <span>{libro.leido ? 'Leído' : 'Marcar como leído'}</span>
                </button>
                <button
                  onClick={() => handleEliminar(libro.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded flex items-center space-x-1"
                >
                  <i className="bi bi-trash"></i>
                  <span>Eliminar</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lista;