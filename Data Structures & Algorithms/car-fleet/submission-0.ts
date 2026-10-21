class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((pos,i)=>({
            position:pos,
            time:(target - pos)/speed[i]
        }))

        cars.sort((a,b)=>b.position - a.position);

        let fleetCount = 0;
        let slowestTime = 0;

        for(const car of cars){
            if(car.time > slowestTime){
                fleetCount++;
                slowestTime = car.time
            }
        }
        return fleetCount;
    }
}
