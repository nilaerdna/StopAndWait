class Controller {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.fNum = 0;
        this.contNum = 0;
    }

    generateEvent(evNum){
        let evtLines = [];
        console.log(evNum);
        switch(evNum){
            case 1: {
                evtLines.push(new LineAnimation(this.nextEvent()));
                evtLines.push(new LineAnimation(this.nextEvent()));

                break;
            };
            case 2: {
                evtLines.push(new WrongLine(this.nextEvent()));
                this.nextEvent();
                this.contNum-=2;
                break;
            }
            case 3: {
                evtLines.push(new WrongLineComplete(this.nextEvent()));
                this.nextEvent();
                this.contNum -=2;
                break;
            }
            case 4: {
                evtLines.push(new LineAnimation(this.nextEvent()));
                evtLines.push(new WrongLine(this.nextEvent()));
                this.contNum -= 2;
                break;
            }
        }
        return new Event(evNum, evtLines);
    }

    

    nextEvent() {
        this.contNum++; 
        if (this.contNum == 3) {
            this.fNum = this.fNum == 1 ? 0 : 1;
            this.contNum = 1;
        }
        var prevX = this.x;
        var prevY = this.y;
        
        this.x = this.x == 300 ? 0 : 300;
        this.y += 100;
        
        return {
            startX: prevX,
            startY: prevY,
            endX: this.x,
            endY: this.y,
            displayNumber: this.fNum,
        };
    }

    isFull(){
        return this.y == 600
    }
    resetCords(){
        this.x = 0;
        this.y = 0;
    }

}