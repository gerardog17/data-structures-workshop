// clase lista ligada
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 
    add(element)
{
    var node = new Node(element);
 
   // Almacenar el nodo actual
    var current;
 
    //Si la lista esta vacía añadir elemento, mandarlo a punta
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        // Iterar hasta el final de la lista
        while (current.next) {
            current = current.next;
        }
 
        // Agregar nodo
        current.next = node;
    }
    this.size++;
}
removeElement(element)
{
    var current = this.head;
    var prev = null;
 
   // Iterar en la lista
    while (current != null) {
        // Comparar elemento con elemeto actual
        // Si se encuentra el elemento eliminarlo
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
}
var ll = new LinkedList();
ll.add(2);
ll.add(5);
ll.add(6);
ll.printList();

ll.removeElement(2);
ll.printList();