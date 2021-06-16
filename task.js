var data = [
    {
   "FirstName":"Sam",
   "LastName":"Jackson",
   "employeeID":5698523,
   "Designation":"Manager",
   "LanguageExpertise":[
   "Java",
   "C#",
   "Python"
   ],
   "Car":{
   "Model":"Maruti Suzuki Swift",
   "MakeYear":2017,
   "Color":"Red",
   "Type":"Hatchback",
   "broughtOn":1611326817
   }
    },
    {
   "FirstName":"Tam",
   "LastName":"Richard",
   "employeeID":896586,
   "Designation":"Senior Manager",
   "LanguageExpertise":[
   "Ruby",
   "C#"
   ],
   "Car":{
   "Model":"Hyundai Verna",
   "MakeYear":2015,
   "Color":"Black",
   "Type":"Sedan",
   "broughtOn":1611326817
   }
    }, {
   "FirstName":"John",
   "LastName":"Cena",
   "employeeID":896580,
   "Designation":"Senior Manager",
   "LanguageExpertise":[
   "Ruby","Java",
   "C#"
   ],
   "Car":{
   "Model":"Hyundai Creta",
   "MakeYear":2015,
   "Color":"White",
   "Type":"SUV",
   "broughtOn":1611326817
   }
    },
    {
   "FirstName":"Ram",
   "LastName":"K",
   "employeeID":890580,
   "Designation":"Developer",
   "LanguageExpertise":[
   "Javascript",
   "HTML"
   ],
   "Car":{
   "Model":"Innova",
   "MakeYear":2017,
   "Color":"White",
   "Type":"MPV",
   "broughtOn":1611499617
   }
    }
]

// let buyCar = data.filter(car =>  car.Car.broughtOn == 1611326817)
// buyCar.forEach(item => {console.log(item)});

//---First----

// let buyCar = data.filter(car =>  car.Car.broughtOn === car.Car.broughtOn)
// buyCar.forEach(item => {console.log(item)});

//---second---

// let result = data.filter(lang =>{
//     if(lang.Car.MakeYear < 2017){
//         return lang.LanguageExpertise.push('C++');
//     }
// })
// result.forEach(item =>{console.log(item)})


//---third---

// let newArr = data.filter(arr => arr.LanguageExpertise.find(lang => lang === 'Java'))
// newArr.forEach(item =>{console.log(item)})

//--fourth---

// let newArr = data.filter(arr => arr.LanguageExpertise.find(lang => lang === 'C#'))
// newArr.map(addJs => addJs.LanguageExpertise.push('Javascript'))
// newArr.forEach(item => {console.log(item)})

// //--fifth---

// data.sort((x,y)=> x.Car.MakeYear - y.Car.MakeYear)
// data.forEach(item =>{console.log(item)})


//---sixth---

data.map(date =>console.log(new Date(date.Car.broughtOn)));

