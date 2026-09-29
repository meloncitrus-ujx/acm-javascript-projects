export function clearvalue(param){
    param.addEventListener("click" , function() {
        param.value="";   
    }, {once: true}
);
}

/* 
runs event handler fn only once then removes it 
addEventListener( type, function() {} , {once: }) --> third argument 
*/