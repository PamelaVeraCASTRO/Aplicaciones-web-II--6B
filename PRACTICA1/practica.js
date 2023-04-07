// Se crea las diferentes constantes con las entidades requetidas y sus atributos 
const Idioma = [
{
    idIdioma: 1,
    description : 'Ingles',
},
{
    idIdioma: 2,
    description : 'Español',
},
{
    idIdioma: 3,
    description : 'Alemán',
},
{
    idIdioma: 4,
    description : 'Francés', 
},
{
    idIdioma: 5,
    description : 'Italiano',
}
]
const Palabra =[
{
    idPalabra: 1,
    palabra: 'Good bye',
    Deletreo: '7'
},
{
    idPalabra: 2,
    palabra: 'Procesador',
    Deletreo: '10'
},
{
    idPalabra: 3,
    palabra: 'Guten Morgen',
    Deletreo: '11'
},
{
    idPalabra: 4,
    palabra: 'antibactérien',
    Deletreo: '13'
},
{
    idPalabra: 5,
    palabra: 'Arrivederci',
    Deletreo: '11'
}]
const Registro=[
{
    id:1,
    idIdioma:1,
    idPalabra:1,
    Deletreo: '7',
    silabas:'2',
    fonetica:'gud baɪ'
},
{
    id:2,
    idIdioma:2,
    idPalabra:2,
    Deletreo: '10',
    silabas:'4',
    fonetica:'procesador'
},
{
    id:3,
    idIdioma:3,
    idPalabra:3,
    Deletreo: '11',
    silabas:'4',
    fonetica:'guten moorgen'
},
{
    id:4,
    idIdioma:4,
    idPalabra:4,
    Deletreo: '13',
    silabas:'5',
    fonetica:'antibactérien'
},
{
    id:5,
    idIdioma:5,
    idPalabra:5,
    Deletreo: '11',
    silabas:'5',
    fonetica:' arrivederchi'
}]
// Se crea el ciclo usando las diferentes funciones con iterator para tener el resultado obtenido 
console.log('    \n  IDIOMA  \n')
for (const iterator of Idioma )
{
    Palabraaux=Palabra.find(ele=> ele.idPalabra===iterator.idIdioma)
    console.log(`Idioma ${iterator.description}  Palabra: ${Palabraaux.palabra}`);
}

console.log('    \n REGISTRO  \n ')
for (elemento of Registro){
   
    console.log(`id Registro: ${elemento.id} Número de silabas: ${elemento.silabas} Fonetica: ${elemento.fonetica}`)
    
    }

console.log(' \n PALABRAS \n   ' )
Palabra.forEach(Palabra => {
    console.log(`  id Palabra: ${Palabra.idPalabra} Palabra: ${Palabra.palabra} Deletreo: ${Palabra.Deletreo}`)
    
});