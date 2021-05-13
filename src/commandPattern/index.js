function VehicleManager({ x }) {
  this.x = x;

  return this;
}

export default function main() {
  const sarmHlor = new VehicleManager({ x: 20 });

  console.log('sarmHlor', sarmHlor);
}
