// Adapted by using "https://reactjs.org/docs/testing-recipes.html" as baseline

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Todo from "./Todo";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with text", () => {
  const todo = { text: 'Hello task' }
  act(() => {    render(<Todo todo={todo} done="<p>Hello</p>" />, container);  });  
  expect(container.textContent).toBe("Hello task<p>Hello</p>");
});
