// Closure - > A func that returns a func
var saver = function(value) {
    return function() {
        return value;
    }
}

var retriever = saver(10);

console.log(retriever());

var e = 10;

function sum(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    return function(f) {
                        return function(g) {
                            return a+b+c+d+e-f+g
                        }
                    }
                }
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)(5)(6)(7));