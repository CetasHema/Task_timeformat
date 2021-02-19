var dt=new Date();


// var d= dt.toLocaleTimeString();
function time()
{
   
    console.log(dt);
document.getElementById("lb1").innerHTML=dt;
}

function con()
{
    var a=dt.toLocaleString("ta-IN");
    var b=dt.toLocaleString("en-IN");
   
    // var a = dt.getDate()+'-'+(dt.getMonth()+1)+'-'+dt.getFullYear();
    // var b = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    document.getElementById("lb2").innerHTML=a;
    document.getElementById("lb3").innerHTML=b;
    
    //  document.getElementById("lb3").innerHTML=d;


}
