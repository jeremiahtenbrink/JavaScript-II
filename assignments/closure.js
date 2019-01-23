// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function attendance() {
	let numberOfStudentsPresent = 0;
	function markPresent (){
		
		numberOfStudentsPresent += 1;
	}
	markPresent();
	markPresent();
	markPresent();
}


attendance();

// ==== Challenge 2: Create a counter function ====
let count = 0;
function counter () {
	let count = 0;
	function add() {
		count++;
		console.log( "Count is now " + count);
	}
	return add;
};

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
