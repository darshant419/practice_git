// map method usage


const numb = [22, 43, 56, 76, 90, 123];

let number = numb.map((item) => {
    return item *= 5;

})

// console.log(number);

const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

const per = persons.map((person) => {
    return (person.firstname + " " + person.lastname)
});

//   console.log(per);


// filter methods usage

const ganitha = [22, 44, 46, 48, 33, 99, 27, 53, 67, 23];

let pro = ganitha.filter((items) => {
    return items >= 55;
})

//   console.log(pro);



const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

let price = prices.filter((item) => {

    return item > 2000 && !Number.isNaN(item)
});

// console.log(price);


// Reduce method

const maggi = [3, 4, 10];

const numb1 = maggi.reduce(function (acc, curvalue) {
    // console.log(`arr:${acc} and curvalue:${curvalue}`);
    return acc + curvalue;

}, 0);

// console.log(numb1);

const users = [{ firstname: "darshan", secondname: "thomas", age: 30 },
{ firstname: "Deepika", secondname: "padukone", age: 40 }, 
{ firstname: "Rashmi", secondname: "bhat", age: 30 },
{ firstname: "salman", secondname: "khan", age: 55 },
{ firstname: "Elon", secondname: "Mask", age: 57 },
{ firstname: "Amanda", secondname: "cereni", age: 47 },
]

const name1 = users.reduce((acc, curvalue) => {
    if (curvalue.age === 30) {
        acc.push(curvalue.firstname);
    }
    return acc;
}, []);

console.log(name1);