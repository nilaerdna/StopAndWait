class Event {
    //event is a wrapper class for every kind of event that could happen
    constructor(num, lines){
        this.num = num;
        this.lines = lines;
        this.currentLine = 0;

    }

    draw(){
        try {
            if (this.lines[this.currentLine].draw()) { //quando finisce
                this.currentLine++;
                return this.lines[this.currentLine-1];
            }
        } catch (error) {
            console.log("finite");
            return "finite";
        }
        
    }

}