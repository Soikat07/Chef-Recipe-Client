import React from 'react';
import Pdf from 'react-to-pdf';
const ref = React.createRef();

const Blog = () => {
  return (
    <div ref={ref}>
      <div className="mt-10 ms-5 lg:ms-14">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="bg-slate-600 px-3 py-2 text-white hover:bg-slate-800"
              onClick={toPdf}
            >
              Download Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div className="min-h-[75vh] w-[90vw] mx-auto">
        <h1 className="text-center text-2xl my-4">Questions & Answers</h1>
        <div className="mb-4">
          <h3 className="font-bold">
            Q-1:What is the differences between uncontrolled and controlled
            components?
          </h3>
          <p>
            Uncontrolled components are input elements that manage their own
            state internally, while controlled components are input elements
            that are fully controlled by the web application. The choice between
            using uncontrolled or controlled components depends on the specific
            needs of the web application and the functionality of the input
            element in question.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Q-2:How to validate React props using PropTypes?
          </h3>
          <ul>
            PropTypes is a useful library for validating the props passed to our
            React components. By using PropTypes, we can catch errors early and
            ensure that your components are used correctly.Here are some common
            PropTypes that you can use to validate your props:
            <li>PropTypes.string: validates that the prop is a string</li>
            <li>PropTypes.bool: validates that the prop is a boolean.</li>
            <li>PropTypes.array: validates that the prop is an array.</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="font-bold">
            Q-3:What is the difference between nodejs and express js?
          </h3>
          <ol>
            Node.js and Express.js are both JavaScript-based web development
            technologies, but they serve different purposes.Some differences:
            <li>
              I.Node.js is a runtime environment, while Express.js is a web
              framework for Node.js.
            </li>
            <li>
              II.Node.js provides low-level access to system-level features,
              while Express.js provides a higher-level abstraction for building
              web applications.
            </li>
            <li>
              III.Node.js has a modular architecture, while Express.js provides
              a more opinionated approach to web development.
            </li>
            <li>
              IV.Node.js can be used to build a wide range of applications,
              while Express.js is primarily focused on building web applications
              and APIs.
            </li>
          </ol>
        </div>
        <div className="mb-10">
          <h3 className="font-bold">
            Q-4:What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            Custom hooks in react are like reusable functions. Custom hooks can
            be used to handle common concerns like fetching data, managing
            state, and interacting with APIs. By using custom hooks,we can
            reduce code duplication and improve the overall organization and
            maintainability of our code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
