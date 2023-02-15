
import { animalsToAdopt, myName } from "./data.js";

console.log(`${myName} wants to tell you the names of his favorite cats:`);

for (let index = 0; index < animalsToAdopt.length; index++) {
    const element = animalsToAdopt[index];

    console.log(element.name);
}