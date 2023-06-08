console.log('person1:Shows Ticket');
console.log('person2:Shows Ticket');
const preMovie = async()=> {
    const wifeBringTicket= new Promise((resolve, reject) => {
        setTimeout(()=>resolve('ticket'),1000)
    })
    const getpopcorn=new Promise((resolve, reject) =>resolve(`popcorn`));
    const addButter=new Promise((resolve, reject) =>resolve('Butter'));
    const getcoldDrink=new Promise((resolve,reject)=>resolve(`coldDrink`));
    let ticket=await wifeBringTicket;
    console.log(`wife:i have ${ticket}`)
    console.log("husband :let's Go in");
    console.log("Wife:i need Popcorn");
    
    let popcorn =await getpopcorn;
    console.log(`Husband :here is your ${popcorn}`);
    console.log("Wife:Add some butter to it");
    
    let butter =await addButter;
    console.log(`Husband: ${butter} is added`);
    console.log(`Wife:i am thirsty`)
    let drink=await getcoldDrink;
    console.log(`Husband:here is your ${drink}`)
    return ticket;
};
preMovie().then((ticket)=>console.log(`person3:shows ${ticket}`))
console.log('person4:Shows Ticket');
console.log('person5:Shows Ticket');