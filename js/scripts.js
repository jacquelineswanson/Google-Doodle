console.log('OK');

gsap.from(".star", {
    opacity: 0,  
    duration: 2.5,
    delay: 1,
  });
  
  gsap.from(".smstar", {
    opacity: 0,  
    duration: 2.5,
    delay: 1.15,
  });
  
  gsap.to("#s30", {
    x: 400,
    y: 100,
    delay: 3,
    duration: 1.5,
    
  });