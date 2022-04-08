import React from "react";
import ReactDOM from "react-dom";
import ShareModal from "lit-share-modal";

// buffer of DOM elements rendering React components
var nodes = [];

// utility to mount React nodes to target DOM elements
const ReactContentRenderer = {
  unmountAll: function () {
    if (nodes.length === 0) {
      return;
    }
    nodes.forEach((node) => ReactDOM.unmountComponentAtNode(node));
    nodes = [];
  },
  unmount: function (node) {
    ReactDOM.unmountComponentAtNode(node);
  },
  /**
   * Creates, renders and returns a React element created
   * from component class using given props and rendered
   * into the targetNode.
   */
  render: function (component, props, targetNode, callback) {
    var reactElement = React.createElement(component, props, null);
    ReactDOM.render(reactElement, targetNode, callback);
    nodes.push(targetNode);
    return reactElement;
  },
};

// // re-export React components
// for (var prop in AccessControlModal) {
//   if (AccessControlModal.hasOwnProperty(prop)) {
//     exports[prop] = AccessControlModal[prop];
//   }
// }

export { ReactContentRenderer, ShareModal };
