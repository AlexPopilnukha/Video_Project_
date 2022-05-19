let enjoy=['E','n','j','o','y']
let your = ['y','o','u','r']
let day= ['d','a','y']
let boxForLetters1=document.querySelector('#boxForLetters')
let boxForLetters2=document.querySelector('#boxForLetters2')
let boxForLetters3=document.querySelector('#boxForLetters3')



window.onload=  function (){

    let interval = setInterval(ff,300)
    let count=-1
    function ff (){
        count+=1
        boxForLetters1.innerText+=enjoy[count]
        if (count===enjoy.length-1){
            clearInterval(interval)
        }
    }
    let interval2 = setInterval(ff2,300)
    let count2=-1
    function ff2 (){
        count2+=1
        boxForLetters2.innerText+=your[count2]
        if (count2===your.length-1){
            clearInterval(interval2)
        }
    }
    let interval3 = setInterval(ff3,300)
    let count3=-1
    function ff3 (){
        count3+=1
        boxForLetters3.innerText+=day[count3]
        if (count3===your.length-2){
            clearInterval(interval3)
        }
    }
}
