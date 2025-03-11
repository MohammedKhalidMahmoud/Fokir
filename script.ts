const divs : NodeListOf<HTMLElement>=document.querySelectorAll('.counter');
// console.log(divs);

divs.forEach((div : HTMLElement)=>{
    const target : number=Number(div.getAttribute('data-target'));
    // console.log(typeof target); string
    let counter : number =0;
    const intv=setInterval(()=>{
        counter++;
        div.innerText=counter.toString();
        if(counter>=target){
            clearInterval(intv);
        }
    },10000/target);
}
);



    // console.log(div);    
    // const counterElement_1 = document.getElementById('counter-1');
    // const counterElement_2 = document.getElementById('counter-2');
    // const counterElement_3 = document.getElementById('counter-3');
    // const counterElement_4 = document.getElementById('counter-4');
    // let count_1 = 0,count_2=0, count_3=0, count_4=0;
    // function incrementCounter_1() {
    //     if(count_1===1000) clearInterval(interval_1);
    //     else{
    //         count_1++;
    //         counterElement_1.textContent = count_1;
    //     }    
    // }
    // function incrementCounter_2() {
    //     if(count_2===1500) clearInterval(interval_2);
    //     else{
    //         count_2++;
    //         counterElement_2.textContent = count_2;
    //     }    
    // }
    // function incrementCounter_3() {
    //     if(count_3===1200) clearInterval(interval_3);
    //     else{
    //         count_3++;
    //         counterElement_1.textContent = count_3;
    //     }    
    // }
    // function incrementCounter_4() {
    //     if(count_4===1000) clearInterval(interval_4);
    //     else{
    //         count_4++;
    //         counterElement_4.textContent = count_4;
    //     }    
    // }
    // const interval_1=setInterval(incrementCounter_1, 1);
    // const interval_2=setInterval(incrementCounter_2, 0.10);
    // const interval_3=setInterval(incrementCounter_3, 0.70);
    // const interval_4=setInterval(incrementCounter_4, 1);
    // console.log("Hello")
    const image=document.getElementById("img-1");
    function hide(){
        console.log("Hiding");
        image.style.display='none';
    }
    
   

    function display_all(){
        console.log("showing");
        image.style.display='block';
    }
    