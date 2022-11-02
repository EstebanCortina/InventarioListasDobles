class Inventario {
  constructor() {
    this.lista = null;
    this.primero = null;
    this.aux = null;
  }
  addProduct(nuevoP) {
    if (this.primero == null) {
      this.primero = nuevoP;

    } else if (this.primero.Codigo >= nuevoP.Codigo) {
      nuevoP.next = this.primero;
      nuevoP.next.last = nuevoP;
      this.primero = nuevoP;
    } else {
      let temp = this.primero;
      while ((temp.next != null) && (temp.next.Codigo < nuevoP.Codigo)) {
        temp = temp.next;
      }
      nuevoP.next = temp.next;
      if (temp.next != null) {
        nuevoP.next.last = nuevoP;
      }
      temp.next = nuevoP;
      nuevoP.last = temp;
    }

  }

  listarInverso() {
    let res = "";
    let temp = this.primero;
    let temp2;
    if (temp == null) {
      return null;
    } else {
      while (temp != null) {
        temp2 = res;
        res = "";
        res += 'Codigo: ' + temp.Codigo + ', Nombre: ' + temp.Nombre + ', Precio: ' + temp.Precio + ', Cantidad: ' + temp.Cantidad + '<br>' + temp2;
        temp = temp.next;
      }
      return res;
    }
  }

  listado() {
    if (this.primero == null) {
      return null;
    } else {
      let temp = this.primero;
      let aux = '';
      while (temp != null) {
        aux += 'Codigo: ' + temp.Codigo + ', Nombre: ' + temp.Nombre + ', Precio: ' + temp.Precio + ', Cantidad: ' + temp.Cantidad + '<br>';
        temp = temp.next;
      }
      return aux;
    }
  }

  buscar(codigoUser) {
    let temp = this.primero;
    if (temp.next == null) {
      if (temp.Codigo == codigoUser) {
        return temp;
      } else {
        return null;
      }
    } else {
      while (temp != null) {
        if (temp.Codigo == codigoUser) {
          return temp;
        } else {
          temp = temp.next;
        }
      }
      return null;
    }
  }

  eliminar(codigoUser) {
    let temp = this.primero;
    let aux = '';
    if (temp.next == null) {
      if (temp.Codigo == codigoUser) {
        aux = ' El producto: Codigo: ' + temp.Codigo + ', Nombre: ' + temp.Nombre + ', Precio: ' + temp.Precio + ', Cantidad: ' + temp.Cantidad + ' fue eliminado <br>';
        this.primero = null;
        return aux;
      }
    } else {
      while (temp.next != null) {
        if (temp.next.Codigo == codigoUser) {
          aux = ' El producto: Codigo: ' + temp.next.Codigo + ', Nombre: ' + temp.next.Nombre + ', Precio: ' + temp.next.Precio + ', Cantidad: ' + temp.next.Cantidad + ' fue eliminado <br>';
          temp.next = temp.next.next;
          temp.last = temp.last.last;
          return aux;
        }
      }
      return null;
    }
  }

  /*
    insertar(posicion, productoInsert) {
      let temp = this.primero;
      var aux;
      var aux2;
      var aux3;
      if (temp.next == null) {
        if (temp.Codigo == codigoUser) {
          aux = temp;
        } else {
          return null;
        }
      } else {
        while (temp.next != null) {
          if (temp.next.Codigo == codigoUser) {
            aux = temp;
          } else {
            temp = temp.next;
          }
        }
      }
  
      for (let i = 1; i < posicion - 1; i++) {
        temp = temp.next;
      }
      console.log(temp);
      console.log(temp.next);
      console.log(aux.next);
      console.log(aux.next.next);
      aux.next = aux2;
      aux.next.next = aux3;
      aux.next = temp.next;
      aux2.next = aux.next.next;
      aux.next.next = aux3;
      temp.next = aux2;
  
  
    }
    */
}