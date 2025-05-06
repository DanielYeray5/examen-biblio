import React, { createContext, useReducer, useEffect } from 'react';

const AppContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_LIBRO':
            return { ...state, libros: [...state.libros, action.payload] };
        case 'EDITAR_LIBRO':
            return {
                ...state,
                libros: state.libros.map((libro) =>
                    libro.id === action.payload.id ? action.payload : libro
                ),
            };
        case 'ELIMINAR_LIBRO':
            return {
                ...state,
                libros: state.libros.filter((libro) => libro.id !== action.payload),
            };
        case 'MARCAR_LEIDO':
            return {
                ...state,
                libros: state.libros.map((libro) =>
                    libro.id === action.payload ? { ...libro, leido: !libro.leido } : libro
                ),
            };
        case 'CARGAR_LIBROS':
            return { ...state, libros: action.payload };
        default:
            return state;
    }
};

const getInitialState = () => {
    const storedLibros = localStorage.getItem('libros');
    return storedLibros ? { libros: JSON.parse(storedLibros) } : { libros: [] };
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    // Guardar datos en localStorage cuando cambie el estado
    useEffect(() => {
        localStorage.setItem('libros', JSON.stringify(state.libros));
    }, [state.libros]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };