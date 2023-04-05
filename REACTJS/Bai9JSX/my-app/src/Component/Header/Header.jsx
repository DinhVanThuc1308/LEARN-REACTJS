import React from "react";
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element1 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
function Bai1() {
  return (
    <div>
    <h1>Hello World!</h1>
    <h1>{element}</h1>
    <h1>{element1}</h1>
</div>

  );
  
}
export default Bai1;
