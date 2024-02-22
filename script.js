let val1 = null;
let val2 = null;
let val = null;
let id1=null,cid1=null;
let id2=null,cid2=null;
let arr1;
let ran;
let arr;
let score;
function toggleFlip(cardid) {
    let card=document.getElementById(cardid);
    card.classList.toggle('flipped');
  }
  
function call(i, id, cid,card) {
    val = arr[i];
    ce= document.getElementById(cid);
    ce.innerText = setcolor(val.toString());
    id1 = id; cid1 = cid;card1=card;

    if (id1 == id2) {
       toggleFlip(card1);
        return;
    }

    if (val1 == null) {
        val1 = val;
        id2 = id; cid2 = cid;card2=card;
    } else {
        val2 = val;
    }
    card='card1';
    [val1, val2] = check(val1, val2, id1, id2,card1,card2);
}

function call1(i, id, cid,card) {
    val = arr1[i];
    ce= document.getElementById(cid); 
    ce.innerText = setcolor(val.toString());  
    id1 = id; cid1 = cid;card1=card;

    if (id1 == id2) {
        toggleFlip(card1);
        return;
    }

    if (val1 == null) {
        val1 = val;
        id2 = id; cid2 = cid;card2=card;
    } else {
        val2 = val;
    }

    [val1, val2] = check(val1, val2, id1, id2,card1,card2);
}

let k=0;


function setcolor(val){
   const obj={
    "1":"😀","2":"🐶","3":"🥶","4":"🥵",
    "5":"😈","6":"👹","7":"🤖","8":"👽",
    "9":"💀","10":"🤢","11":"🌚","12":"⚽",
    "13":"🥎","14":"💩","15":"🤡","16":"🙈"
   }
   return obj[val];
}
function check(val1, val2,id1,id2,card1,card2) {
    if (val1 !== null && val2 !== null) {
        if (val1 == val2) {
            k+=1;
            document.getElementById('i').value=k;
            score=document.getElementById('i').value
            document.getElementById(id1).onclick = null;
            document.getElementById(id2).onclick = null;
            document.getElementById(card1).onclick=null;
            document.getElementById(card2).onclick=null;
        } 
        else {
            setTimeout(()=>{
                toggleFlip(card1);
            toggleFlip(card2);
            },1000);  
        }
        if(score==ran){
            let diff_min=0;
            let diff_sec=0;
            EndTime = new Date().getTime();
            let difference=EndTime-startTime;
            diff_sec=difference/600;
            if(diff_sec>=60){
                diff_min+=1
                diff_sec=0;
            }
            diff_sec=Math.ceil(diff_sec);
            if(diff_min<10)
            {
                diff_min=`0${diff_min}`;}
                if(diff_sec<10){
                diff_sec=`0${diff_sec}`;
            }
            console.log(`${diff_min}:${diff_sec}`);
            document.getElementById('score').innerText=`${diff_min}:${Math.ceil(diff_sec)}`;
            const modal = document.getElementById('Modal');
            const body = document.getElementById('score');
            body.style.height='75vh';
            body.style.boxShadow='0 0 20px rgb(0,0,0)'
            body.style.display='flex';
            body.style.justifyContent='center';
            body.style.alignItems='center';
            modal.classList.add('show');
            modal.classList.add('fade') ;
            modal.style.display = 'block'; 
            modal.style.backgroundColor = 'rgba(0,0,0,0.5)'; 
            modal.style.padding = '2%'; 
            modal.style.fontSize = '60px';

            modal.addEventListener('click',()=>{
                modal.classList.remove('show');
                modal.style.display = 'none';
            });
        }
        return [null,null];
    } else {
        //document.getElementById('i').value = "";
        return [val1,val2];
    }
}
let EndTime;
let startTime ;
function random_val(range_value){
    startTime = new Date().getTime();
    console.log(startTime);
    ran=range_value;
    let myset=new Set();
    let myset1=new Set();
    for(let i=0;myset.size<range_value;i++)
    {
        myset.add(Math.ceil(Math.random()*range_value));
    }
    for(let i=0;myset1.size<range_value ;i++){
        myset1.add(Math.ceil(Math.random()*range_value));
    }
    arr1=Array.from(myset1);
    arr=Array.from(myset);
}