function receivesAFunction(callback){
    console.log(callback());
}   

function returnsANamedFunction() { 
    return function named(){
        console.log("named");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("anonymous");
    }
}

