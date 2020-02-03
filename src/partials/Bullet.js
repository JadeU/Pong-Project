import { SVG_NS } from "../settings";

const bullets = {
    speed: 5,
    array: []
  }

  context.fillStyle = 'yellow';
  bullets.array.forEach(function(bullet, index) {
    context.fillRect(bullet.x, bullet.y, 10, 5);
	
	// check if the bullet hits a player
	// left player
	if (collides(bullet, leftPlayer)) {
	  bullets.array.splice(index, 1);
	  leftPlayer.y = canvas.height / 2 - playerHeight / 2;
	  rightPlayer.y = canvas.height / 2 - playerHeight / 2;
	  bullets.array.length = 0;
	}
	// right player
	else if (collides(bullet, rightPlayer)) {
	  bullets.array.splice(index, 1);
	  leftPlayer.y = canvas.height / 2 - playerHeight / 2;
	  rightPlayer.y = canvas.height / 2 - playerHeight / 2;
	  bullets.array.length = 0;
	}
    
    