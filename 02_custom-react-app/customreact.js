function customRender(elementToRender, whereToRender) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("target", reactElement.props.target);
  //   domElement.setAttribute("href", reactElement.props.href);
  //   whereToRender.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  whereToRender.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "www.google.com",
  },
  children: "click to vist to google!!",
};

const root = document.querySelector(".root");
customRender(reactElement, root);
