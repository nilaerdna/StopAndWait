class EventController{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.sender = true;
        this.case = 1;
    }
    nextEvent(){

        var prevX = this.x;
        var prevY = this.y;
        var prevSender = (this.sender)? 0 : 1;

        this.x = (this.x == 300) ? 0 : 300;
        this.y += 100;
        this.sender = !this.sender;

        var event = Math.round(Math.random() * 100);

        if(this.case == 2)
            return {
                "startX": prevX,
                "startY": prevY,
                "endX": 150,
                "endY": this.y-50,
                "number": prevSender,
                "case": 2,
            }
        
        else if (this.case==1) return {
            "startX": prevX, 
            "startY": prevY,
            "endX": this.x,
            "endY": this.y,
            "number": prevSender,
            "case": 1,
        }
    }
}