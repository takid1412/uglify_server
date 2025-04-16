export class Logger {
    static log(...args: any[]) {
        let first_parameter = args.shift();

        const formatConsoleDate = (date: Date) => {
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let milliseconds = date.getMilliseconds();

            const padding = (num: Number) => {
                return num.toString().padEnd(2, '0')
            };

            return `[${padding(date.getHours())}:${padding(date.getMinutes())}:${padding(date.getSeconds())}]`;
        }
        console.log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(args));
    }
}
