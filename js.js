
// var a = [1,5,4,2,6,45,12,4,2]
function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}

//  console.log(a.sort(compare))

// var str = '<tr><td>{$id}</td><td>{$name}</td><td>{$id}</td></tr>'
// var str1 = str.replace(/{\$id}/g, 10).replace(/{\$name}/g,'tony')

// var str2 = str.replace('{$id}', 10).replace('{$name}','tony')
// console.log(str2)

var iArray = [];
function getRandom(istart, iend){
    var iChoice = istart - iend +1;
    return Math.floor(Math.random() * iChoice + istart)
}
Math.random()  //就是获取 0-1 之间的随机数（永远获取不到 1）
for(var i=0; i<10; i++){ 
    var result= getRandom(10,100);
    iArray.push(result);
}
iArray.sort(compare);
console.log(iArray)