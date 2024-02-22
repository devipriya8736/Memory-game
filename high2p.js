let val1 = null;
let val2 = null;
let val = null;
let id1=null,cid1=null;
let id2=null,cid2=null;
let arr1;
let ran;
let arr;
let player1 = true;
let player2 = false;
let k1=0;
let k2=0;
document.getElementById('i').value="Player1";   
function switchPlayer() {
    if(player1){
         player2=true;
         player1=false;
         document.getElementById('i').value="Player2";   
    }
    else{
         player1=true;
         player2=false;
         document.getElementById('i').value="Player1";   
    }
}

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
        toggleFlip(card);
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
        toggleFlip(card);
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
            if(player1){
                k1+=1;
                document.getElementById('i1').value=k1;
            }
            else{
                k2+=1;
                document.getElementById('i2').value=k2;
            }
            document.getElementById(id1).onclick = null;
            document.getElementById(id2).onclick = null;
            document.getElementById(card1).onclick=null;
            document.getElementById(card2).onclick=null;
            if(player1)
                player1=true;
            else
             player2=true;
             const modal = document.getElementById('Modal');
             const body = document.getElementById('score');
            if(k1==k2 && (k1+k2)==ran){
            document.getElementById('i').value="Draw";
            document.getElementById('score').innerText="Draw";
            modal.classList.add('show');
            modal.classList.add('fade') ;
            }
            else if(k1>k2 && (k1+k2)==ran){
            document.getElementById('i').value="Player1 wins";
            document.getElementById('score').innerText="Player1 wins";
            modal.classList.add('show');
            modal.classList.add('fade') ;
            }
            else if(k1<k2 && (k1+k2)==ran){
            document.getElementById('i').value="Player2 wins";
            document.getElementById('score').innerText="Player2 wins";
            modal.classList.add('show');
            modal.classList.add('fade') ;
            }
            body.style.height='75vh';
            body.style.boxShadow='0 0 20px rgb(0,0,0)'
            body.style.display='flex';
            body.style.justifyContent='center';
            body.style.alignItems='center';
            modal.style.display = 'block'; 
            modal.style.backgroundColor = 'rgba(0,0,0,0.5)'; 
            modal.style.padding = '2%'; 
            modal.style.fontSize = '60px';

            modal.addEventListener('click',()=>{
                modal.classList.remove('show');
                modal.style.display = 'none';
            });
        } 
        else {
            setTimeout(()=>{
                toggleFlip(card1);
                toggleFlip(card2);
            },1000);  
            switchPlayer();

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