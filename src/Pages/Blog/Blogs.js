import React from "react";

const Blogs = () => {
  return (
    <div className=" text-left">
      <div className=" p-5">
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong> 1. How will you improve the performance of a
            React Application?
          </h4>
          <strong>Ans.:</strong> Performance-related problems in web app is not
          new. Developers have been encountering these issues since a longer
          period of time. Here's why when any new language originates,
          developers are bound to face performance issues with it. React is one
          such example of language. It boasts of a DOM which is very fast. Fast
          in a way that sometimes, it makes many irrelevant components render
          the tree. This makes a UI glitch and sometimes developers gets
          hesitant to continue with the language. However, there are some ways
          through which developers can solve the performance related problems in
          React based web app.
          <hr />
        </div>
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong> 2. What are the different ways to manage a
            state in a React application?
          </h4>
          <strong>Ans.:</strong> React components have a built-in state object.
          The state is encapsulated data where you store assets that are
          persistent between component renderings. The state is just a fancy
          term for a JavaScript data structure. If a user changes state by
          interacting with your application, the UI may look completely
          different afterwards, because it's represented by this new state
          rather than the old state.
          <hr />
        </div>
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong>3. How does prototypical inheritance work?
          </h4>
          <strong>Ans.:</strong> avaScript is a prototype-based, Object Oriented
          programming language. After the ES6 updates, JavaScript allowed for
          “prototypal inheritance”, meaning that objects and methods can be
          shared, extended, and copied. Sharing amid objects makes for easy
          inheritance of structure (data fields), behavior (functions /
          methods), and state (data values).
          <hr />
        </div>
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong> 4. Why you do not set the state directly in
            React. For example, if you have const [products, setProducts] =
            useState([]). Why you do not set products = [...] instead, you use
            the setProducts
          </h4>
          <strong>Ans.:</strong>The state starts as count: 0 , and we increment
          state.count when the user clicks a button by calling this.setState().
          We’ll use snippets from this class throughout the page. When I change
          the use effect code to console log the res.data.colour, I get the
          colour values. I don't understand why this map throws this undefined
          error, when the product is defined as a result of the setProduct call.
          <hr />
        </div>
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong> 5. You have an array of products. Each product
            has a name, price, description, etc. How will you implement a search
            to find products by name?
          </h4>
          <strong>Ans.:</strong>Approach: Create two extra space, i.e. two extra
          arrays to store the product of all the array elements from start, up
          to that index and another array to store the product of all the array
          elements from the end of the array to that index. To get the product
          excluding that index, multiply the prefix product up to index i-1 with
          the suffix product up to index i+1.
          <hr />
        </div>
        <div className="mb-5">
          <h4 className="text-xl font-bold">
            <strong>Q.:</strong> 6. What is a unit test? Why should write unit
            tests?
          </h4>
          <strong>Ans.:</strong> As in simple word unit in the unit test is the
          unit behaviour/functionality of you application or system which you
          want to test. Your test case should test the unit behaviour not the
          method. Just aiming the small test in not produce a good quality test.
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
