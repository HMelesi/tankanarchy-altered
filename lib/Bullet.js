/**
 * This class stores the state of a bullet on the server.
 * @author alvin.lin.dev@gmail.com (Alvin Lin)
 */

var Entity = require('./Entity');
var World = require('./World');

/**
 * Constructor for a bullet.
 * @constructor
 * @param {number} x The x coordinate of the bullet.
 * @param {number} y The y coordinate of the bullet.
 * @param {number} vx The velocity in the x direction of the bullet.
 * @param {number} vy The velocity in the y direction of the bullet.
 * @param {number} orientation The orientation of the bullet in radians, used
 *   for rendering the bullet.
 * @param {string} source The socket ID of the player that fired the
 *   bullet.
 * @extends {Entity}
 */
function Bullet(x, y, vx, vy, orientation, source) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.orientation = orientation;
  this.source = source;
  this.damage = Bullet.DEFAULT_DAMAGE;

  this.distanceTraveled = 0;
  this.shouldExist = true;
}
require('../shared/base');
Bullet.inheritsFrom(Entity);

/**
 * VELOCITY_MAGNITUDE is in pixels per millisecond.
 * @const
 * @type {number}
 */
Bullet.VELOCITY_MAGNITUDE = 0.85;

/**
 * DEFAULT_DAMAGE is in health points.
 * @const
 * @type {number}
 */
Bullet.DEFAULT_DAMAGE = 1;

/**
 * MAX_TRAVEL_DISTANCE is in pixels.
 * @const
 * @type {number}
 */
Bullet.MAX_TRAVEL_DISTANCE = 1000;

/**
 * HITBOX_SIZE is in pixels and represents a radius around the bullet entity.
 * @const
 * @type {number}
 */
Bullet.HITBOX_SIZE = 10;

/**
 * Factory method for the Bullet object. This is meant to be called from the
 * context of a Player.
 * @param {number} x The starting x-coordinate of the bullet (absolute).
 * @param {number} y The starting y-coordinate of the bullet (absolute).
 * @param {number} direction The direction the bullet will travel in
 *   radians.
 * @param {string} source The socket ID of the player that fired the
 *   bullet.
 * @return {Bullet}
 */
Bullet.create = function(x, y, direction, source) {
  var vx = Bullet.VELOCITY_MAGNITUDE * Math.cos(direction - Math.PI / 2);
  var vy = Bullet.VELOCITY_MAGNITUDE * Math.sin(direction - Math.PI / 2);
  return new Bullet(x, y, vx, vy, direction, source);
};

/**
 * Updates this bullet and checks for collision with any player.
 * We reverse the coordinate system and apply sin(direction) to x because
 * canvas in HTML will use up as its '0' reference point while JS math uses
 * left as its '0' reference point.
 * this.direction always is stored in radians.
 * @param {Hashmap} clients The Hashmap of active IDs and players stored on
 *   the server.
 */
Bullet.prototype.update = function(clients) {
  this.parent.update.call(this);

  this.distanceTraveled += Bullet.VELOCITY_MAGNITUDE *
      this.updateTimeDifference;
  if (this.distanceTraveled > Bullet.MAX_TRAVEL_DISTANCE ||
      !World.isInside(this.x, this.y)) {
    this.shouldExist = false;
    return;
  }

  var players = clients.values();
  for (var i = 0; i < players.length; ++i) {
    if (this.source != players[i].id &&
        players[i].isCollidedWith(this.x, this.y,
                                  Bullet.HITBOX_SIZE)) {
      players[i].damage(1);
      if (players[i].isDead()) {
        players[i].respawn();
        var killingPlayer = clients.get(this.source);
        killingPlayer.kills++;
      }
      this.shouldExist = false;
      return;
    }
  }
};

/**
 * This line is needed on the server side since this is loaded as a module
 * into the node server.
 */
module.exports = Bullet;