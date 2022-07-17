const pop = () => {
  const stackChildsCount = getStackChildNodes();
console.log("pop",stackChildsCount)
  if (stackChildsCount == 0) {
    //doNothing
  } else {
    deleteFirstElement();
  }
};
const deleteFirstElement = () => {
  const stack = document.getElementById("stack");
  const stackFirst = stack.firstElementChild;
  console.log("firstChild",stackFirst)
  stackFirst.remove();
};
const push = () => {
  //check if stack is empty
  const stackChildsCount = getStackChildNodes();
  if (stackChildsCount == 0) {
    addNewElement(getInputValue());
  } else {
    addElementToStack(getInputValue());
  }
};
const addElementToStack = (value) => {
  const stack = document.getElementById("stack");
  const stackFirst = stack.firstElementChild;
  const stackElement = getElement(value);
  stack.insertBefore(stackElement, stackFirst);
};
const addNewElement = (value) => {
  const stack = document.getElementById("stack");
  const stackElement = getElement(value);
  stackElement.classList.add("stackFirst");
  stack.appendChild(stackElement);
};
const getElement = (value) => {
  const stackElement = document.createElement("div");
  stackElement.innerHTML = `<span> ${value}</span>`;
  stackElement.classList.add("inside");
  return stackElement;
};
const getInputValue = () => {
  return document.getElementById("num").value;
};
const getStackChildNodes = () => {
  const stack = document.getElementById("stack");
  return stack.children.length;
};
