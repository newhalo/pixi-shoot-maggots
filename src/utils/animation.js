export function initDudes(total = 100) {
  const dudes = [];
  for (let i = 0; i < total; i++) {
    // create a new Sprite
    const dude = {};
    // set the anchor point so the texture is centerd on the sprite
    // different maggots, different sizes
    const randomScale = Math.random();
    dude.scale = [0.8 + randomScale * 0.3, 0.8 + randomScale * 0.3];

    // scatter them all
    dude.x = Math.random() * window.innerWidth;
    dude.y = Math.random() * window.innerHeight;

    dude.tint = Math.random() * 0x808080;

    // create a random direction in radians
    dude.direction = Math.random() * Math.PI * 2;

    // this number will be used to modify the direction of the sprite over time
    dude.turningSpeed = Math.random() - 0.8;

    // create a random speed between 0 - 2, and these maggots are slooww
    dude.speed = (2 + Math.random() * 2) * 0.2;

    dude.offset = Math.random() * 100;
    dude.rotation = 0;
    dudes.push(dude);
  }
  return dudes;
}

export function updateDude(item, dudeBounds, tick) {
  let dude = item ?? {};
  dude.scale = item?.scale ?? [];
  dude.scale[1] = 0.95 + Math.sin(tick + dude.offset) * 0.05;
  dude.direction += dude.turningSpeed * 0.01;
  dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale[1]);
  dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale[1]);
  dude.rotation = -dude.direction + Math.PI;

  // wrap the maggots
  if (dude.x < dudeBounds.x) {
    dude.x += dudeBounds.width;
  } else if (dude.x > dudeBounds.x + dudeBounds.width) {
    dude.x -= dudeBounds.width;
  }

  if (dude.y < dudeBounds.y) {
    dude.y += dudeBounds.height;
  } else if (dude.y > dudeBounds.y + dudeBounds.height) {
    dude.y -= dudeBounds.height;
  }
  return dude;
}

export function rotateToPoint(mx, my, px, py) {
  const dist_Y = my - py;
  const dist_X = mx - px;
  const angle = Math.atan2(dist_Y, dist_X);
  return angle;
}
