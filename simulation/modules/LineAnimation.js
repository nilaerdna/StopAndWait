
class LineAnimation {

  constructor(args) {
    if (args != null ){ //normal constructor with parameters
      this.startX = args.startX; 
      this.startY = args.startY;
      this.endX = args.endX;
      this.endY = args.endY;
      this.currentX = args.startX;
      this.currentY = args.startY;
      this.speed = 0.005;
      this.verticalSpeed = 0.005;
      this.displayNumber = args.displayNumber;
      this.isFinished = false;
      this.isDeleted = false;
    }
    else { //empty constructor for an instance of a line
      this.startX = -10;
      this.startY = -10;
      this.endX = -20;
      this.endY = -20;
      this.currentX = -10;
      this.currentY = -10;
      this.speed = 0;
      this.verticalSpeed = 0;
      this.displayNumber = "empty";
      this.isFinished = false;
      this.isDeleted = false;
    }
    
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

    if (this.currentY > this.endY) stroke("#62fc03");
    //line color is green if completed
    else stroke(0);

    

    line(this.startX, this.startY, this.currentX, this.currentY); //draw line

    if(!this.isFinished){ //draws the envelope or the ack 
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


    return this.isFinished;
  }

  moveUp() {
    let movement = 100 * this.verticalSpeed;
    this.startY -= movement;
    this.endY -= movement;
    this.currentY -= movement;
    this.verticalSpeed += 0.0005;
    if (this.endY < 0) return true;
    else return false;
  }
}
