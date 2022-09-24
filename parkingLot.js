const VEHICLE_LARGE = 'large';
const VEHICLE_COMPACT = 'compact';
const VEHICLE_MOTORCYCLE = 'motorcycle';
const LARGE_SPOT = 1;
const LARGE_IN_COMPACT_SPOT = 3;
const COMPACT_SPOT = 1;
const MOTORCYCLE_SPOT = 1;

class ParkingLot {
  constructor(motorcycleSpots, compactSpots, largeSpots) {
    this.motorcycleSpotsMax = motorcycleSpots;
    this.compactSpotsMax = compactSpots;
    this.largeSpotsMax = largeSpots;
    this.motorcycleSpotsCount = 0;
    this.compactSpotsCount = 0;
    this.largeSpotsCount = 0;
  }

  addVehicle(type) {
    if (type === VEHICLE_LARGE) {
      if (this.largeSpotsCount + LARGE_SPOT <= this.largeSpotsMax) {
        this.largeSpotsCount += LARGE_SPOT;
        return true;
      } else if (this.compactSpotsCount + LARGE_IN_COMPACT_SPOT <= this.compactSpotsMax) {
        this.compactSpotsCount += LARGE_IN_COMPACT_SPOT;
        return true;
      }
      return false;
    } else if (type === VEHICLE_COMPACT) {
      if (this.compactSpotsCount + COMPACT_SPOT <= this.compactSpotsMax) {
        this.compactSpotsCount += COMPACT_SPOT;
        return true;
      }
      return false;
    } else if (type === VEHICLE_MOTORCYCLE) {
      if (this.motorcycleSpotsCount + MOTORCYCLE_SPOT <= this.motorcycleSpotsMax) {
        this.motorcycleSpotsCount += MOTORCYCLE_SPOT;
        return true;
      } else if (this.compactSpotsCount + MOTORCYCLE_SPOT <= this.compactSpotsMax) {
        this.compactSpotsCount += MOTORCYCLE_SPOT;
        return true;
        j;
      }
      return false;
    }
  }

  removeVehicle(type) {
    if (type === VEHICLE_LARGE) {
      console.log(this.largeSpotsCount, this.compactSpotsCount);
      if (this.largeSpotsCount - LARGE_SPOT >= 0) {
        this.largeSpotsCount -= LARGE_SPOT;
        console.log('here1');
        return true;
      } else if (this.largeSpotsCount == 0 && this.compactSpotsCount - LARGE_IN_COMPACT_SPOT >= 0) {
        this.compactSpotsCount -= LARGE_IN_COMPACT_SPOT;
        console.log('here2');
        return true;
      }
      console.log('here3');
      return false;
    } else if (type === VEHICLE_COMPACT) {
      if (this.compactSpotsCount - COMPACT_SPOT >= 0) {
        this.compactSpotsCount -= COMPACT_SPOT;
        return true;
      }
      return false;
    } else if (type === VEHICLE_MOTORCYCLE) {
      if (this.motorcycleSpotsCount - MOTORCYCLE_SPOT >= 0) {
        this.motorcycleSpotsCount -= MOTORCYCLE_SPOT;
        return true;
      } else if (this.compactSpotsCount - MOTORCYCLE_SPOT >= 0) {
        this.compactSpotsCount -= MOTORCYCLE_SPOT;
        return true;
      }
      return false;
    }
  }
}

module.exports = {
  ParkingLot,
  VEHICLE_LARGE,
  VEHICLE_COMPACT,
  VEHICLE_MOTORCYCLE,
};
