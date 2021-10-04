// ¿Quieres saber mi información? Aquí la tienes.
// Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: https://api.github.com/users/{username}. {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo, https://api.github.com/users/silvialcastilla. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

// Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página:

// Lo que queremos que se imprima por consola será:

// nombre
// número de repositorios
// avatar (imagen)
// Si ya has obtenido toda la información, utiliza las herramientas del arbol DOM para que esta información aparezca en la pantalla.

const pintarUsuario = (user) => {
    fetch(`https://api.github.com/users/${user.value}`).then(result => result.json()).then(({name, public_repos, avatar_url}) => {
        //console.log(`usuario: ${name} repos: ${public_repos} foto de perfil: ${avatar_url}`))
        let perfil = ` <div>
                        <p>NOMBRE: ${name}</p>
                        <p>NÚMERO DE REPOSITORIOS: ${public_repos}</p>
                        <img src='${avatar_url}'>
                    </div>
        `;
        document.getElementById('gallery').innerHTML = perfil
    })
}