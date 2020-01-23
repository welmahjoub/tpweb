
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Forme(couleur,epaisseur) {
	this.couleur=couleur;
	this.epaisseur=epaisseur;
}

function Rectangle(largeur,hauteur,x,y,epaisseur,couleur)
{
	Forme.call(this,couleur,epaisseur);
	this.largeur=largeur;
	this.hauteur=hauteur;
	this.x=x;
	this.y=y;
}

Rectangle.prototype=new Forme();


function Line(couleur,epaisseur,InitX,InitY,FinalX,FinalY)
{


	Forme.call(this,couleur,epaisseur);
	this.InitX=InitX;
	this.InitY=InitY;
	this.FinalX=FinalX;
	this.FinalY=FinalY;
}

Line.prototype=new Forme();


function Drawing()
{
	this.forms=new Array();
}

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.rect(this.InitX, this.InitY, this.FinalX, this.FinalY);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
//TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.InitX, this.InitY);
    ctx.lineTo(this.FinalX, this.FinalY);
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
