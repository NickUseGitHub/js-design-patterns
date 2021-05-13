function VehicleManager(speed) {
  function Vehicle(speed) {
    this.speed = speed;
    this.drive = function drive(msg, msg1) {
      console.log(`Drive speed: ${this.speed} ${msg} ${msg1}`);
    };
  }

  const vehicle = new Vehicle(speed);

  function exec(fnName, ...args) {
    if (!this[fnName]) {
      console.log(`No ${fnName}`);

      return;
    }

    return this[fnName](...args);
  }

  this.exec = exec.bind(vehicle);
}

export default function main() {
  const sarmHlor = new VehicleManager(20);
}
