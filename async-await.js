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

add(2000, 10).then(v => {
    console.log(v);
});

// concurrent start
var resolveIn3Seconds = function() {
    console.log("starting resolveIn3Seconds");
    return new Promise(resolve => {
      setTimeout(function() {
        console.log("slow resolveIn3Seconds is done");
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

    const slow = resolveIn3Seconds();  
    const fast = resolveIn1Second();
  
    console.log(await slow);
    console.log(await fast);
}

concurrentStart();