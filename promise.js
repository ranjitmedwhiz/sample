 function getUser() {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: 102,
                userName: 'Ranjit'
            });
        },3 *1000);
    })
}

 function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.userName} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 5 * 1000);
    });
}

 function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 6 * 1000);
    });
}
async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}
showServiceCost();
