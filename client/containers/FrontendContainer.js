import React from 'react';

const FrontendContainer = ({ frame }) => {
  console.log('FE frame --> ', frame);
  const frameContent = frame.contentWindow.document;
  console.log('FE frame content --> ', frameContent);

  // find all nodes in app
  const allNodes = frameContent.querySelectorAll('*');
  console.log('FE allNodes --> ', allNodes);
  // traverse allNodes to find the root node
  let rootNode;
  allNodes.forEach(node => {
    if (node._reactRootContainer) rootNode = node._reactRootContainer._internalRoot.current;
  });

  const beginWork = (fiber) => {
    console.log(`${fiber.type} start`)
  }

  const completeUnitWork = (fiber) => {
    console.log(`${fiber.type} end`)
  }

  const performUnitOfWork = (fiber) => {
    if (fiber.type !== null) beginWork(fiber)
    if (fiber.child) {
      return fiber.child
    }
    while (fiber) {
      if (fiber.type !== null) completeUnitWork(fiber)
      if (fiber.sibling) {
        return fiber.sibling
      }
      fiber = fiber.return
    }
  }

  const traverse = (nextUnitOfWork) => {
    while (nextUnitOfWork) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    if (!nextUnitOfWork) {
      console.log('End of traversal')
    }
  }

  return (
    <>  

    </>
  );
}

export default FrontendContainer;