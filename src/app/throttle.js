export class Throttle {
    static throttlePause;
    static throttle(callback, time) {
        //don't run the function if throttlePause is true 
        if (this.throttlePause) return;
        //set throttlePause to true after the if condition. This allows the function to be run once 
        this.throttlePause = true;
        //setTimeout runs the callback within the specified time 
        setTimeout(() => {
            callback();
            //throttlePause is set to false once the function has been called, allowing the throttle function to loop 
            this.throttlePause = false;
        }, time);
    };
}
