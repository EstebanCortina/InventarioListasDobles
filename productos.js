class Producto {
  constructor(codigo, nombre, precio, cantidad) {
    this.Codigo = codigo;
    this.Nombre = nombre;
    this.Precio = precio;
    this.Cantidad = cantidad;
    this.next = null;
  }
}