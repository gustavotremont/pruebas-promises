// 1. Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.
fetch('https://dog.ceo/api/breeds/list/all').then(result => result.json()).then(json => console.log(json.message))

// Imprimir por consola una imagen random de una raza.
fetch('https://dog.ceo/api/breed/terrier/norwich/images/random').then(result => result.json()).then(json => console.log(json.message))

// Imprimir por consola todas las imágenes de una raza concreta.
fetch('https://dog.ceo/api/breed/malamute/images/').then(result => result.json()).then(json => console.log(json.message))

// ¿Y si ahora te pidieramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.
// Recuerda que para estos ejercicios deberás utilizar fetch. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el arbol DOM.
fetch('https://dog.ceo/api/breeds/list').then(result => result.json()).then(json => {
    let dogsList = json.message.map(element =>  `<option value="${element}">${element}</option>`);
    document.getElementById("dogsList").innerHTML = dogsList;
});

const pintaPerrito = (elperrito) => {
    fetch(`https://dog.ceo/api/breed/${elperrito.value}/images/random`).then(result => result.json()).then(json => {    
    document.getElementById("gallery").innerHTML = `<picture> <img src="${json.message}" /> </picture>`;
    })
}

const pintarPerritos = (elperrito) => {
    fetch(`https://dog.ceo/api/breed/${elperrito.value}/images/`).then(result => result.json()).then(json => {    
    let dogImages = json.message.map(element => `<picture> <img src="${element}" /> </picture>`);
    document.getElementById("gallery").innerHTML = dogImages;
    })
}