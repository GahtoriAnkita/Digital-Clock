setInterval(()=>{
    let d = new Date().toLocaleTimeString()
    // let t = d.toLocaleTimeString();
     document.getElementById('time').innerHTML=d;
    },1000
    )