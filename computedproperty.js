var i = 0;

var computedProperties = {
    ['property'+ ++i] : i,
    ['property'+ ++i] : i,
    ['property'+ ++i] : i,
    ['property'+ ++i] : i,
};

console.log(computedProperties.property1);

var param = 'type';

var config = {
    [param]: 'text',
    ['submit'+param.charAt(0).toUpperCase() + param.slice(1)]: 'direct'
}

console.log(config);