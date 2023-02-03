function Box(x,y, txt, font, bg, color){
    let options = {
        friction: 0.3,
        restitution: 0.8
    }
    if(font==16){
        this.body = Bodies.rectangle(x, y, textWidth(txt) + 120, font+20, options)
    }
    else{
        this.body = Bodies.rectangle(x, y, textWidth(txt) + 30, font+15, options)
    }
    this.color=color
    this.txt=txt
    this.bg=bg
    this.font=font
    World.add(world, this.body)

    this.show = function(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(0)
        fill(this.bg)
        if(this.font==16){
            rect(0, 0, textWidth(this.txt) + 120, this.font+20, (this.font+20)/2)
        }
        else{
            rect(0, 0, textWidth(this.txt) + 30, this.font+15, (this.font+15)/2)
        }
        // text
        fill(this.color)
        textAlign(CENTER)
        strokeWeight(0)
        textStyle(500)
        textSize(this.font)
        if(this.font==16){
            text(this.txt, 0, this.font/2-this.font+14)
        }
        else{
            text(this.txt, 0, this.font/2-this.font+10)
        }
        pop()
    }
}