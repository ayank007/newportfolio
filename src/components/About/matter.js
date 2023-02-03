const matters = document.getElementById("matters")
// Matter js
// module aliases
const Engine = Matter.Engine,
    World = Matter.World,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Composite = Matter.Composite

var engine
var world
var boxes = []
var ground
var mouseConstraint
var font

function setup(){
    let width = matters.offsetWidth
    let height = matters.offsetHeight
    canvas = createCanvas(width, height)
    canvas.parent(matters)
    engine = Engine.create()
    world = engine.world
    Engine.run(engine)
    let options = {
        isStatic: true,
        friction: 0.3,
        restitution: 0.8
    }

    // initiate mouse
    var mouse = Mouse.create(canvas.elt)
    var mouseParams = {
        mouse: mouse,
        constraint: {
            stiffness: 0.1,
        }
    }
    
    mouseConstraint = MouseConstraint.create(engine, mouseParams)
    mouseConstraint.mouse.pixelRatio = pixelDensity()
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel)
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel)   
    World.add(world, mouseConstraint)

    // setting Walls
    ground = Bodies.rectangle(width, height, width * 2, 10, options)
    let wallLeft = Bodies.rectangle(0, height / 2 - 500, 1, height + 1000, options)
    let wallRight = Bodies.rectangle(width, height / 2 - 500, 10, height + 1000, options)
    let ceiling = Bodies.rectangle(width / 2, 0, width, 1, options)
    World.add(world, ground)
    World.add(world, wallLeft)
    World.add(world, wallRight)
    World.add(world, ceiling)

    let textArr = [
        ["GIT","#7ED4EF","black"],
        ["C","#004074","white"],
        ["PowerPoint","#2575b6","white"],
        ["Firebase","#004074","white"],
        ["React","#2575b6","white"],
        ["Svelte","#2575b6","white"],
        ["Tailwind","#EC685D","white"],
        ["SQL","#7ED4EF","black"],
        ["PHP","#47B5A3","white"],
        ["Typescript","#EC685D","white"],
        ["Photoshop","#EC685D","white"],
        ["Excel","#EC685D","white"],
        ["Adobe XD","#EC685D","white"],
        ["GSAP","#EC685D","white"],
        ["Python","#EC685D","white"],
        ["JavaScript","#EC685D","white"],
        ["Node","#EC685D","white"],
        ["MVC","#EC685D","white"],
        ["Figma","#EC685D","white"],
    ]

    if (window.matchMedia("(max-width: 700px)").matches) {
        font = 12
    } else {
        font = 16
    }    

    for(let i in textArr){
        let txt = textArr[i][0]
        let bg = textArr[i][1]
        let color = textArr[i][2]
        boxes.push(new Box(Math.random() * width, 0, txt, font, bg, color))
    }
}

function makeCanvasScrollable(){
    document.querySelector("#matters canvas").onwheel = function(e){}
}

function draw(){
    background("#DAF5FC")
    for(let i = 0;i<boxes.length; i++){
        boxes[i].show()
    }
    fill(170)
    rectMode(CENTER)
    rect(ground.position.x, ground.position.y + 30, width, 30)
    // makeCanvasScrollable()
}

// function touchMoved(e) {
//     // prevent default
//     return false
// }

// :") custom scroll on canvas section for mobile
var ts
$(document).bind('touchstart', function (e){
    ts = e.originalEvent.touches[0].clientY
})
$(document).bind('touchend', function (e){
    var te = e.originalEvent.changedTouches[0].clientY
    let diff = (ts - te) * 5
    if(e.target.classList.value == "p5Canvas"){
        document.documentElement.scrollTop += diff
    }
})