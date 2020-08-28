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
        if(args!= null){
            this.startX = args.startX;
            this.startY = args.startY;
            this.endX = args.endX;
            this.endY = args.endY;
            this.currentX = args.startX;
            this.currentY = args.startY;
            this.speed = 0.005;
            this.displayNumber = args.number;
            this.isFinished = false;
            this.case = args.case;
            
        }
        else{
            this.startX = -10;
            this.startY = -10;
            this.endX = -20;
            this.endY = -20;
            this.currentX = -10;
            this.currentY = -10;
            this.speed = 0;
            this.displayNumber = 0;
            this.isFinished = false;
            this.case = 0;
        }
        
    }






    draw(img) {
        if(this.case == 1){
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
                this.speed += 0.00025;
            }
            else {
                this.isFinished = true;

            }

            if (this.startX < this.endX) {
                if (this.currentY < this.endY) image(img, this.currentX, this.currentY, 32, 24);
            } else {
                if (this.currentY < this.endY) text("ACK", this.currentX, this.currentY - 20);
            }

            if (this.currentY > this.endY) stroke("#62fc03"); //line color is green if completed
            else stroke(0);

            line(this.startX, this.startY, this.currentX, this.currentY); //draw line


            return this.isFinished;
        }
        else if(this.case == 2){
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
                this.speed += 0.00025;
            }
            else {
                this.isFinished = true;
                loadImage("../images/cross.png", img =>{
                    image(img, this.currentX, this.currentY, 32, 32);
                });

            }

            if (this.startX < this.endX) {
                if (this.currentY < this.endY) image(img, this.currentX, this.currentY, 32, 24);
            } else {
                if (this.currentY < this.endY) text("ACK", this.currentX, this.currentY - 20);
            }

            if (this.currentY > this.endY) stroke("#e01919"); //line color is green if completed
            else stroke(0);

            line(this.startX, this.startY, this.currentX, this.currentY); //draw line


            return this.isFinished;
        }
        //frame number display
        
    }
    moveUp(){
        this.startY -= 2;
        this.endY -= 2
        this.currentY -= 2;
        if(this.endY<0) return true;
        else return false;
    }
}