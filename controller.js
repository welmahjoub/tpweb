
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {

	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	var d=new DnD(canvas, this);


	var btnRect=document.getElementById('butRect');
	btnRect.onclick = function(){
		this.currEditingMode=editingMode.rect;
	};

	var btnLine=document.getElementById('butLine');
	btnLine.onclick = function(){
		this.currEditingMode=editingMode.line;
	};

	var btnColor=document.getElementById('colour');
	btnColor.onclick = function(){
		this.currColour = btnColor.value;
	};

	var inputEpaisseur=document.getElementById('spinnerWidth');
	inputEpaisseur.onclick = function(){
		
		this.currLineWidth = inputEpaisseur.value;
	
	};

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


	this.onInteractionStart=function(DnD)
	{
		d.pression();	
   
	}.bind(this);

	this.onInteractionUpdate=function(DnD)
	{
		
		if(this.currEditingMode === editingMode.line)
		{

			this.currentShape=new Line(currColour,currLineWidth,DnD.InitX,DnD.InitY,DnD.FinalX,DnD.FinalY);
		}

		if(this.currEditingMode === editingMode.rect)
		{
			function Rectangle(largeur,hauteur,x,y,epaisseur,couleur)
			this.currentShape=new Rectangle(DnD.InitX,DnD.InitY,DnD.FinalX,DnD.FinalY,currLineWidth,currColour);
		}

	}.bind(this);

	this.onInteractionEnd=function(DnD)
	{
     currentShape.paint();

	}.bind(this);

};


