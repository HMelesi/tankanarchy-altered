/**
 * This class stores the state of a biscuit on the server.
 */

const Constants = require("../lib/Constants");
const Entity = require("../lib/Entity");
const Vector = require("../lib/Vector");

/**
 * Biscuit class.
 */
class Biscuit extends Entity {
  /**
   * Constructor for a Biscuit object.
   * @constructor
   * @param {Vector} position The starting position vector
   * @param {Vector} velocity The starting velocity vector
   * @param {number} angle The orientation of the biscuit
   * @param {Player} source The Player object firing the biscuit
   */
  constructor(position, velocity, angle, source) {
    super(position, velocity, Vector.zero(), Constants.BISCUIT_HITBOX_SIZE);

    this.angle = angle;
    this.source = source;

    this.damage = Constants.BISCUIT_DEFAULT_DAMAGE;
    this.distanceTraveled = 0;
    this.destroyed = false;
  }

  /**
   * Creates a new Biscuit object from a Player object firing it.
   * @param {Player} player The Player object firing the biscuit
   * @param {number} [angleDeviation=0] The angle deviation if the biscuit is
   *   not traveling in the direction of the turret
   * @return {Biscuit}
   */
  static createFromPlayer(player, angleDeviation = 0) {
    const angle = player.turretAngle + angleDeviation;
    return new Biscuit(
      player.position.copy(),
      Vector.fromPolar(Constants.BISCUIT_SPEED, angle),
      angle,
      player
    );
  }

  /**
   * Performs a physics update.
   * @param {number} lastUpdateTime The last timestamp an update occurred
   * @param {number} deltaTime The timestep to compute the update with
   */
  update(lastUpdateTime, deltaTime) {
    const distanceStep = Vector.scale(this.velocity, deltaTime);
    this.position.add(distanceStep);
    this.distanceTraveled += distanceStep.mag2;
    if (this.inWorld() || distanceStep > Biscuit.MAX_TRAVEL_DISTANCE_SQ) {
      this.destroyed = true;
    }
  }
}

module.exports = Biscuit;
