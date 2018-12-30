function resolveAfterGivenSeconds(time, input) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(input);
        }, time);
    });
}

var add = async function(time, input) {
    var a = await resolveAfterGivenSeconds(time, 20);
    var b = await resolveAfterGivenSeconds(time, 30);
    return input+a+b;
}

add(1000, 10).then(v => {
    console.log(v);
});

// concurrent start
var resolveIn2Seconds = function() {
    console.log("starting resolveIn2Seconds");
    return new Promise(resolve => {
      setTimeout(function() {
        console.log("slow resolveIn2Seconds is done");
      }, 3000);
    });
};
  
var resolveIn1Second = function() {
    console.log("starting resolveIn1Second");
    return new Promise(resolve => {
      setTimeout(function() {
        console.log("slow resolveIn1Second is done");
      }, 1000);
    });
};
  
var concurrentStart = async function() {

    const slow = resolveIn2Seconds();  
    const fast = resolveIn1Second();
  
    console.log(await slow);
    console.log(await fast);
}

concurrentStart();