    import React, { createContext, useReducer } from 'react';

    const AppContext = createContext();

    const initialState = {
    libros: [],
    };

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
        default:
        return state;
    }
    };

    const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
        {children}
        </AppContext.Provider>
    );
    };

    export { AppContext, AppProvider };