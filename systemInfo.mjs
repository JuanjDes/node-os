import informacionOS from "./osModule.mjs";
import informacionRed from "./networkModule.mjs";
import os from 'os';


console.log(informacionOS(os));
console.log(informacionRed(os));