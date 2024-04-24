function add()
    
{
    let n1=document.getElementById('txtNumber1').value;
    let n2=document.getElementById('txtNumber2').value;
    let result=parseInt(n1)+parseInt(n2);
    document.getElementById('lblResult').innerHTML=result;
}
