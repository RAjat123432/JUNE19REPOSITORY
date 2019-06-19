//basic way to create a object
const circle={
    radius:1,
    location: { x:1,y:1 },
    draw: function(){
    console.log('draw'); }  
                  };





function createCircle(radius) 
return{
    radius,
    draw: function(){
        console.log('draw');}
}
const Circle= createCircle(1);

function Circle(radius)
{this.radius=radius;
    this.draw= function()
    {console.log('draw');

    }}