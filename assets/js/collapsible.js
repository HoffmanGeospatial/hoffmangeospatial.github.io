var i,coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",(function(){this.classList.toggle("active");var l=this.nextElementSibling;"block"===l.style.display?l.style.display="none":l.style.display="block"}));