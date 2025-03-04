/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/David-Pheonixborn.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:0, startY:0},
				{width:128, height:128, startX:128, startY:0},
			]
		},
		//The walk animation
		walk:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:495, startY:0},
				{width:128, height:128, startX:750, startY:0},
				{width:128, height:128, startX:1005, startY:0},
				{width:128, height:128, startX:1260, startY:0},
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:2243, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:1865, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:128, height:128, startX:2400, startY:0},
				{width:128, height:128, startX:2528, startY:0},
				{width:128, height:128, startX:2656, startY:0},
				{width:128, height:128, startX:2784, startY:0},
				{width:128, height:128, startX:2912, startY:0},
				{width:128, height:128, startX:3040, startY:0}
				
			]
		},
		//the projectile animation
		shoot:
		{
			fps:3,
			cycle:false,
			frames:
			[
				{width:129, height:128, startX:3160, startY:50},
				{width:128, height:128, startX:3190, startY:50},
				{width:128, height:128, startX:3225, startY:50},
				{width:128, height:128, startX:3260, startY:50},
				{width:128, height:128, startX:3290, startY:50}
			]
		}
	}
		
}