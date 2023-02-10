import React, { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import '../stylesheets/custom-tree.scss';

const ComponentTree = ({ rootNode }) => {

  // initialize treeObject that we'll store components
  // we'll store the entire tree at index 0 of treeArr array
  const [treeObj, setTreeObj] = useState({});
  const treeArr = [];

  let parent = {
    name: rootNode.name || 'root node',
    // attributes: {
    //   /* add any attributes you may want to keep track of*/
    // },
    children: [],
    mom: null
  };
  treeArr.push(parent);

  // uncomment below to see the entire array 
  // useEffect(() => {
  //   console.log('treeArr --> ', treeArr);
  // }, []);

  // track + perform work on fiber node
  const performUnitOfWork = (fiber, parent) => {
    let tempObj;

    if ((fiber.name !== null || fiber.tag === 0) && fiber.type.prototype !== undefined)  {
      tempObj = {
        name: fiber.type.name || '',
        // attributes: {
        //   /* add any attributes you may want to keep track of*/
        // },
        children: [],
        mom: parent
      };
      parent.children.push(tempObj);
    }

    if (fiber.child && fiber.child.elementType !== null && (fiber.child.tag === 0 || fiber.child.child !== null )) {
      if (tempObj !== undefined) {
        parent = tempObj;
      } // move to next child if tempObj is defined  
      let child = fiber.child;
      return { child, parent }; // return fiber.child + new parent obj
    }
    while (fiber) {
      if (fiber.sibling && fiber.sibling.elementType !== null && fiber.sibling.tag === 0) {
        // pull parent back up a level to stay compliant parent <> child relathionship
        parent = parent.mom || null;
        let sibling = fiber.sibling;
        return { sibling, parent };
      }
      fiber = fiber.return;
    }
    return;
  }
  // traverse component tree
  const traverse = (nextNode, parent = treeArr[0]) => {
    // uncomment below to check if traverse has started 
    // console.log('inside traverse');
    
    while (nextNode) {
      const output = performUnitOfWork(nextNode, parent);
      if (!output) {
        // uncomment below to check if traverse has concluded 
        // console.log('End of traversal')
        setTreeObj(Object.assign({}, treeArr[0]));
        break;
      }
      if (output.child) {
        nextNode = output.child;
      } else if (output.sibling) {
        nextNode = output.sibling;
      }
      parent = output.parent;
    }
  }

  useEffect(() => {
    traverse(rootNode.child);
  }, []);

  return (
    <div id="treeWrapper">
      <Tree data={treeObj}
      rootNodeClassName="node__root"
      branchNodeClassName="node__branch"
      leafNodeClassName="node__leaf"
      orientation="vertical"
      depthFactor={50}
      hasInteractiveNodes={true}
      translate={{ x: 500, y: 100 }} />
    </div>        
  )
};

export default ComponentTree;