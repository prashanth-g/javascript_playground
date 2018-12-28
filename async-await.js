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