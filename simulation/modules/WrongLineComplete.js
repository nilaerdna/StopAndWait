
class WrongLineComplete extends LineAnimation {
    constructor(args) {
        super(args);
    }
    draw() {

        //frame number display
        noStroke();
        textSize(24);
        text(
            this.displayNumber,
            this.startX + (this.startX < this.endX ? 20 : -20),
            this.startY + 40
        );

        //line draw
        strokeCap(ROUND); //line p5js attibutes
        strokeWeight(5);
        if (this.currentY < this.endY) {
            //line calculations
            console.log("disegno la lineases");
            if (this.startX < this.endX) {
                this.currentX += 300 * this.speed;
                this.currentY += 100 * this.speed;
            } else {
                this.currentX -= 300 * this.speed;
                this.currentY += 100 * this.speed;
            }
            this.speed += 0.00025;
        } else {
            this.isFinished = true;
        }

        if (this.currentY > this.endY) stroke("#eb281a");
        //line color is green if completed
        else stroke(0);

        if (this.currentY > this.endY) image(cross, this.currentX, this.currentY - 10, 30, 30);

        if (!this.isFinished) { //draws the envelope or the ack 
            if (this.startX < this.endX) {
                image(env, this.currentX, this.currentY - 5, 30, 20);
            }
            else {
                noStroke();
                textSize(24);
                text(
                    "ACK",
                    this.currentX, this.currentY - 20
                );
            }
        }

        line(this.startX, this.startY, this.currentX, this.currentY); //draw line

        return this.isFinished;
    }
}