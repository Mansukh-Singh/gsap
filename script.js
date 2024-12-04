var path = `M 10 100 Q 500 0 990 100`
var finalpath = `M 10 100 Q 500 100 990 100`

let string = document.querySelector('#string')
string.addEventListener("mousemove",(e)=>{
    path = `M 10 100 Q 500 ${e.y} 990 100`
    gsap.to("svg path",{
        attr: {d:path},
        duration: 0.001,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave",(e)=>{
    gsap.to("svg path",{
        attr: {d:finalpath},
        duration: 0.5,
        ease: "elastic.out(1.0,0.2)"
    })
})