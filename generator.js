function* idGenerator() {
    var index = 0;
    while (index < index + 1) {
        yield index++;
    }
}
  
var gen = idGenerator();
  
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
  
  