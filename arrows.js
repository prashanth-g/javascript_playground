// arrows in action - 01

var animations = [
    'slideUp',
    'slideDown',
    'fadeIn',
    'whiteFade'
]

console.log(
    animations.map(
        animation => animation.length
    )
);

// arrows as methods
console.log("########### arrows in methods ############")
var func = {
    a: 10,
    b: () => console.log(this.a, this),
    c: function() {
      console.log(this.a, this);
    }
  }
  
func.b(); 
func.c(); // prints 10, Object {...}