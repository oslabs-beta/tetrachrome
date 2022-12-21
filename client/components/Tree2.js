import React from 'react';
import * as d3 from 'd3';

import styles from '../stylesheets/_tree2.scss';

const Tree2 = (treeArr) => {
  
  // set the dimensions and margins of the diagram
  const margin = {top: 20, right: 90, bottom: 30, left: 90},
    width  = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // declares a tree layout and assigns the size
  const treemap = d3.tree().size([height, width]);
  // const treemap = d3.tree();

  //  assigns the data to a hierarchy using parent-child relationships
  let nodes = d3.hierarchy(treeArr, d => d.child);

  // maps the node data to the tree layout
  nodes = treemap(nodes);

  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")
          .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

  // adds the links between the nodes
  const link = g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    // .style("stroke", d => d.data.level)
    .attr("d", d => {
      console.log('d in link --> ', d);
      return "M" + d.y + "," + d.x
        + "C" + (d.y + d.parent.y) / 2 + "," + d.x
        + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
    });
  
  // adds each node as a group
  const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.child ? " node--internal" : " node--leaf"))
    .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

  // adds the circle to the node
  node.append("circle")
    // .attr("r", d => d.data.value)
    .attr("r", d => {
      console.log('d in circle --> ', d);
      d.data.name
    })
    .style("stroke", "red")
    .style("fill", "blue");
    
  // adds the text to the node
  node.append("text")
    .attr("dy", ".35em")
    // .attr("x", d => d.child ? (d.data.value + 5) * -1 : d.data.value + 5)
    // .attr("y", d => d.child && d.depth !== 0 ? -(d.data.value + 5) : d)
    .style("text-anchor", d => {
      console.log('d.child in text -> ', d.child);
      d.child ? "end" : "start"})
    // .text(d => d.data.name);
    .text("hello");
  
  // return (
  //   <>
      
  //   </>
  // );
}

export default Tree2;