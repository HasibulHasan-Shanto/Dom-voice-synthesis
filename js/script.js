let question=document.querySelector("input")
let button =document.querySelector("button")
let result =document.querySelector("h1")

button.addEventListener('click',function(){
    console.log(question.value);
    if(question.value=="what is your name?"){
         result.innerHTML="My name is Hasibul Hasan Shanto"
        let utterance = new SpeechSynthesisUtterance("My name is Hasibul Hasan Shanto");
        speechSynthesis.speak(utterance);
    
    }
    else if(question.value=="how old are you?"){
         result.innerHTML="My old is 30"
        let utterance = new SpeechSynthesisUtterance("My old is 30");
        speechSynthesis.speak(utterance);
    
    }
    else if(question.value=="where are you from?"){
         result.innerHTML="im from Dhaka"
        let utterance = new SpeechSynthesisUtterance("im from Dhaka");
        speechSynthesis.speak(utterance);
    
    }
   else if(question.value=="Which class are you in study?"){
         result.innerHTML="Diploma 4th semester"
        let utterance = new SpeechSynthesisUtterance("Diploma 4th semester");
        speechSynthesis.speak(utterance);
    
    }

})