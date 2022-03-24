import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Array() {
  SyntaxHighlighter.registerLanguage("c", c);
  const code = `int  mark[5]={19,10,8,17,9};
//declaring array with size 5

mark[2]=1;
//replacing element in index[2] with element 1`;
  const resultCode = `[[[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0]],

[[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0]],

[[205,  23,  23],
[204,  23,  23],
[205,  23,  23],
[205,  23,  23],
[207, 196, 205],
[206, 200, 205],
[206, 200, 205],
[206, 200, 205],
[206, 200, 205]],

[[204,  22,  22],
[ 22,   0,   1],
[  0,   0,   0],
[  0,   0,   0],
[206, 200, 205],
[  2,   1,   2],
[  0,   0,   0],
[  0,   0,   0],
[150, 145, 149]],

[[204,  24,  23],
[205,  23,  23],
[205,  23,  23],
[204,  22,  22],
[206, 200, 205],
[206, 200, 205],
[206, 200, 205],
[  0,   0,   0],
[  0,   0,   0]],

[[205,  23,  23],
[194,  23,  27],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[206, 200, 205],
[  0,   0,   0],
[  0,   0,   0]],

[[205,  23,  23],
[204,  22,  22],
[205,  23,  23],
[202,  21,  27],
[206, 200, 205],
[205, 200, 204],
[206, 200, 205],
[  0,   0,   0],
[  0,   0,   0]],

[[205,  23,  23],
[204,  22,  22],
[204,  22,  22],
[204, 201, 203],
[206, 200, 205],
[206, 200, 205],
[ 72,  66,  71],
[  0,   0,   0],
[  0,   0,   0]],

[[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0],
[  0,   0,   0]]]`;
  return (
    <div className="content" id="5">
      <div>
        <h1 className="content--heading">
          <strong>Array</strong>
        </h1>
        <p>
          Array is a collection of same type of data items stored in a
          continuous memory allocations and the data in it are called elements.
          the position index is used as its identifier in array
        </p>
        <p class="extra-space">
          <strong>Array code</strong>
        </p>
        <SyntaxHighlighter language="c" style={darcula} className="code--block">
          {code}
        </SyntaxHighlighter>
      </div>
      <h1>
        <strong>One-dimensional Array</strong>
      </h1>
      <p>It's simple collection of data types...</p>
      <h1>
        <strong>Two-dimensional Array</strong>
      </h1>
      <p>It's collection of 1d array ...</p>
      <h1>
        <strong>Three-dimensional Array</strong>
      </h1>
      <p>It's collection of 2d array ...</p>
      <p>
        TO STORE DATA IN A ORGANI
        <strong>TO STORE DATA IN A ORGANIZED FORMAT</strong>
        main purpose of array is{" "}
        <strong>TO STORE DATA IN A ORGANIZED FORMAT</strong>
      </p>
      <p className="extra-space">
        <strong>Ex: </strong>Look at pic below.... It's 2 d array......of
        pixels........ Where, each pixel is 1d array of int datatypes.... So
        it's all 3d int datatypes And the array is below....
      </p>
      <SyntaxHighlighter language="c" style={darcula} className="code--block">
        {resultCode}
      </SyntaxHighlighter>
      <h1>
        <strong>3d array</strong>
      </h1>
      <p>
        above Pic is expressed In basic datatypes... Similarly...... audio,
        video and other formats....can be expressed as basic datatypes using
        multi dimensional arrays
      </p>
    </div>
  );
}

export default Array;
