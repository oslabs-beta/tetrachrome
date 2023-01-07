import React, { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import styles from '../stylesheets/_tree3.scss';

const Tree3 = ({ rootNode }) => {
  console.log('inside Tree3');
  // const orgChart = {
  //     name: 'CEO',
  //     children: [
  //       {
  //         name: 'Manager',
  //         attributes: {
  //           department: 'Production',
  //         },
  //         children: [
  //           {
  //             name: 'Foreman',
  //             attributes: {
  //               department: 'Fabrication',
  //             },
  //             children: [
  //               {
  //                 name: 'Worker',
  //               },
  //             ],
  //           },
  //           {
  //             name: 'Foreman',
  //             attributes: {
  //               department: 'Assembly',
  //             },
  //             children: [
  //               {
  //                 name: 'Worker',
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   };

  // const { treeObj } = p;
  // console.log('this is treeObj', treeObj);
  // console.log('this is orgChart', orgChart);
  const [treeArr2, setTreeArr2] = useState({});
  const treeArr = [];

  let parent = {
    name: rootNode.name || 'dummyName',
    // type: rootNode.type || 'dummyType',
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

    const tempObj = {
      name: fiber.name || 'dummyName' + Math.random(),
      // type: fiber.type || 'dummyType',
      children: []
    };

    parent.push(tempObj);
    // alternative to pushing tempObj onto treeArr - setTreeArr, set state 
    // setTreeArr([...treeArr, parent.push(tempObj)]);

    if (fiber.child) {
      // console.log('child -->', fiber.child);
      parent = parent[0].children;
      let child = fiber.child;
      return { child, parent }; // return fiber.child + new parent obj
    }
    while (fiber) {
      if (fiber.sibling) {
        // console.log('sibling --> ', fiber.sibling)
        let sibling = fiber.sibling;
        return { sibling, parent };
      }
      // console.log('inside performUnitOfWork - fiber.return')
      fiber = fiber.return;
    }
    return;
  }
  // traverse component tree
  const traverse = (nextNode, parent = treeArr[0].children) => {
    console.log('inside traverse');
    
    while (nextNode) {
      // console.log('next --> ', nextNode);
      const output = performUnitOfWork(nextNode, parent);
      // console.log('inside nextNode -->', output);
      if (!output) {
        console.log('End of traversal')
        setTreeArr2(Object.assign({}, treeArr[0]));
        // console.log('treeArr --> ', treeArr[0]);
        break;
      }
      // nextNode = output.child || output.sibling;
      if (output.child) {
        // console.log('next node is child');
        nextNode = output.child;
      } else if (output.sibling) {
        // console.log('next node is sibling');
        nextNode = output.sibling;
      }
      parent = output.parent;
    }
  }

  useEffect(() => {
    traverse(rootNode.child);
  }, []);

  useEffect(() => {
    console.log('treeArr2 --> ', treeArr2);
  }, [treeArr2]);

  return (
      <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={treeArr2} />
    </div>        
  )
};

export default Tree3;