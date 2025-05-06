import React from "react";
import Lista from "./components/Lista";
import Leidos from "./components/Leidos";
import Filtros from "./components/Filtros";
import Form from "./components/form";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-purple-600 text-black">
      <header className="py-6 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">
            <i className="bi bi-book mr-2"></i>Gestión de Libros
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 bg-white text-gray-800 rounded-lg shadow-md">
        <Form />
        <div className="mt-6">
          <Filtros />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Lista />
          <Leidos />
        </div>
      </main>
    </div>
  );
};

export default App;
