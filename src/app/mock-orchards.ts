// Usa la clase hero por supuesto
import { Orchard } from './orchard';
// Genera una constante  del objeto Hero
let default_description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export const ORCHARDS: Orchard[] = [
  { id: 1, name: 'Huerta 1', description: default_description , image: 'nota-4-huertas.jpg', icon: "leaf"},
  { id: 2, name: 'Huerta 2', description: default_description , image: 'nota-4-huertas.jpg', icon: "leaf"},
  { id: 3, name: 'Huerta 3', description: default_description , image: 'nota-4-huertas.jpg', icon: "leaf"},
  { id: 4, name: 'Huerta 4', description: default_description , image: 'nota-4-huertas.jpg', icon: "leaf"},
  { id: 5, name: 'Huerta 5', description: default_description , image: 'nota-4-huertas.jpg', icon: "leaf"}
];
