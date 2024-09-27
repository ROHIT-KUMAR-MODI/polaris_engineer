/*const person = {
    firstname:"ROHIT KUMAR" ,
    lastname: "modi",
    Address:{
        state:"uttarpradesh",
        city:"lucknow",
    }
}
console.log(person.Address.city)
const fruit=["BANANA","LITCHI","WATERMELON","POMEGRANATE"]
let size=fruit.length
console.log(size)
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log({}+[])
console.log(typeof({}+[]))
console.log({})
console.log({}+"")
console.log({}+"Hello")
console.log("Employee1")
console.log("name:","DHRUV")
console.log("age:",20)
console.log("salary:",45000)
console.log("Employee2")
console.log("name:","RAJ")
console.log("age:",25)
console.log("salary:",54000)
const Emp1={
    name:"Sam",
    age:25,
    salary:60000
}
console.log(Emp1)
const Emp2={
    name:"Suraj",
    age:40,
    salary:50000
}
console.log(Emp2)*/
/*function greet() {
    console.log("hello world")
    console.log("inside greet")
}
greet();
console.log("after greet")
function welcome(){
    console.log("Ashutosh")
} 
console.log("ashutosh is a good boy")
//console.log("ashutosh is a good boy")
function welcome(name){
  console.log(name)
}
welcome("Rohit")
welcome("Ashutosh")
welcome("Abhijit")*/
/*function substract(a,b,c){
s=a-b+c
console.log(s)
}
d=56
e=44
substract(d,e);
/*function printName(firstname,lastname){
    console.log(firstname)
    console.log(lastname)
}
printName("Rohit","Modi")
function greet(){
    console.log("hello world")
    return("my name is rohit")
    console.log("i am a boy")
}
a=greet()
console.log(a)
let firstname="John"
let lastname="Doe"
let text=`Welcome${firstname},${lastname}`
console.log(text)
function addnumber(f,g){
    s=f+g
    return s
}
f=756
g=65
 v=addnumber(f,g)
 console.log(v)  
 function multiply(m,n,o){
    p=m*n*o
    return p  
 } 
 g=4
 h=2
 i=3
 r=multiply(g,h,i)
 console.log(r)*/
 function Averagescore(){
    const student={ 
        fullname:"sruti",
        gender:"female",
        rollno: 45,
        marks:[500,400,200,300]
    }
 let sum= student.marks[0]+student.marks[1]+student.marks[2]+student.marks[3]
 let total=student.marks.length
 let average= sum/total
 console.log(average)
}
Averagescore()
/*function add(num1,num2){
    console.log("this is a add function")
    return num1+num2
    sub (num1,num2)
    console.log("completed")
}
console.log("result",add(5,6))
function sub(num1,num2){
    return num1-num2
}
console.log("result",sub(45,40))*/
/*const products=[
    {name:"samsung", price:15000,quantity:4}
    {name:"VIVO", price:25000,quantity:5}
    {name:"NOKIA", price:5000,quantity:2}
]
function calculate_total_avg(products){
    let total=products[0].priceproducts[0].quantity
    priceproducts[1].priceproducts[1].quantity
    priceproducts[2].priceproducts[2].quantity
    console.log(total)
}*/
//calculate_total_avg(products)
/*function double(a){
    s=a*2
    return s 
}
B=double(115)
console.log(B)*/
// write a code of function for the given no. finding its middle number and multiply by any number?
function operation(c){
        let len=c.length
        let K =Math.floor(len/2)
        let value=c[K]
        return value*2
}    
let res=operation("462")
console.log(res)
//write a js function which takes four parameters name,course,roll no.,age and print into an introduction sentence?
function js(a,b,c,d){
    console.log("My name is "+ (a)+" " +"and I am "+ (d)+" "+ "years old. I am studying in "+ (b)+" " +"first semester and my roll number is "+ (c)+".")
}
js("Rohit","Btech",19,18)
let object={
    "first Name": "Dhruv",
    "age":19,
    "rollnumber":45
}
console.log(object)
