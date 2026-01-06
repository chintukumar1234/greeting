    function chintu(){
    const name=document.getElementById("name");
    const mobile=document.getElementById("mobile");
    const date=document.getElementById("date");
    const pro=document.getElementById("pro");
    if(name.value.trim()===''){
        document.getElementById("message1").innerHTML="Please enter the name";
        return;
    }else if(mobile.value.trim()===''){
        document.getElementById("message2").innerHTML="Please enter the mobile no....";
        return;
    }else if(date.value.trim()===''){
        document.getElementById("message3").innerHTML="Please enter the date";
        return;
    }else if(address.value.trim()===''){
        document.getElementById("message4").innerHTML="Please enter the address";
        return;
    }else if(pro.value.trim()===''){
        document.getElementById("message5").innerHTML="Please enter project details";
        return;
    }else{
        console.log(name.value,mobile.value,date.value,pro.value,address.value);
        name.value='';
        mobile.value='';
        address.value='';
        pro.value='';
        date.value='';
        return;
    }
}