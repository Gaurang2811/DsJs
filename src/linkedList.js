function createNode(value) {
    return {
        value,
        next: null
    }
}

function LinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        add(item) {
            const node = createNode(item);

            if (this.head === null) { // this.isEmpty() (i.e this.length === 0)
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;
            return node;
        },
        remove() {
            if (this.head === null) { // this.isEmpty() (i.e this.length === 0)
                return null;
            }
            const node = this.tail;

            if (this.head === this.tail) { // this.length === 1
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }

            let current = this.head;
            let penultimate;
            while (current) {
                if (current.next === this.tail) {
                    penultimate = current;
                    break;
                }
                current = current.next;
            }
            penultimate.next = null;
            this.tail = penultimate;
            this.length--;

            return node;
        },
        get(index) {
            if (index < 0 || index > this.length) {
                return null;
            }
            if (index === 0) {
                return this.head;
            }
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        },
        delete(index) {
            if (index < 0 || index > this.length) {
                return null;
            }
            if (index === 0) {
                const deleted = this.head;
                this.head = this.head.next;
                this.length--;
                return deleted;
            }

            let current = this.head;
            let previous;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            const deleted = current;
            previous.next = current.next;
            this.length--;

            return deleted;
        },
        isEmpty() {
            return this.length === 0;
        },
        print() {
            let current = this.head;
            let list = [];
            while (current) {
                list.push(current.value);
                current = current.next;
            }
            return console.log(list.join(' => '));
        }
    }
}

let list = new LinkedList();
console.log(list.isEmpty());
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');
list.print();
console.log(list.remove())
list.print();
console.log(list.get(2))
list.delete(2);
list.print();
