/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject(x=500, y=350);
startButton.img.src="images/mrt.jpg";
startButton.width=200;
startButton.hitBoxWidth=1800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Company-Logo.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`bg`, 0, true);
		}

		//Hover Effect Graffic
		startButton.color="brown";
		startButton.img.src="images/Company-Logo.png";
	}
	else
	{
		//Default Button Graphic
		startButton.color="pink";
		startButton.img.src="images/projectile.png";
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
