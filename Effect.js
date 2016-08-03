class Effect
	{

		constructor(CanvasId,ManyBalls,Sp,Ti)
		{

			this.ScreenWidth = window.innerWidth;
			this.ScreenHeight = window.innerHeight;
			this.Time = Ti;
			this.Speed = Sp;
			document.body.style.margin = 0;
			
			this.Canvas = document.getElementById(CanvasId);
			
			this.Canvas.setAttribute("width",this.ScreenWidth+"px");
			this.Canvas.setAttribute("height",this.ScreenHeight+"px");
			this.Canvas.style.background = "linear-gradient("+this.getRandomColor()+","+this.getRandomColor()+")";	
			this.Canvas.style.display = "block";
			
			this.Balls = [];
			
			for(var i = 0; i < ManyBalls; i++)
			{
			
				var RandomXPosition = Math.round(Math.random()*this.ScreenWidth);
				var RandomYPosition = Math.round(Math.random()*this.ScreenHeight); 
				var RandomSize		= Math.round(Math.random()*4);
				this.Balls.push({"posX":RandomXPosition,"posY":RandomYPosition,"size":RandomSize});
			
			}
			
			
		}
		
		getBalls()
		{
			var CanvasW = this.Canvas.getContext("2d");
			CanvasW.fillStyle = "white";
			CanvasW.clearRect(0,0,this.ScreenWidth,this.ScreenHeight);
			
				for(var i = 0; i < this.Balls.length; i++)
				{
				
					CanvasW.beginPath();
					
					CanvasW.arc(this.Balls[i].posX,this.Balls[i].posY,this.Balls[i].size,0,2*Math.PI);
					
					this.Balls[i].posY++;
					
					CanvasW.fill();
					
					if(this.Balls[i].posY-100 >= this.ScreenWidth)
					{
						this.Balls[i].posX = Math.round(Math.random()*this.ScreenWidth);
						this.Balls[i].posY = -1;
					
					}
				
				}
			

		}
		
		getRandomColor() 
		{
			var letters = '0123456789ABCDEF';
			
			var color = '#';
			
				for (var i = 0; i < 6; i++ ) {
				
					color += letters[Math.floor(Math.random() * 16)];
					
				}
				
			return color;
		}
		
		changeBackgroundColor()
		{
			this.Canvas.style.background = "linear-gradient("+this.getRandomColor()+","+this.getRandomColor()+")";
		}
		
	}