import { component } from './component';
import { add, product } from './calc';

document.body.appendChild(component());
console.log(add(2, 5));
console.log(product(2, 5));