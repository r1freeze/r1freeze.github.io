document.addEventListener('DOMContentLoaded',function(){
    p_msg = document.getElementById('msg');
    document.getElementById('btn').addEventListener('click',
        function clickCallBack (e) {
            var target = e.target;
            console.log('Trig. elem:'+ target.nodeName+'/'+target.id);
            console.log('Event type:'+ e.type);
            p_msg.innerHTML = 
            `Trig. elem:${target.nodeName}/${target.id} <br/> Event type:${e.type}`;
            // `Trig. elem:${target.nodeName}/${target.nodeName} \n Event type:${e.type}`;// fail to change line in innerHTML
    },false);
},false);