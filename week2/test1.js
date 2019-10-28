const point = [10, 25,35, -34];
const [x,y, z] = point;
console.log(x, z);


const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;
  console.log(getArea());
  console.log(getArea);