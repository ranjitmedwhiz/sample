
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ]
// let req = urls.map(url => fetch(url))
// Promise.all(req)
// .then(responses => responses.forEach(response => 
//     alert(`${response.url}: ${response.status}`)))


// async function display(){
// let promise = new Promise(function(resolve ,reject){
//     setTimeout(() => reject(new Error('Done!!')),3000)
//   })
// let myPromise = await promise;
// console.log(myPromise)
// }
// display()


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    },3000);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});
