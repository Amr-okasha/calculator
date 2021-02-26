var monitorr =document.getElementById("screen")
var selectNumbers=document.getElementsByClassName("numberid")
var selectOprSign=document.getElementsByClassName("signopid")
var clearSignOp  =document.getElementsByClassName("clearoperator")
var signDot      =document.getElementsByClassName("signdot")  
var signEqualOp  =document.getElementsByClassName("equaloperator")
var changeStyle  =monitorr.style.direction="ltr"

for(i=0;i<selectNumbers.length;i++){
        selectNumbers[i].addEventListener("click",displaynumber)
}
function displaynumber(){
        switch(true){
        case(monitorr.value==0):
                monitorr.value=this.textContent;
                break;     
        default:
                monitorr.value+=this.textContent}
        
        }
  // charAt built-in-function it used to get the last charachter
         //case used with this condition to prevent repeating"+-*/"
         //if it has written on the end 

for(i=0;i<selectOprSign.length;i++){
         selectOprSign[i].addEventListener("click",displayOpSign)
 }
        function displayOpSign(){
         var monitorTest=monitorr.value
         switch(true){
         case(monitorTest===""):
         break;     
         case(monitorTest==="0"):
         case(monitorTest.charAt(monitorTest.length-1)==="+"):
          break;
          case(monitorTest.charAt(monitorTest.length-1)==="-"):
          break;
          case(monitorTest.charAt(monitorTest.length-1)==="/"):
          break;
          case(monitorTest.charAt(monitorTest.length-1)==="*"):
          break;
         default:
                console.log(monitorr.value)
                 monitorr.value+=this.textContent}
 }
/*
         //test helps to split an item with diffrent charachter to array
         //split(),join() are built-in-functions used together to split multiple
         //charachters       
        var test="amr+ahmed-khaled*ali*sara/liala"
        var testSplit=test.split("+").join("-").split("-").join("-").split("*").join("-").split("/").join("-").split("-")
        var testLastString=testSplit[testSplit.length-1]
        console.log(testLastString)
*/



        signDot[0].addEventListener("click",displayDot)
        function displayDot(){
         var screenMonitor=monitorr.value;
         var screenSplit=screenMonitor.split("+").join("-").split("-").join("-").split("*").join("-").split("/").join("-").split("-")
         var lastArrayItem=screenSplit[screenSplit.length-1]
         console.log(lastArrayItem)
         switch(true){
             
        case(lastArrayItem.indexOf(".")!==-1):

        break;  
        default:
                monitorr.value+="."
}
}


 clearSignOp[0].addEventListener("click",clearScreen)
 function clearScreen(){
                monitorr.value=0;

 }

         signEqualOp[0].addEventListener("click",equalOperation)
         function equalOperation(){
                 monitorr.value="="+eval((monitorr.value))
console.log(monitorr.value)
         };
 

var test="10+12-16*200/10"

        var testSplit=test.split("+").join(" + ").split("-").join(" - ").split("*").join(" * ").split("/").join(" / ")
        var testLastString=testSplit[testSplit.length-1]
        var SplitAgain=testSplit.split(" ")

        console.log(eval(test))
        console.log(SplitAgain.toStr)
        console.log(Number(SplitAgain[0])+Number(SplitAgain[3]))