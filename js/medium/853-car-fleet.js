/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = position.map((p, i) => ({ position: p, speed: speed[i] }));
  cars.sort((a, b) => a.position - b.position);
  const stack = [];
  const getTime = (car) => {
    if (!car) return undefined;
    return (target - car.position) / car.speed;
  };
  for (const car of cars) {
    while (cars.length > 0 && getTime(car) >= getTime(stack[stack.length - 1])) {
      stack.pop();
    }
    stack.push(car);
  }
  return stack.length;
};

const position = [10];
const speed = [2];
const target = 12;

console.log(carFleet(target, position, speed)); // Output: 3

/* bucket method

var carFleet = function (target, position, speed) {
  const arrivalTimes = new Float32Array(target); // TypedArray is faster when there is lots of elements
  for (let i = 0; i < position.length; i++) {
    const pos = position[i];
    arrivalTimes[pos] = (target - pos) / speed[i];
  }

  let result = 0;
  let maxArrivalTime = 0;
  for (let i = arrivalTimes.length - 1; i >= 0; i--) {
    const arrivalTime = arrivalTimes[i];
    if (arrivalTime > maxArrivalTime) {
      maxArrivalTime = arrivalTime;
      result++;
    }
  }
  return result;
}

*/
