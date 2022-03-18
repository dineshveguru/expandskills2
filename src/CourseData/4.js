import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
function Types() {
  SyntaxHighlighter.registerLanguage("c", c);
  const code = `
    int score = 777;
    char grade = "A";
    char team[20] = "Expand Skills"; //[20] id the limit of chars
    float numfloat = 4.21; //7 decimal digit precision
    double numdouble = 2.398347342 //15 decimal digit precision 
    `;
  return (
    <div class="content" id="4">
      <div>
        <h1 className="content--heading">
          <strong>Data Types</strong>
        </h1>
        <p>lets look into first one ie. Storing data in a classified way.</p>
        <p>What comes to mind by observing below rows....</p>
        <ol class="extra-space" className="list--items">
          <li>
            <p>car, bike, truck , bus , bicycle</p>
          </li>
          <li>
            <p>red, green ,blue, white, black</p>
          </li>
          <li>
            <p>2.4,5.5,56.4,53.4</p>
          </li>
        </ol>
        <p class="extra-space">
          These are the set of memory in our brain ,in form of classes.
        </p>
        <p>
          Similarly ,there are few inbuilt classification(Data Types) in c as
        </p>
        <ul className="extra-space list--items">
          <li>
            <p>
              <strong>int</strong> &emsp; &lt;for integers&gt;
            </p>
          </li>
          <li>
            <p>
              <strong>char</strong> &emsp; &lt;for strings&gt;
            </p>
          </li>
          <li>
            <p>
              <strong>float</strong> &emsp; &lt;for decimal values&gt;
            </p>
          </li>
          <li>
            <p>
              <strong>double</strong> &emsp; &lt;for high precision decimal
              values&gt;
            </p>
          </li>
        </ul>
        <p class="extra-space">
          and these are called{" "}
          <strong>
            <i>Data Types</i>
          </strong>
        </p>
        <p class="extra-space">
          So if we want to store something in c we must state to which class it
          belongs to And this is basic statement for storing data
        </p>
        <SyntaxHighlighter language="c" style={darcula} className="code--block">
          {code}
        </SyntaxHighlighter>
        <p class="extra-space">
          The above are statements in c code,Telling systems to store diffrent
          types of data.
        </p>
        <p class="extra-space">
          Any statements in c must terminate with semicolon ;
        </p>
        <p class="extra-space">
          The above code conveys system to store data 777, "A", "Expand Skills",
          4.21, 2.398347342 in memory with placing an ID tag(Identifier) of
          Score, Grade, Team, numfloat, numdouble respectively When we want to
          acsess the data we are going to use id tag(Identifier) to access it.
        </p>
      </div>
    </div>
  );
}

export default Types;
