import React from 'react';

const FrontendContainer = ({ frame }) => {
  console.log('inside FrontendContainer');
  // get document of app-frame
  const frameContent = frame.contentWindow.document;
  // console.log('framecontent in the frontend container', frameContent);
  // let tree = {
  //   name:'',
  //   children: []
  // };

  // find all nodes in within document body of app-frame
  const allNodes = frameContent.querySelectorAll('*');
  // const allNodes = document.querySelectorAll('*');

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
    <div style={{ borderColor: 'red' }}>
      <h1>hello</h1>
    </div>
  );
}

export default FrontendContainer;