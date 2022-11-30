import React from 'react';
import Tree from 'react-d3-tree';

const FrontendContainer = ({ frame }) => {
  // get document of app-frame
  const frameContent = frame.contentWindow.document;
  // let tree = {
  //   name:'',
  //   children: []
  // };

  // find all nodes in within document body of app-frame
  // const allNodes = frameContent.querySelectorAll('*');
  const allNodes = document.querySelectorAll('*');

  // traverse allNodes to find the root node
  let rootNode;

  allNodes.forEach(node => {
    if (node._reactRootContainer) rootNode = node._reactRootContainer._internalRoot.current;
  });
  console.log('root node --> ', rootNode);
  
  
  // track + perform work on fiber node
  const performUnitOfWork = (fiber) => {
    if (fiber.type !== null) console.log(`${fiber.type} start`);
    console.log('inside performUnitOfWork');
    
    if (fiber.child) {
      return fiber.child;
    }
    while (fiber) {
      // if (fiber.type !== null) console.log(`${fiber.type} end`);
      if (fiber.sibling) {
        return fiber.sibling;
      }
      fiber = fiber.return;
    }
  }
  // traverse component tree
  const traverse = (nextNode) => {
    while (nextNode) {
      nextNode = performUnitOfWork(nextNode);
    }
    if (!nextNode) {
      console.log('End of traversal');
    }
  }

  return (
    <div id="tree-wrapper">
      <Tree data={rootNode} />
    </div>
  );
}

export default FrontendContainer;