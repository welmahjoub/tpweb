
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'

	//poistion initiale
	this.x1=0;
	this.y1=0;

	// position final
	this.x2=0;
	this.y2=0;

    this.press=false;

	// Developper les 3 fonctions gérant les événements
     
     function pression(event)
     {

     	this.press=true;	
     	
     	console.log("press");
     	

     }.bind(this); // lies la method a la classe Dnd

     function deplacer(event)
     {
     	if(press)
     	{
     		var res=getMousePosition(canvas,event);
     		this.x2=res.x;
     		this.y2=res.y;
     		
     		console.log(res);
     	}

     }.bind(this); // lies la method a la classe Dnd

     function relacher(event)
     {
     	if(press)
     	{
     		var res=getMousePosition(canvas,event);
     		this.x2=res.x;
     		this.y2=res.y;
     		console.log(res);
     	}
     	

     }.bind(this); // lies la method a la classe Dnd
	
	// Associer les fonctions précédentes aux évènements du canvas.

	canvas.addEventListener('mousedown', this.pression, false);
	canvas.addEventListener('mousemove', this.deplacer, false);
	canvas.addEventListener('mouseup', this.relacher, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



