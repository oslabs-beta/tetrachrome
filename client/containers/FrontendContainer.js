import React, { useState, useEffect } from "react";
import Tree3 from '../components/Tree3';

const FrontendContainer = ({ frame }) => {
  // get document of app-frame
  const frameContent = frame.contentWindow.document;
  // find all nodes in within document body of app-frame
  const allNodes = frameContent.querySelectorAll('*');
  // traverse allNodes to find the root node
  let rootNode;
  allNodes.forEach(node => {
    if (node._reactRootContainer) rootNode = node._reactRootContainer._internalRoot.current;
  });  
  
  useEffect(() => {
    console.log('rootNode --> ', rootNode);
  }, []);

  return (
    <>
      <div className="page-header">react component tree</div>
      <Tree3 rootNode={rootNode} />
    </>
  );
}

export default FrontendContainer;