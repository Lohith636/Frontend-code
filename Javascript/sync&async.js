console.log("1. Open BookMyShow");
console.log("2. Search Movie");
console.log("3. Select Time");
console.log("4. Select Seats");
console.log("5. Ticket Booked");

//set timmer
// setTimeout(() => {
//     console.log("1. Open BookMyShow");
// }, 1000);   
// setTimeout(() => {
//     console.log("2. Search Movie");
// }, 2000);
// setTimeout(() => {
//     console.log("3. Select Time");
// }, 3000);
// setTimeout(() => {
//     console.log("4. Select Seats");
// }, 4000);
// setTimeout(() => {
//     console.log("5. Ticket Booked");
// }, 5000);

//Callbacks;
setTimeout(() => {
    console.log("1. Open BookMyShow");
    setTimeout(() => {
        console.log("2. Search Movie");
        setTimeout(() => {
            console.log("3. Select Time");
            setTimeout(() => {
                console.log("4. Select Seats");
                setTimeout(() => {
                    console.log("5. Ticket Booked");
                }, 1000);
            }, 1000);
        }, 5000);
    }, 3000);
}, 8000);