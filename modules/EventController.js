class EventController{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.sender = true;
    }
    nextEvent(){

        var prevX = this.x;
        var prevY = this.y;
        var prevSender = (this.sender)? 0 : 1;

        this.x = (this.x == 300) ? 0 : 300;
        this.y += 100;
        this.sender = !this.sender;



        return {
            "startX": prevX, 
            "startY": prevY,
            "endX": this.x,
            "endY": this.y,
            "number": prevSender,
        }
    }
}