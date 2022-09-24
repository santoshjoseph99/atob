const {ParkingLot, VEHICLE_LARGE, VEHICLE_COMPACT, VEHICLE_MOTORCYCLE} = require('./parkingLot');
const assert = require('assert');

describe('addVehicle: no spots available in the parking lot', () => {
  it('returns false for a large vehicle', () => {
    const p = new ParkingLot(0, 0, 0);
    const result = p.addVehicle(VEHICLE_LARGE);
    assert.equal(result, false);
  });
  it('returns false for a compact vehicle', () => {
    const p = new ParkingLot(0, 0, 0);
    const result = p.addVehicle(VEHICLE_COMPACT);
    assert.equal(result, false);
  });
  it('returns false for a motorcycle vehicle', () => {
    const p = new ParkingLot(0, 0, 0);
    const result = p.addVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, false);
  });
});

describe('addVehicle: large vehicles', () => {
  it('returns true', () => {
    const p = new ParkingLot(0, 0, 1);
    const result = p.addVehicle(VEHICLE_LARGE);
    assert.equal(result, true);
  });
  it('returns false when large vehicle space is full', () => {
    const p = new ParkingLot(0, 0, 1);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.addVehicle(VEHICLE_LARGE);
    assert.equal(result, false);
  });
  it('returns true and using compact space', () => {
    const p = new ParkingLot(0, 3, 1);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.addVehicle(VEHICLE_LARGE);
    assert.equal(result, true);
  });
  it('returns false when large and compact spaces are used', () => {
    const p = new ParkingLot(0, 3, 1);
    p.addVehicle(VEHICLE_LARGE);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.addVehicle(VEHICLE_LARGE);
    assert.equal(result, false);
  });
});

describe('addVehicle:compact vehicles', () => {
  it('returns true when space is available', () => {
    const p = new ParkingLot(0, 1, 0);
    const result = p.addVehicle(VEHICLE_COMPACT);
    assert.equal(result, true);
  });
  it('returns false when compact vehicle space is full', () => {
    const p = new ParkingLot(0, 1, 0);
    p.addVehicle(VEHICLE_COMPACT);
    const result = p.addVehicle(VEHICLE_COMPACT);
    assert.equal(result, false);
  });
});

describe('addVehicle:motorcycle vehicles', () => {
  it('returns true when space is available', () => {
    const p = new ParkingLot(1, 0, 0);
    const result = p.addVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, true);
  });
  it('returns false when motorcylcle vehicle space is full and no compact', () => {
    const p = new ParkingLot(1, 0, 0);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    const result = p.addVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, false);
  });
  it('returns true when motorcylcle vehicle space is full and compact is available', () => {
    const p = new ParkingLot(1, 1, 0);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    const result = p.addVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, true);
  });
  it('returns false when motorcylcle vehicle space is full and compact is full', () => {
    const p = new ParkingLot(1, 1, 0);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    const result = p.addVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, false);
  });
});

describe('removeVehicle: large vehicles', () => {
  it('returns false if no spots available', () => {
    const p = new ParkingLot(0, 0, 0);
    const result = p.removeVehicle(VEHICLE_LARGE);
    assert.equal(result, false);
  });
  it('returns true if vehicles in large spot', () => {
    const p = new ParkingLot(0, 0, 1);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.removeVehicle(VEHICLE_LARGE);
    assert.equal(result, true);
  });
  it('returns true if none in large spots, but in compact', () => {
    const p = new ParkingLot(0, 3, 0);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.removeVehicle(VEHICLE_LARGE);
    assert.equal(result, true);
  });
  it('returns true if in large spots, and in compact', () => {
    const p = new ParkingLot(0, 3, 1);
    p.addVehicle(VEHICLE_LARGE);
    p.addVehicle(VEHICLE_LARGE);
    const result = p.removeVehicle(VEHICLE_LARGE);
    assert.equal(result, true);
  });
});

describe('removeVehicle: compact vehicles', () => {
  it('returns true if vehicles in compact spot', () => {
    const p = new ParkingLot(0, 1, 0);
    p.addVehicle(VEHICLE_COMPACT);
    const result = p.removeVehicle(VEHICLE_COMPACT);
    assert.equal(result, true);
  });
  it('returns false if none in compact spots', () => {
    const p = new ParkingLot(0, 1, 0);
    p.addVehicle(VEHICLE_COMPACT);
    p.removeVehicle(VEHICLE_COMPACT);
    const result = p.removeVehicle(VEHICLE_COMPACT);
    assert.equal(result, false);
  });
});

describe('removeVehicle: motorcycle', () => {
  it('returns true if vehicles in motorcycle spot', () => {
    const p = new ParkingLot(1, 0, 0);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    const result = p.removeVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, true);
  });
  it('returns true if vehicles motorcycle and compact spots', () => {
    const p = new ParkingLot(1, 1, 0);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    p.addVehicle(VEHICLE_MOTORCYCLE);
    p.removeVehicle(VEHICLE_MOTORCYCLE);
    const result = p.removeVehicle(VEHICLE_MOTORCYCLE);
    assert.equal(result, true);
  });
});
