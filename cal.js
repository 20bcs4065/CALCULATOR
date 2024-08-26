var num="";

function cle(){
    document.getElementById("calcu").value="";
   num="" ;
}

function val7(){
    num+="7";
    document.getElementById("calcu").value=num;
}
function val8(){
    num+="8";
    document.getElementById("calcu").value=num;
}
function val9(){
    num+="9";
    document.getElementById("calcu").value=num;
}

function val4(){
    num+="4";
    document.getElementById("calcu").value=num;
}

function val5(){
    num+="5";
    document.getElementById("calcu").value=num;
}

function val6(){
    num+="6";
    document.getElementById("calcu").value=num;
}

function val1(){
    num+="1";
    document.getElementById("calcu").value=num;
}
function val2(){
    num+="2";
    document.getElementById("calcu").value=num;
}

function val3(){
    num+="3";
    document.getElementById("calcu").value=num;
}
function val0(){
    num+="0";
    document.getElementById("calcu").value=num;
}

function pl(){
    num+="+";
    document.getElementById("calcu").value=num;
}

function mi(){
    num+="-";
    document.getElementById("calcu").value=num;
}

function mu(){
    num+="*";
    document.getElementById("calcu").value=num;
}

function di(){
    num+="/";
    document.getElementById("calcu").value=num;
}

function del(){
    num=num.slice(0, -1);
    document.getElementById("calcu").value=num;
    console.log('hi');
    
}
function per(){
    num+="%";
    document.getElementById("calcu").value=num;
}

function dot(){
    num+=".";
    document.getElementById("calcu").value=num;
}
function process(){
    console.log(num);
    var f="",m="",l="";
    const regex = /(\-?\d+(?:\.\d+)?)\s*([\+\-\*\/%])\s*(\-?\d+(?:\.\d+)?)/;
    var mat=num.match(regex);

    if(mat){
        f=mat[1];
        m=mat[2];
        l=mat[3];
    }    

    var fir=parseFloat(f);
    var las=parseFloat(l);
    var res=0;

    if(m=='+') res=fir+las;
    else if(m=='-') res=fir-las;
    else if(m=='*') res=fir*las;
    else if(m=='/') res=fir/las;
    else if(m=='%') res=fir%las;
    
    document.getElementById("calcu").value=res;
    num=res;
    num=num+"";
}