//Crea una clase llamada Libro con las siguientes propiedades:
//
//titulo: El título del libro.
//autor: El autor del libro.
//numeroDePaginas: El número de páginas del libro.
//genero: El género del libro.
//Define un método llamado mostrarInformacion() que imprima en la consola la información del libro.
//
//Crea dos instancias de la clase Libro y llama al método mostrarInformacion() para cada una de ellas.


//class Libro{
//    constructor(titulo, autor,numeroDePaginas,genero){
//        this.titulo = titulo;
//        this.autor = autor;
//        this.numeroDePaginas = numeroDePaginas;
//        this.genero = genero;
//    }
//    mostrarInformacion(){
//        console.log(`Titulo: ${this.titulo}`);
//        console.log(`Autor: ${this.autor}`);
//        console.log(`Numero de paginas: ${this.numeroDePaginas} `);
//        console.log(`Genero: ${this.genero}`);
//    }
//}
//  
//const libro1 = new Libro("Homo Deus", "Yuval Noah", 500, "Algun genero");
//const libro2 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1178, "Fantasía épica");
//
//libro1.mostrarInformacion();
//libro2.mostrarInformacion();

///////////////////////////////////////// 
//Crea una clase llamada CuentaBancaria con las siguientes propiedades:
//
//numeroDeCuenta: El número de cuenta.
//titular: El titular de la cuenta.
//saldo: El saldo de la cuenta.
//Define métodos para:
//
//Depositar dinero en la cuenta.
//Retirar dinero de la cuenta.
//Consultar el saldo de la cuenta.
//Crea una instancia de la clase CuentaBancaria y realiza las siguientes operaciones:
//
//Deposita $1000 en la cuenta.
//Retira $500 de la cuenta.
////Consulta el saldo de la cuenta.
//
//class CuentaBancaria{
//    constructor(numeroDeCuenta, titular, saldo){
//        this.numeroDeCuenta = numeroDeCuenta;
//        this.titular = titular;
//        this.saldo = saldo;
//
//    }
//
//    depositarDinero(cuenta){
//        this.saldo += cuenta;
//        console.log(`Se han depositado: ${cuenta} pesos en la cuenta`);
//        console.log(`El saldo de la cuenta es de: ${this.saldo} pesos`);
//    }
//
//    Retirar(cantidad){
//        if(cantidad > this.saldo){
//            console.error("Cantidad de saldo insuficiente")
//            return        }
//

//            this.saldo -= cantidad;
//            console.log(`Se ha retirado: ${cantidad} pesos de la cuenta`)
//            console.log(`Su nuevo saldo es de: ${this.saldo} `)
//    }
//     
//    consultarSaldo(){
//        console.log(`El saldo de la cuenta es de: ${this.saldo}`);
//    }
//
//
//}
//
//const cuenta1 = new CuentaBancaria(1245968, "Andres Calderon", 0);
//
//cuenta1.depositarDinero(1000);
//cuenta1.Retirar(500);
//cuenta1.consultarSaldo();

////////////////////////////////////////////////////////
//Crea una clase llamada Mascota con las siguientes propiedades:
//
//nombre: El nombre de la mascota.
//tipo: El tipo de mascota (perro, gato, etc.).
//edad: La edad de la mascota.
//raza: La raza de la mascota (opcional).
//Define un método llamado hacerRuido() que imprima en la consola el sonido que hace la mascota (por ejemplo, "Guau", "Miau").
//
//Crea dos instancias de la clase Mascota, una para un perro y otra para un gato, y llama al método hacerRuido() para cada una de ellas.
//
//class Mascota{
//    constructor(nombre, tipo, edad, raza){
//        this.nombre = nombre;
//        this.tipo = tipo;
//        this.edad = edad;
//        this.raza = raza; 
//    }
//
//    hacerRuido(){
//        switch (this.tipo) {
//            case "Perro":
//                console.log(`Tipo ${this.tipo}
//                Nombre ${this.nombre}
//                Edad: ${this.edad}
//                Raza: ${this.raza}
//                Ruido: Guau`);
//                break;
//            case "Gato":
//                console.log(`Tipo ${this.tipo}
//                Nombre ${this.nombre}
//                Edad: ${this.edad}
//                Raza: ${this.raza}
//                Ruido: Miau`);
//        
//            default:
//                console.log("Ruido desconocido")
//                break;
//        }
//    }
//}
//
//const mascota1 = new Mascota("Tomy", "Perro", "2 años", "Pastor Aleman")
//const mascota2 = new Mascota("Michi", "Gato", "1 año ", "Ragdoll");
//
//mascota1.hacerRuido();
//mascota2.hacerRuido();


//////////////////////////////////////////////////
//
//Crear una clase para representar un producto en una tienda online
//
//Crea una clase llamada Producto con las siguientes propiedades:
//
//id: El identificador único del producto.
//nombre: El nombre del producto.
//precio: El precio del producto.
//categoria: La categoría del producto (por ejemplo, "Electrónica", "Ropa", etc.).
//descripcion: Una descripción breve del producto.
//Define un método llamado mostrarInformacion() que imprima en la consola la información del producto.
//
//Crea dos instancias de la clase Producto y llama al método mostrarInformacion() para cada una de ellas.


//class Producto {
//    constructor(id, nombre, precio, categoria, descripcion){
//        this.id = id;
//        this.nombre = nombre;
//        this.precio = precio;
//        this.categoria = categoria;
//        this.descripcion = descripcion;
//    }
//
//    mostrarInformacion(){
//        console.log(`Id: ${this.id}, 
//        Nombre: ${this.nombre}, 
//        Precio: ${this.precio} 
//        Categoria: ${this.categoria} 
//        Descripcion: ${this.descripcion}`)
//    }
//}
//
//
//const producto1 = new Producto(1,"Computadora", 2000000, "Tecnologia", "Producto de muy buena calidad"  );
//
//const producto2 = new Producto(2, "Celular", 1000000, "Tecnologia", "Producto de muy buena calidad");
//
//const producto3 = new Producto(3, "Zapatos", 200000, "Calzado", "Producto de muy buena calidad" );
//
//
//producto1.mostrarInformacion();
//producto2.mostrarInformacion();
//producto3.mostrarInformacion();