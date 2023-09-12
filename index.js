let arr=[2,7,8,5,9,3]
//polyfill of map filter and reduce
//callback function for map
var arr9=function intotwo(x){
    return x*2
}
//callback function for filter
var arr13=function greaterthanfive(x){
    if(x>5)
        return x    
}
//callback function for reduce
var arr3=function add(x,acc2){
    return acc2+x
}
//Map method without using Array.prototype
function myMap(arr7,cb2){
    let arr8=[]
    for(i=0;i<arr7.length;i++){
        arr8.push(cb2(arr7[i]))
    }
    return arr8
}
var arr10=myMap(arr,arr9)
console.log(arr10)
//Map method with using Array.prototype
Array.prototype.myMap1=function(cb3){
    let arr11=[]
    for(i=0;i<this.length;i++){
        arr11.push(cb3(this[i]))
    }
    return arr11
}
var arr12=arr.myMap1(arr9)
console.log(arr12)
//filter method without using Array.prototype
function myFilter(arr15,cb4){
    let arr14=[]
    for(let i=0;i<arr15.length;i++){
        if(cb4(arr15[i])){
            arr14.push(cb4(arr15[i]))
        }
    }
    return arr14
}
var arr16=myFilter(arr,arr13)
console.log(arr16)
//filter method with using Array.prototype
Array.prototype.myFilter1=function (cb5){
    let arr18=[]
    for(let i=0;i<this.length;i++){
        if(cb5(this[i])){
            arr18.push(cb5(this[i]))
        }
    }
    return arr18
}
var arr19=arr.myFilter1(arr13)
console.log(arr19)
//Reduce method without using Array.prototype

function myReduce(arr2,cb,init){
    let acc1=init
    for(let i=0;i<arr2.length;i++){
      acc1=cb(arr2[i],acc1)  
    }
    return acc1

}
var arr5=myReduce(arr,arr3,0)
console.log(arr5)
//Reduce method with using Array.prototype
Array.prototype.myReduce1=function (cb1,init){
    let acc1=init
    for(let i=0;i<this.length;i++){
      acc1=cb1(this[i],acc1)  
    }
    return acc1
}
var arr6=arr.myReduce1(arr3,0)
console.log(arr6)


//polyfill of call apply and bind
const obj={
    name:'nishi',
    age:23,
    profession:'software engineer'
}

function info(city,location){
    console.log(`${this.name} is ${this.age} years old ${this.profession} lives at ${city} and exact location is ${location}`)
}

//CALL
Function.prototype.myCall=function(obj1,...args){
let currentobj1 = obj1 || globalThis;
    let randomProp = Math.random();
    while( currentobj1[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentobj1[randomProp] = this;
    let result = currentobj1[randomProp](...args);
    delete currentobj1[randomProp];
    return result;
    //or
    //obj1.in=this;
    //obj1.in(...args)

}
info.myCall(obj,'bangalore','whitefield')
//APPLY

Function.prototype.myapply=function(obj2,args){
   
    let currentobj2 = obj2 || globalThis;
    let randomProp = Math.random();
    while( currentobj2[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentobj2[randomProp] = this;
    let result = currentobj2[randomProp](...args);
    delete currentobj2[randomProp];
    return result;
    //or
    //obj2.in=this;
    //obj2.in(...args)

}
   
    
info.myapply(obj,['bangalore','whitefield'])
//bind

Function.prototype.mybind=function(obj3,...args){
    let currentobj3 = obj3 || globalThis;
    let randomProp = Math.random();
    while( currentobj3[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentobj3[randomProp] = this;
    return function(){
        let result = currentobj3[randomProp](...args);
    delete currentobj3[randomProp];
    return result;
    }
        //or
    //obj2.in=this;
    //return function(){
        //obj2.in(...args)
    //}
    
    }
var fun=info.mybind(obj,'bangalore','whitefield')
fun()
