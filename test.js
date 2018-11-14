// function url(url) {
//     url = url.split('?')[1]
//     var res = {}
//     url = url.split('&')
//     url.forEach(item => {
//         if(item.split('=')[1] == undefined){
//             res[item.split('=')[0]] = undefined
//         }else if(item.split('=')[1] == ''){
//             res[item.split('=')[0]] = ''
//         }else{
//             res[item.split('=')[0]] = item.split('=')[1]
//         }
//     });
//     return res
// }

// var a = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'
// console.log(url(a))


// var Obj = 'undefined' 
// var b = NaN
// console.log(a+b)


// var a = [1,2,5,6]
// var b = a.reverse()
// console.log(a)
// console.log(b)


// var ev = ev || window.event
// document.documentElement.clientWidth || document.body.clientWidth
// var target = ev.srcElement || ev.target

function fun() {
    var a = 1
    setTimeout(function () {
        console.log(a)
    },1000)
    console.log(23)
}
fun()
console.log(123456)