const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconanimation(){var videocon = document.querySelector("#video")
var playbutton = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbutton,{
        scale: 1,
        opacity: 1

    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbutton,{
        scale: 0,
        opacity: 0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbutton,{
        left:dets.x-50,
        top:dets.y-80 
    })
})}
videoconanimation()

function titleloadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    })

    gsap.from("#page1 #video",{
        scale: 0.9,
        opacity: 0,
        delay: 1,
        duration: 0.9 
    })
}
titleloadinganimation()