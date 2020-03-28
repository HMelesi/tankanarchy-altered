/**
 * This class stores global constants between the client and server.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

module.exports = {
  WORLD_MIN: 0,
  WORLD_MAX: 500,
  WORLD_PADDING: 30,

  CANVAS_WIDTH: 800,
  CANVAS_HEIGHT: 600,

  DRAWING_NAME_FONT: "14px Helvetica",
  DRAWING_NAME_COLOR: "black",
  DRAWING_HP_COLOR: "green",
  DRAWING_HP_MISSING_COLOR: "red",
  DRAWING_IMG_BASE_PATH: "/client/img",
  DRAWING_IMG_SELF_TANK: "self_tank",
  DRAWING_IMG_SELF_TURRET: "self_turret",

  DRAWING_IMG_CHIP_BODY: "1-chocolate-chip",
  DRAWING_IMG_FRAN_BODY: "2-frangipane",
  DRAWING_IMG_ROS_BODY: "3-ginger-nut",
  DRAWING_IMG_LIZZ_BODY: "4-lemon-lizzle",

  // DRAWING_IMG_OTHER_TANK: "other_tank",
  DRAWING_IMG_OTHER_TURRET: "other_turret",

  DRAWING_IMG_SHIELD: "shield",

  DRAWING_IMG_CHOCCHIP: "chocchip",
  DRAWING_IMG_JAMMYDODGE: "jammydodge",
  DRAWING_IMG_CUSTARDCREAM: "custardcream",
  DRAWING_IMG_HOBNOB: "hobnob",
  DRAWING_IMG_PARTYRING: "partyring",
  DRAWING_IMG_BOURBON: "bourbon",

  DRAWING_IMG_TILE: "tile",
  DRAWING_IMG_KEYS: [
    "self_tank",
    "self_turret",
    "1-chocolate-chip",
    "2-frangipane",
    "3-ginger-nut",
    "4-lemon-lizzle",
    "other_turret",
    "shield",
    "chocchip",
    "jammydodge",
    "custardcream",
    "hobnob",
    "partyring",
    "bourbon",
    "tile"
  ],
  DRAWING_TILE_SIZE: 100,

  VIEWPORT_STICKINESS: 0.004,

  SOCKET_UPDATE: "update",
  SOCKET_NEW_PLAYER: "new-player",
  SOCKET_PLAYER_ACTION: "player-action",
  SOCKET_CHAT_CLIENT_SERVER: "chat-client-to-server",
  SOCKET_CHAT_SERVER_CLIENT: "chat-server-to-client",
  SOCKET_DISCONNECT: "disconnect",

  PLAYER_TURN_RATE: 0.005,
  PLAYER_DEFAULT_SPEED: 0.4,
  PLAYER_SHOT_COOLDOWN: 800,
  PLAYER_DEFAULT_HITBOX_SIZE: 20,
  PLAYER_SHIELD_HITBOX_SIZE: 45,
  PLAYER_MAX_HEALTH: 10,

  BISCUIT_DEFAULT_DAMAGE: 1,
  BISCUIT_SPEED: 0.8,
  BISCUIT_MAX_TRAVEL_DISTANCE_SQ: 200,
  BISCUIT_HITBOX_SIZE: 10,

  POWERUP_HITBOX_SIZE: 5,
  POWERUP_MAX_COUNT: 50,
  POWERUP_MIN_DURATION: 5000,
  POWERUP_MAX_DURATION: 15000,
  POWERUP_HEALTHPACK: "healthpack",
  POWERUP_SHOTGUN: "shotgun",
  POWERUP_RAPIDFIRE: "rapidfire",
  POWERUP_SPEEDBOOST: "speedboost",
  POWERUP_SHIELD: "shield",
  POWERUP_KEYS: ["healthpack", "shotgun", "rapidfire", "speedboost", "shield"],
  POWERUP_DATA: {
    healthpack: { MIN: 1, MAX: 4 },
    shotgun: { MIN: 1, MAX: 2 },
    rapidfire: { MIN: 2, MAX: 4 },
    speedboost: { MIN: 1.2, MAX: 1.8 },
    shield: { MIN: 1, MAX: 4 }
  }
};
