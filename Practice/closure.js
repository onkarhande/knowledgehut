function getCounter() {
    let counter = 1;
    return function () {
        console.log(counter);
        counter++;       
    }
}

let incrementCounter = getCounter();

incrementCounter()

incrementCounter()