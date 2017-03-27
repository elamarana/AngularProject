var app = angular.module("CalcApp", []);
app.controller("calcCtrl", Calculator)
app.controller("TimeCtrl", TimeCtrl);
app.controller("TimeCtrl2", TimeCtrl2);

this.nameList = [{"name":"ELamaran", "age":10},{"name":"Raju","age":10}];
this.myList = [1,2,3,5];
this.operation = '';
this.resultvalue = 0;
function TimeCtrl(){
     this.currentTime = new Date();
     this.userName = "<default>";
    this.updateTime = function (){
        console.log("Button Clicked");
        this.currentTime = new Date();
        this.testProp = "20";
        
    }
}
function TimeCtrl2(){
   this.testProp = "10";
}

function Calculator(){
    console.log();
      
    this.submitButton = function(operator){
        this.operation = '';
        this.resultvalue = 0;
        console.log(operator);
        var num1 = parseFloat(this.firstNum);
        var num2 = parseFloat(this.secondNum);
        this.operation = operator;
        if(operator === '+'){
            this.resultvalue = num1  + num2;    
        }
        
        if(operator === '-'){
            this.resultvalue = num1  - num2;    
        }
        
        if(operator === '*'){
            this.resultvalue = num1  * num2;    
        }
        
        if(operator === '/'){
            this.resultvalue = num1  / num2;    
        }

    }
}