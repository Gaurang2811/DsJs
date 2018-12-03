function PriorityQueue() {
	let highPriorityQueue = [];
	let lowPriorityQueue = [];
	return {
		enqueue(item, high = false) {
			if(high) {
				highPriorityQueue.push(item);
			} else {
				lowPriorityQueue.push(item);
			}
			return true;
		},
		dequeue() {
			let item = null;
			if(highPriorityQueue.length) {
				item = highPriorityQueue.shift();
			} else {
				item = lowPriorityQueue.shift() || null;
			}
			return item;
		},
		get length() {
			return highPriorityQueue.length + lowPriorityQueue.length
		},
		peek() {
			if(highPriorityQueue.length) {
				return highPriorityQueue[0];
			} else {
				return lowPriorityQueue[0];
			}
		},
		isEmpty() {
			return (highPriorityQueue.length + lowPriorityQueue.length === 0);
		}
	}
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Requirement gathering')
priorityQueue.enqueue('Developemnt')
priorityQueue.enqueue('Testing')
console.log(priorityQueue.dequeue())
console.log(priorityQueue.peek())
console.log(priorityQueue.length)
console.log(priorityQueue.dequeue())
priorityQueue.enqueue('Urgent Requirement changes', true)
console.log(priorityQueue.peek())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.peek())
console.log(priorityQueue.length)
console.log(priorityQueue.isEmpty())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.isEmpty())
