import { createContext } from 'react';

const counterContext=createContext();
const Provider=counterContext.Provider;
const Consumer=counterContext.Consumer;

export {Provider, Consumer};