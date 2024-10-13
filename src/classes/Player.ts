export class Player {
    constructor(  
        public name: string,
        private age: number,
        readonly country: string
    ) {}

    play() {
        console.log(`${this.name} (${this.age}) from ${this.country} is playing now!`);
    }
}