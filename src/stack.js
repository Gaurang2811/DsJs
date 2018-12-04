function Stack() {
	let stack = [];
	return {
		push(item) {
			return stack.push(item)
		},
		pop() {
			return stack.pop();
		},
		isEmpty() {
			return stack.length === 0;
		},
		peek() {
			return stack[stack.length -1];
		}
	}
}

let stack  = new Stack();
stack.push('Item1');
stack.push('Item2');
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push('Item3');
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());