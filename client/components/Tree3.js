import React, { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import styles from '../stylesheets/_tree3.scss';

const Tree3 = ({ rootNode }) => {
  console.log('inside Tree3');

  const [treeObj, setTreeObj] = useState({});
  const treeArr = [];

  let parent = {
    name: rootNode.name || 'root node',
    // type: rootNode.type || 'dummyType',
    attributes: {
      type: rootNode.elementType,
    },
    children: []
  };
  treeArr.push(parent);
  // setTreeArr([...treeArr, parent]);

  useEffect(() => {
    console.log('treeArr --> ', treeArr);
  }, []);

  // track + perform work on fiber node
  const performUnitOfWork = (fiber, parent) => {
    console.log('inside performUnitOfWork');
    // wrap tempObj in conditional to determine if type is meaningful (i.e. a function)
    let tempObj;

    if ((fiber.name !== null || fiber.type === 'function') && fiber.type.prototype !== undefined && fiber.tag !== 5) {
    // if (fiber.elementType !== null) {
      tempObj = {
        name: fiber.type.name || '',
        attributes: {
          type: fiber.elementType
        },
        children: []
      };
      console.log('tempObj --> ', tempObj);
      parent.push(tempObj);
    }

    console.log('child is -->', fiber.child);
    console.log('sibling is -->', fiber.sibling);
    // alternative to pushing tempObj onto treeArr - setTreeArr, set state 
    // setTreeArr([...treeArr, parent.push(tempObj)]);

    if (fiber.child && fiber.child.elementType !== null && (fiber.child.tag !== 5 || fiber.child.child !== null )) {
      if (tempObj !== undefined) {
        parent = tempObj.children;
      } // move to next child if tempObj is defined  
      let child = fiber.child;
      return { child, parent }; // return fiber.child + new parent obj
    }
    console.log('what is fiber at this point before moving to sibling', fiber);
    console.log('what is parent at this point before moving to sibling', parent);
    while (fiber) {
      if (fiber.sibling && fiber.sibling.elementType !== null && (fiber.sibling.tag !== 5 || fiber.sibling.sibling !== null)) {
        let sibling = fiber.sibling;
        return { sibling, parent };
      }
      fiber = fiber.return;
    }
    return;
  }
  // traverse component tree
  const traverse = (nextNode, parent = treeArr[0].children) => {
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

export default Tree3;