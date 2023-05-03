
let total=0;
let buffer="0",fltBuffer=0;
const screen = document.querySelector(".screen");
let previusOperator;

function verify(value){
    if(isNaN(value) && value!="."){
        checkSymbol(value);
    }
    else{
        CheckNumber(value);
    }
    
    screen.innerText = buffer;

}

function checkSymbol(symbol){
    switch (symbol){
        case "C":
            total=0;
            buffer="0";
            break;
        case "=":
            Operation(previusOperator);
            buffer=total;
            break;
        case "←":
            if(buffer.length === 1){
                buffer="0";
            }else{
                buffer = buffer.substring(0,buffer.length-1)
            }
            break;
        case "+":
        case "-":
            if(buffer=== "0"){
                buffer='-';
                break;
            }
        case "x":
        case "/":
            assignment(symbol);
            buffer="0";         
    }
}

function CheckNumber(number){

    if(buffer==="0"){
        buffer = number;
        
    }
    else{
        buffer += number;
        
    }
    
    fltBuffer = parseFloat(buffer);
    
}

function Operation(Operator){
   if(Operator==="+"){
        total+=fltBuffer;
    }
   else if(Operator==="-"){
        total-=fltBuffer;
    }
   else if(Operator==="x"){
        total*=fltBuffer;
    }
    else if(Operator==="/"){
        total/=fltBuffer;
    }
}

function assignment(symbol){
    if(total==0){
        total=fltBuffer;
    }
    if(symbol=="+"){
        previusOperator="+";
    }
    if(symbol=="-"){
        previusOperator="-";
    }
    if(symbol=="x"){
        previusOperator="x";
    }
     if(symbol=="/"){
        previusOperator="/";
    }
}

function init(){ 
    const button = document.querySelector(".buttons");
    button.addEventListener("click",function(event){
        verify(event.target.innerText)
    });
}

init();