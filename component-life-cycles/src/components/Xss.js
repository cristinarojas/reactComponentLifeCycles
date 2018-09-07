import React, { Component } from 'react';
import serialize from 'serialize-javascript';

const response = [
  {
    id: 1,
    title: 'My blog post 1',
    content: '<p>This is <strong>HTML</strong> code </p>'
  },
  {
    id: 2,
    title: 'My blog post 2',
    content: '<p>Alert: <script>alert(1);</script></p>'
  },
  {
    id: 3,
    title: 'My blog post 3',
    content: `<p><img onmouseover="alert('This site is not secure');" src="attack.jpg" /></p>`
  }
];

const initialState = serialize(response); // Create a string (JSON format) the HTML tags are not encoded (\u0034323jl\j629).

console.log(initialState)

const removeXSSAttacks = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, '');

  return {
    __html: html
  }
};

class Xss extends Component {
  render() {
    // Passing the JSON string to an actual object
    const posts = JSON.parse(initialState); // Convert the string into a JavaScript object

    return (
      <div className="Xss"> {/*By defaul react do not execute html of the response*/}
        {posts.map((post, key) => (
          <div key={key}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Insecure code</strong></p>
            <p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} /> {/*if i want to execute html of the data dangerouslySetInnerHTML*/}
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
