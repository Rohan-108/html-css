//by funtions
const TypeWriter=function(txtElement,words,wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting=false;

};
//type Method
TypeWriter.prototype.type=function(){
    //current index of word
    const current=this.wordIndex%this.words.length;
    //get full text of current text
    const fullTxt=this.words[current];
    //chevk if deleting
    if(this.isDeleting){
        this.txt=fullTxt.substring(0,this.txt.length-1);
    }else{
        this.txt=fullTxt.substring(0,this.txt.length+1);
    }
        this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;
        // type speed
        let typeSpeed=300;
        typeSpeed=this.isDeleting?typeSpeed/=2:typeSpeed;
        //if word is compklete
        if(!this.isDeleting && this.txt===fullTxt){
            typeSpeed=this.wait;
            this.isDeleting=true;

        }else if(this.isDeleting && this.txt===''){
            this.isDeleting=false;
            this.wordIndex++;
            typeSpeed=500;
        }
    setTimeout(()=>this.type(),typeSpeed);
}
//Init on DOM load
document.addEventListener('DOMContentLoaded',init);
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement,words,wait);
}