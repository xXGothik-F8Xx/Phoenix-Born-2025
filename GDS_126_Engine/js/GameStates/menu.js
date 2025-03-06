/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/Play-Button.png";
startButton.width=200;
startButton.hitBoxWidth=1800;
startButton.x=100;
startButton.y=450;
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
		startButton.img.src="images/Company-Logo.png";
	}
	else
	{
		//Default Button Graphic
		startButton.img.src="images/Play-Button.png";
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
