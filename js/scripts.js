console.log('OK');

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#blackhole", {
  scale: 3,
  duration: 5,
  delay: 2
});

gsap.to("#blackhole", {
  duration: .85,
  rotate: 360,
  repeat: -1,
  ease: "none"
});

gsap.to("#ufo",{
  opacity: 1,
  delay: 4,
  duration: 6
})

gsap.to("#ufo", {
  duration: 20, 
  ease: "back.inOut",
  immediateRender: true,
  motionPath: "#path",
  yoyo: true,
  scale: 7,
  repeat: -1,
  delay: 1
});

gsap.to("#satellite", {
  x: 800,
  y: -400,
  delay: 4,
  duration: 17,
  ease: "none"
});

gsap.from(".twinkle", {
  opacity: .5,  
  duration: .35,
  repeat: -1,
  delay: 1,
  yoyo: true
});

gsap.from("#s19", {
  opacity: .25,  
  duration: .5,
  repeat: -1,
  yoyo: true
});

gsap.from("#s25", {
  opacity: .25,  
  duration: .35,
  repeat: -1,
  yoyo: true
});

gsap.from("#s26", {
  opacity: .6,  
  duration: .15,
  repeat: -1,
  yoyo: true
});

gsap.from("#s27", {
  opacity: .75,  
  duration: .45,
  repeat: -1,
  yoyo: true
});

gsap.from("#s28", {
  opacity: .35,  
  duration: .45,
  repeat: -1,
  yoyo: true
});

gsap.from("#s29", {
  opacity: .5,  
  duration: .75,
  repeat: -1,
  yoyo: true
});

gsap.from("#s30", {
  opacity: .25,  
  duration: .65,
  repeat: -1,
  yoyo: true
});

gsap.from("#s31", {
  opacity: .3,  
  duration: .45,
  repeat: -1,
  yoyo: true
});

gsap.from("#s8", {
  opacity: .75,  
  duration: .25,
  repeat: -1,
  yoyo: true
});

gsap.from("#s9", {
  opacity: .7,  
  duration: .15,
  repeat: -1,
  yoyo: true
});

gsap.from("#s10", {
  opacity: .7,  
  duration: .25,
  repeat: -1,
  yoyo: true
});

gsap.from("#s32", {
  opacity: .8,  
  duration: .85,
  repeat: -1,
  yoyo: true
});

gsap.from("#s33", {
  opacity: .85,  
  duration: .8,
  repeat: -1,
  yoyo: true
});

gsap.to("#s3", {
  x: 400,
  y: 100,
  delay: 3,
  duration: 1.75,
  
});

