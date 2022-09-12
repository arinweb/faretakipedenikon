const buttons = document.querySelectorAll(".button-container button");


buttons.forEach(button => {
  
  button.addEventListener("mousemove",e => {
    
    const x = e.layerX - 60;
    const y = e.layerY - 60;
    const icon = e.target.querySelector(".icon");
    const bg = e.target.querySelector(".bg");
    
    icon.style.transform = `translate(${x / 4}px,${y / 4}px)`;
    bg.style.transform = `translate(${x / 8}px,${y / 8}px)`;
    
  });
  
  button.addEventListener("mouseenter",e => {
    const icon = e.target.querySelector(".icon");
    const bg = e.target.querySelector(".bg");
    
    icon.style.transition = "all .15s ease";
    bg.style.transition = "all .15s ease";
    
    setTimeout(function(){
      icon.style.transition = "";
      bg.style.transition = "";
    },150);
  });
  
  button.addEventListener("mouseleave",e => {
    
    const icon = e.target.querySelector(".icon");
    const bg = e.target.querySelector(".bg");
    
    icon.style.transition = "all .25s ease";
    bg.style.transition = "all .25s ease";
    
    icon.style.transform = `translate(${0}px,${0}px)`;
    bg.style.transform = `translate(${0}px,${0}px)`;
    
    setTimeout(function(){
      icon.style.transition = "";
      bg.style.transition = "";
    },250);
  });
  
  
});
