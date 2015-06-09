function randomCirclesData(numCircles){
  var circles = [];
  for (var i = 0; i < numCircles; i++) {
    circles.push (
      {
        r: (Math.random()*5+2) + '%',
        cx: (Math.random()*100) + '%',
        cy: (Math.random()*100) + '%',
        fill: '#32CD32',
        opacity: Math.random()
      }
    );
  }

  return circles;
}


//  Use this... if you want to...
function explode(bubble){
  bubble
  .transition()
    .duration(1000)
      .attr('r', '1000%');
  return this;
}


function projectData(data){

  var d3_body = d3.select("svg");

  var bubbles = d3_body.selectAll('circle')
       .data(data)
       .enter()  // How many new circles do I need?
       .append('circle')
       .attr('r', 0)
       .on('mousedown', function(){
                      explode(d3.select(this));
                    });

 bubbles = d3_body.selectAll('circle')
      .data(data)
      .transition()
        .duration(100)
        .attr('r', function(d){ return d.r; })
        .attr('cx', function(d){ return d.cx; })
        .attr('cy', function(d){ return d.cy; })
        .style('fill', function(d){ return d.fill; })
        .style('opacity', function(d){ return d.opacity; })




  d3_body.selectAll('circle').data(data).exit().remove();
}


window.onload=function(){

  d3.select("svg")
    .attr("width", '100%')
    .attr("height", '75%')
    .style("border", "1px solid black");

  setInterval(function(){
    var numCircles = Math.floor(Math.random() * 100) +10;
    projectData(randomCirclesData(numCircles));
  }, 1000);

};








