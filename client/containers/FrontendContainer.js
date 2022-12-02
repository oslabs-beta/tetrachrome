import React, { useState, useEffect } from "react";

const FrontendContainer = ({ frame }) => {
  // const [tree, setTree] = useState([]);
  const tree = [];
  // get document of app-frame
  const frameContent = frame.contentWindow.document;
  // find all nodes in within document body of app-frame
  const allNodes = frameContent.querySelectorAll('*');
  // traverse allNodes to find the root node
  let rootNode;
  allNodes.forEach(node => {
    if (node._reactRootContainer) rootNode = node._reactRootContainer._internalRoot.current;
  });  

  let parent = {
    name: rootNode.name,
    type: rootNode.type,
    state: rootNode.stateNode,
    child: []
  };
  tree.push(parent);

  useEffect(() => {
    console.log(tree);
  }, []);

  // track + perform work on fiber node
  const performUnitOfWork = (fiber, parent) => {
    console.log('inside performUnitOfWork');
    const treeObj = {
      name: fiber.name,
      type: fiber.type,
      state: fiber.stateNode,
      child: []
    };

    if (fiber.child) {
      console.log('child -->', fiber.child);
      parent.child.push(treeObj);
      parent = treeObj;
      let child = fiber.child;
      return { child, parent }; // return fiber.child + new parent obj
    }
    while (fiber) {
      if (fiber.sibling) {
        console.log('sibling --> ', fiber.sibling)
        parent.child.push(treeObj);
        let sibling = fiber.sibling;
        return { sibling, parent };
      }
      console.log('inside performUnitOfWork - fiber.return')
      fiber = fiber.return;
    }
    return;
  }
  // traverse component tree
  const traverse = (nextNode) => {
    console.log('inside traverse');
    
    while (nextNode) {
      // console.log('next --> ', nextNode);
      const output = performUnitOfWork(nextNode, parent);
      nextNode = output.child || output.sibling;
      parent = output.parent;
    }
    if (!nextNode) console.log('End of traversal');
  }

  useEffect(() => {
    traverse(rootNode.child);
  }, []);

  return (
    <>
      <h1>react component tree</h1>
    </>
  );
}

export default FrontendContainer;