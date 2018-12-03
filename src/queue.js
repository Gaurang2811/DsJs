function Queue() {
	let queue = []
	return {
		enqueue(item) {
			return queue.push(item)
		},
		dequeue() {
			return queue.shift() || null;
		},
		get length() {
			return queue.length;
		},
		peek() {
			return queue[0];
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
}

let q = new Queue();
q.enqueue('Gaurang');
q.enqueue('Omar')
q.enqueue('Smart')
console.log(q.length)
q.enqueue('Man')
console.log(q.length)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.peek())
console.log(q.dequeue())
console.log(q.peek())
console.log(q.dequeue())
console.log(q.dequeue())
q.enqueue('Yooo')
console.log(q.length)
console.log(q.peek())
console.log(q.isEmpty())
console.log(q.dequeue())
console.log(q.isEmpty())
