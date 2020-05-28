import React from 'react';

const withClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);

// const withClass2 = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent />
//     </div>
//   )
// } HOC wrapping components to introduce some extra JS logic

export default withClass;
