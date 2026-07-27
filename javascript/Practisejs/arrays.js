// let student1="aman"
// let student2="shraddha"
// let student3="rajat"

let students=["aman","shraddha","rajat"]//instead of creating multiple variables we stor in single array variable

// console.log(students)
// console.log(students.length)
// console.log(students[0]);


// arr=["apna",123,true]
// console.log(arr);
// console.log(arr[0][2]);

//arrays are mutable
// let fruits=['apple','mango','litchi'];
// console.log(fruits);
// console.log(fruits.length);

// fruits[10]='kiwi';
// console.log(fruits);
// console.log(fruits.length);


//Array methods
// let cars=["odi","bmw","maruti","toyota"];
// console.log(cars);
// console.log(cars.push('pologt'));
// console.log(cars);
// let car1=cars.pop()
// console.log(cars);
// console.log(car1);
// console.log(cars.unshift("pologt"));
// console.log(cars);
// let car2=cars.shift();
// console.log(cars);
// console.log(car2);


// let start=['january','july','march','august'];

// start.shift();
// start.shift();
// console.log(start)
// start.unshift('june');
// start.unshift('july');

// console.log(start)

//indexOf
// let primary=["red","yellow","brown"];
// console.log(primary.indexOf('Yellow'));-1 since it is not their in array

// console.log(primary.includes("orange"))returns answer in true or false


//concat
// let pri=['a','b','c'];
// let sec=['e','f','g'];

// console.log(pri.concat(sec));
// console.log(pri);
// console.log(pri.reverse(sec));reverse changes original array
// console.log(pri);

//slice:does not change original array

let colors=['red','yellow','blue','orange','pink','white'];

// console.log(colors.slice(2));
// console.log(colors.slice(1,3))
// console.log(colors.slice(-2))

//splice :changes original array splice(startindex,no of element to delete,item1,item2...)
// console.log(colors.splice(2))
// console.log(colors.splice(0,1))
// console.log(colors.splice(2,0,'black','white','teat'))
// console.log(colors.splice(3,1,'pink'))
// console.log(colors)


//sort
// console.log(colors.sort())

//practise question

// let start=['january','july','march','august'];
// let language=['c','c++','html','javascript','python','java','c#','sql']
// console.log(start.splice(0,2,'july','june'))
// console.log(start)
// console.log(language.reverse())
// console.log(language.indexOf('javascript'))
// console.log(language)


//Array rference

// let arr=['a','b','c'];
// let arrcopy=arr;

// console.log(arr==arrcopy);
// arrcopy.push('d');
// console.log(arr)
// console.log(arrcopy)

//constant array

// const arr=['a','b','c'];
// let num=[1,2,3,4];

// // console.log(arr=num)
// console.log(arr.push(num[0]))
// console.log(arr)


//nested arrays / multidimensional array
//no of rows =no of nested array within main array
//no of columns=no of elements of nested array within main array

// let nums=[[[3,2],[5,6]],[4,1],[7,9]];
// // console.log(nums)
// // console.log(nums.length)
// // console.log(nums[0][0])
// // console.log(nums[0][1])
// // console.log(nums[1][0])
// // console.log(nums[1][1])
// console.log(nums[0][1][1])


