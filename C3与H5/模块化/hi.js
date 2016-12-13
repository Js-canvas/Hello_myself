define(function(require,exports,modile){
    var hello = require("./hello");
    exports.fn = function(){
        console.log("this is hi.js");
        hello.sayHello();
    }
})