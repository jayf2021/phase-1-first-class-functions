function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return function named(){
        console.log("My name is Forest Gump")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('Run, Forest')
    }
}