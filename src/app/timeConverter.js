export class TimeConverter {
    static convertTime(timeMs) {
        let seconds = Math.floor((timeMs / 1000) % 60);
        const minutes = Math.floor((timeMs / 1000 / 60) % 60);
        const duration = [
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0")
        ].join(":");
        return duration
    }
}

