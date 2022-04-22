let altura = parseInt(prompt("ingrese altura en centimetros"))
let ancho = parseInt(prompt("ingrese ancho en centimetros"))
const porcentajeSeña = (20/100) 

const  multiplicar =  (num1, num2) => num1 * num2


let area = multiplicar(altura, ancho)

console.log(area)

alert(area + " " + "Cm².")

// let seña = multiplicar(area, porcentajeSeña, )

//     console.log(seña)

let peque = 3000
let seña1 = multiplicar(peque, porcentajeSeña)
console.log(seña1)

let medio = parseInt(6000)
let seña2 = multiplicar(medio, porcentajeSeña)
console.log(seña2)

let grande = parseInt(9000)
let seña3 = multiplicar(grande, porcentajeSeña)
console.log(seña3)

let xGrande = parseInt(12000)
let seña4 = multiplicar(xGrande, porcentajeSeña)
console.log(seña4)

if (area <= 20) {
    
    console.log("Tamaño pequeño")

    alert("tamaño pequeño" + " " + "seña" + " " + seña1 )

} else if (area <= 50) {
    console.log("tamaño mediano")

    alert("tamaño mediano" + " " + "seña" + " " + seña2 )
    
} else if (area <= 200) {
    console.log("tamaño grande")

    alert("tamaño grande" + " "  + "seña" + " " + seña3 )

} else {
    console.log("tamaño extra grande") 
    
    alert("tamaño extra grande" + " " + "seña" + " " + seña4 )

}