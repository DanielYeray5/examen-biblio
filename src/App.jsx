import React from 'react';
import Lista from './components/Lista';
import Leidos from './components/Leidos';
import Filtros from './components/Filtros';
import Form from './components/form';

const App = () => {
  return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold flex items-center space-x-2">
              <i className="bi bi-book"></i>
              <span>Gestión de Libros</span>
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">
          <Form />
          <Filtros />
          <Lista />
          <Leidos />
        </main>
      </div>
  );
};

export default App;