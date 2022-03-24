import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
function Identifiers() {
  SyntaxHighlighter.registerLanguage("c", c);
  const code = `int Score = 777;`;
  return (
    <div className="content" id="6">
      <h1 className="content--heading">
        <strong>Identifiers</strong>
      </h1>
      <p>
        A C identifier is a name used to identify a variable, function, or any
        other user-defined item.
      </p>
      <SyntaxHighlighter language="c" style={darcula} className="code--block">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Identifiers;
