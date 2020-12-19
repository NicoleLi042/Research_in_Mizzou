
var pointCount = 1;
var i, r;

var x = [];
var y = [];
var z = [];
var c = [];

// initiate
for(i = 0; i < pointCount; i++) 
{
   r = 10 * Math.cos(i / 10);
   x.push(r * Math.cos(i));
   y.push(r * Math.sin(i));
   z.push(i);
   c.push(i)
}

function updatePoint(up,down,left,right,forward,backward){
  var xValue = x[x.length-1] + forward - backward;
  var yValue = y[y.length-1] + left - right;
  var zValue = z[z.length-1] + up - down;
  x.push(xValue);
  y.push(yValue);
  z.push(zValue);
  pointCount++;
  c.push(pointCount);

}

function generateChart()
{

    Plotly.newPlot('myDiv', [{
        type: 'scatter3d',
        mode: 'lines+markers',
        x: x,
        y: y,
        z: z,
        line: {
          width: 6,
          color: c,
          colorscale: "Viridis"},
        marker: {
          size: 3.5,
          color: c,
          colorscale: "Greens",
          cmin: -20,
          cmax: 50
        }},                  
      ]);
}
