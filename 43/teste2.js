numberObjects = [{ number: 1 },  { number: 2 },
    { number: 3 },  { number: 4 },
    { number: 5 },  { number: 6 },
    { number: 7 },  { number: 8 },
    { number: 9 },  { number: 10 },
    { number: 11 }]

console.log(numberObjects)

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/

console.log(numberObjects.indexOf({number: 2}))