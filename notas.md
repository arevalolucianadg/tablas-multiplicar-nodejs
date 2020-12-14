# Curso Node: De cero a experto
Fernando Herrera ([Udemy](https://www.udemy.com/course/node-de-cero-a-experto/))

### Requerir paquetes
* **Guardar en archivo de texto** desde Node.
  * Con `const fileSystem = require('fs');`
  
```javascript
fileSystem.writeFile( 'tablas.txt', dataFile, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido guardado!')
}) 
```