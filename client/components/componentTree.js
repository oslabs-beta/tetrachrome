import React, { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import styles from '../stylesheets/_tree3.scss';

const ComponentTree = ({ rootNode }) => {

  // initialize treeObject that we'll store components
  // we'll store the entire tree at index 0 of treeArr array
  const [treeObj, setTreeObj] = useState({});
  const treeArr = [];

  let parent = {
    name: rootNode.name || 'root node',
    attributes: {
      type: rootNode.elementType,
    },
    children: [],
    mom: null
  };
  treeArr.push(parent);

  useEffect(() => {
    console.log('treeArr --> ', treeArr);
  }, []);

  // track + perform work on fiber node
  const performUnitOfWork = (fiber, parent) => {
    console.log('inside performUnitOfWork');

    let tempObj;

    if ((fiber.name !== null || fiber.tag === 0) && fiber.type.prototype !== undefined)  {
      tempObj = {
        name: fiber.type.name || '',
        attributes: {
          type: fiber.elementType,
        },
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
    console.log('inside traverse');
    
    while (nextNode) {
      const output = performUnitOfWork(nextNode, parent);
      if (!output) {
        console.log('End of traversal')
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
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={treeObj} />
    </div>        
  )
};

export default ComponentTree;