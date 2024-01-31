const CANVAS_SIZE = [540, 540]
const SNAKE_START = [
  [8, 7],
  [8, 8]
]
const APPLE_START = [8, 3]
const SCALE = 45
const SPEED = 150
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
}
const AWSD_DIRECTIONS = {
  87: [0, -1], // W
  65: [-1, 0], // A
  83: [0, 1], // S
  68: [1, 0] // D
}

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  AWSD_DIRECTIONS
}
