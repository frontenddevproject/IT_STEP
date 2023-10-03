//----------------------------Task 1-------------------------------------
console.log("Task 1");

const arr = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
 ];

 const result = arr.flat().filter((el) => el > 5 );

 console.log(result)
 console.log("")
 
//----------------------------Task 2-------------------------------------
console.log("Task 2");

Array.prototype.myIndexOf = function (userEl) {
	if (Array.isArray){
		for (let i = 0; i < this.length; i++) {
			if (this[i] - userEl === 0) {
				return i;
			}
				else if (this[i] - userEl !==0 && i === this.length - 1) {
					return -1;
				}	
		}	
	}	
}

const arr2 = [1,2,3,1,6,4];
console.log(arr2.myIndexOf(6), "myIndexOf");
