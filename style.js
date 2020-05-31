        window.onscroll = function(){        
    var oDiv = document.getElementById('div1');       
     var scrollTop =document.documentElement.scrollTop||document.body.scrollTop;//浏览器兼容        
     startmove(document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop)                // document.documentElement.clientHeight 页面可视区高度   
}            
var timer = null;    

//悬浮框缓冲运动

function startmove(iTarget){        
    var oDiv = document.getElementById('div1');
            
    clearInterval(timer);       
    timer = setInterval(function(){                        
        var speed = (iTarget-oDiv.offsetTop)/4;            
        speed = speed>0?Math.ceil(speed):Math.floor(speed);           
         if(oDiv.offsetTop == iTarget){               
              clearInterval(timer);          
         }
             else{                
                 oDiv.style.top = oDiv.offsetTop +speed+'px';            
             }
            },30)
     } 
        