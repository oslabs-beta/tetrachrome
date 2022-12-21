import React, { useState, useEffect } from "react";
// import Tree from '../components/Tree';

const FrontendContainer = ({ frame }) => {
  // const [tree, setTree] = useState([]);
  const treeArr = [];
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
    child: []
  };
  treeArr.push(parent);

  useEffect(() => {
    console.log(treeArr);
  }, []);

  // track + perform work on fiber node
  const performUnitOfWork = (fiber, parent) => {
    console.log('inside performUnitOfWork');
    const treeObj = {
      name: fiber.name,
      type: fiber.type,
      child: []
    };

    parent.push(treeObj);
    if (fiber.child) {
      console.log('child -->', fiber.child);
      parent = parent[0].child;
      let child = fiber.child;
      return { child, parent }; // return fiber.child + new parent obj
    }
    while (fiber) {
      if (fiber.sibling) {
        console.log('sibling --> ', fiber.sibling)
        let sibling = fiber.sibling;
        return { sibling, parent };
      }
      console.log('inside performUnitOfWork - fiber.return')
      fiber = fiber.return;
    }
    return;
  }
  // traverse component tree
  const traverse = (nextNode, parent = treeArr[0].child) => {
    console.log('inside traverse');
    
    while (nextNode) {
      // console.log('next --> ', nextNode);
      const output = performUnitOfWork(nextNode, parent);
      console.log('inside nextNode -->', output);
      if(!output) {
        console.log('End of traversal')
        break;
      }
      // nextNode = output.child || output.sibling;
      if (output.child) {
        console.log('next node is child');
        nextNode = output.child;
      } else if (output.sibling) {
        console.log('next node is sibling');
        nextNode = output.sibling;
      }
      parent = output.parent;
    }
  }

  useEffect(() => {
    traverse(rootNode.child);
  }, []);

  return (
    <>
      <h1>react component tree</h1>
      {/* <Tree treeArr={treeArr} /> */}
    </>
  );
}

export default FrontendContainer;