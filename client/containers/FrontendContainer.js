import React, { useState, useEffect } from "react";

const FrontendContainer = ({ frame }) => {
  // get document of app-frame
  const frameContent = frame.contentWindow.document;
  // let tree = {
  //   name:'',
  //   children: []
  // };

  // find all nodes in within document body of app-frame
  const allNodes = frameContent.querySelectorAll('*');
  // traverse allNodes to find the root node
  let rootNode;
  allNodes.forEach(node => {
    if (node._reactRootContainer) rootNode = node._reactRootContainer._internalRoot.current;
  });  
  
  // track + perform work on fiber node
  const getNext = (fiber) => {
    // console.log('inside performUnitOfWork');  
    if (fiber.child) return fiber.child;
    while (fiber) {
      if (fiber.sibling) return fiber.sibling;
      fiber = fiber.return;
    }
  }
  // traverse component tree
  const traverse = (nextNode) => {
    console.log('inside traverse');
    while (nextNode) {
      console.log('stateNode -->', nextNode.stateNode);
      nextNode = getNext(nextNode.stateNode);
    }
    if (!nextNode) console.log('End of traversal');
  }

  useEffect(() => {
    traverse(rootNode);
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default FrontendContainer;