class LineAnimation {
    /*
    constructor(startX, startY, endX, endY, number) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.currentX = startX;
        this.currentY = startY;
        this.speed = 0.005;
        this.displayNumber = number;
        this.isFinished = false;
    }*/

    constructor(args){
        this.startX = args.startX;
        this.startY = args.startY;
        this.endX = args.endX;
        this.endY = args.endY;
        this.currentX = args.startX;
        this.currentY = args.startY;
        this.speed = 0.005;
        this.displayNumber = args.number;
        this.isFinished = false;
    }






    draw() {

        //frame number display
        noStroke();
        textSize(24);
        text(this.displayNumber, this.startX + (this.startX < this.endX ? 20 : -20), this.startY + 40);

        //line draw

        strokeCap(ROUND); //line p5js attibutes
        strokeWeight(5);
        if (this.currentY < this.endY) { //line calculations
            console.log("disegno la lineases");
            if (this.startX < this.endX) {

                this.currentX += 300 * this.speed;
                this.currentY += 100 * this.speed;
            } else {

                this.currentX -= 300 * this.speed;
                this.currentY += 100 * this.speed;
            }
            this.speed+= 0.00025; 
        }
        else{
            this.isFinished = true;

        }

        if (this.currentY > this.endY) stroke("#62fc03"); //line color is green if completed
        else stroke(0);

        line(this.startX, this.startY, this.currentX, this.currentY); //draw line

        return this.isFinished;
    }
    moveUp(){
        this.startY -= 0.5;
        this.endY -= 0.5;
        this.currentY -= 0.5;
    }
}