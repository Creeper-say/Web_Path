// Object构造函数
// 得到一个对象的所有信息

const obj = {
    info: "This is an object",
    power: "It can do anything",
    color: "It has a color",
    content: [
        {
            id: "1",
            name: "apple"
        },
        {
            id: "2",
            name: "banana"
        }
    ]
}

for (let key in obj) {
    console.log(key + " : " + obj[key]);
}

// 新方法 Object.keys() 静态方法 返回数组

// 得到对象的所有键/属性名
const keys = Object.keys(obj);
console.log(keys); // ["info", "power", "color"]

// 得到对象的所有值
const values = Object.values(obj);
console.log(values); // ["This is an object", "It can do anything", "It has a color"]

// 得到对象的所有键值对
const entries = Object.entries(obj);
console.log(entries); // [["info", "This is an object"], ["power", "It can do anything"], ["color", "It has a color"]]

// 对象长度 属性个数
const length = Object.keys(obj).length;
console.log(length); // 4

// 解构输出
for (let [key, value] of entries) {
    console.log(key + " : " + value);
}

// 拷贝对象
// console.log(...obj); //error
const copyObj = { ...obj };
console.log(copyObj); // {info: "This is an object", power: "It can do anything", color: "It has a color", content: Array(2)}
let copyObj2 = {};
Object.assign(copyObj2, obj);
console.log(copyObj2); // {info: "This is an object", power: "It can do anything", color: "It has a color", content: Array(2)}

// 一般assign用法 添加属性或者方法
Object.assign(obj, { type: "Basic Object" });
Object.assign(obj, { say: function () { console.log("Hello World") } });
console.log(obj); // {info: "This is an object", power: "It can do anything", color: "It has a color", content: Array(2), type: "Basic Object", say: ƒ}
console.log("=====================");
// Array 构造函数

// 1.构造一个数组
let arr = []; // []
let arr1 = new Array(); // []

// 2.构造一个有初始值的数组
let arr2 = new Array(1, 2, 3); // [1, 2, 3]
let arr3 = [1, 2, 3]; // [1, 2, 3]

// 3.构造一个有初始值的数组，且长度不固定
let arr4 = new Array(3); // [empty x 3]
let arrLen = 10;
arr4 = new Array(arrLen);
console.log(arr4); // [empty x 10]

// 新构造的数组没有初始化,只有长度设置,那么用forEach遍历时,是无法打印出结果的
arr4.forEach((value, index) => {
    console.log(index + " : " + value); // 无打印结果
});
console.log(...arr4); // undefined undefined undefined

// 4.数组的常用方法

// 4.1 push() 方法 向数组的末尾添加一个或多个元素，并返回新的长度
let arr5 = ['h','e','l','l'];
let arrLen5 = arr5.push('o');
console.log(arrLen5); // 5
console.log(...arr5); // h e l l o

// 4.2 pop() 方法 移除数组的最后一个元素，并返回该元素的值
let arr6 = ['h','e','l','l','o',3];
let popValue = arr6.pop();
console.log(popValue); // 3
console.log(...arr6); // h e l l o

// 4.3 unshift() 方法 向数组的开头添加一个或多个元素，并返回新的长度
let arr7 = [3,4,5];
let arrLen7 = arr7.unshift(1,2);
console.log(arrLen7); // 5
console.log(...arr7); // 1 2 3 4 5

// 4.4 shift() 方法 移除数组的第一个元素，并返回该元素的值
let arr8 = [1,2,3,4,5];
let shiftValue = arr8.shift();
console.log(shiftValue); // 1   
console.log(...arr8); // 2 3 4 5

// 4.5 reverse() 方法 颠倒数组中元素的顺序
let arr9 = [1,2,3,4,5];
arr9.reverse(); 
console.log(...arr9); // 5 4 3 2 1

// 4.6 sort() 方法 对数组的元素进行排序，默认是按照字母顺序排序
let arr10 = [5,3,1,4,2];
arr10.sort();
console.log(...arr10); // 1 2 3 4 5

// 4.7 splice() 方法 在数组中新增、删除或替换元素，并返回被修改的数组
// splice(start, deleteCount, item1, item2, ...)
let arr11 = [1,2,3,4,5];
let spliceArr = arr11.splice(1,2,6,7);
console.log(spliceArr); // [2, 3]
console.log(...arr11); // 1 6 7 4 5
let spliceArr2 = arr11.splice(0,3);
console.log(...arr11); // 4 5
arr11.splice(2,0,10,11);
console.log(...arr11); // 4 5 10 11