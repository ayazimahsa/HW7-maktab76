function circle(radius) {
    
    this.radius = radius;

    this.getArea = function () {
        return  Math.PI * Math.pow(this.radius, 2);
    };

    this.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
let c = new circle(2);
console.log('Area =', c.getArea().toFixed(2));
console.log('perimeter =', c.getPerimeter().toFixed(2));


