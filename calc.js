let buttons=document.querySelectorAll('button');
let screen=document.getElementById('screen');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=='X'){
            buttontext='*';
            screen.value+=buttontext;
        }else if
           ( buttontext=='C'){
               screen.value="";

        }else if (buttontext=='='){

        
        screen.value=eval(screen.value);
        }else{
            screen.value+=buttontext;

        }

    })
}