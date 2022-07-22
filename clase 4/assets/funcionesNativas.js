let saludo= "hola mundo"

console.log(saludo);
console.log(saludo.length)//devuelve la cantidad de caracteres 
console.log(saludo.toUpperCase())//devuelve el texto en mayusculas
console.log(saludo.toLowerCase())//devuelve el texto en minusculas
console.log(saludo.slice(4,8))//devuelve el fragmento comprendido entre las posiciones proporcionadas por parametro
console.log(saludo.includes("mundo"))//devuelve verdadero o falso si la cadena existe
console.log(saludo.indexOf("a"))//devuelve la primera posicion en la que aparezca la cadena ingresada por parametro
console.log(saludo.replace("a","@"))//permite remplazar una cadena de texto

let numero=5

console.log(typeof numero.toString())//este metodo convierte la variable en string
console.log(typeof numero)