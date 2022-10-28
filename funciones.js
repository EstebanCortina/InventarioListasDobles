function mostrarLista() {
  if (this.primero == null) {
    return null;
  } else {
    let temp = this.primero;
    let aux = '';
    while (temp.next != null) {
      aux += JSON.stringify(temp.Codigo + temp.Nombre + temp.Precio + temp.Cantidad) + '<br>';
      temp = temp.next;
    }
    return aux;
  }
}
function mostrarInverso() {
  for (let i = inventario.lista.length - 1; i >= 0; i--) {
    console.log(inventario.listado(i))
    divShow.innerHTML += JSON.stringify(inventario.listado(i)) + '<br>';
  }

}