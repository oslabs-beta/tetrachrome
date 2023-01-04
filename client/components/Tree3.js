import React from 'react';
import Tree from 'react-d3-tree';
import styles from '../stylesheets/_tree3.scss';

const Tree3 = (p) => {
    const orgChart = {
        name: 'CEO',
        children: [
          {
            name: 'Manager',
            attributes: {
              department: 'Production',
            },
            children: [
              {
                name: 'Foreman',
                attributes: {
                  department: 'Fabrication',
                },
                children: [
                  {
                    name: 'Worker',
                  },
                ],
              },
              {
                name: 'Foreman',
                attributes: {
                  department: 'Assembly',
                },
                children: [
                  {
                    name: 'Worker',
                  },
                ],
              },
            ],
          },
        ],
      };


    // deconstruct the prop, so now treeArr is an array of length 1
  
    const {treeArr} = p;
    console.log('this is treeArr', treeArr[0]);
    console.log('this is orgChart', orgChart);

    return (
        <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
        <Tree data={treeArr[0]} />
      </div>        
    )
};

export default Tree3;