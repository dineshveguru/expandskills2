import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
function Tokens() {
  SyntaxHighlighter.registerLanguage("c", c);
  const code = `printf("Hello, World!");`;
  return (
    <div class="content" id="7">
      <h1 className="content--heading">
        <strong>Tokens</strong>
      </h1>
      <p>
        Tokens are the individual smallest building blocks of code which
        compiler is about to decode into machine code
      </p>
      <p>In c code statement below,</p>
      <SyntaxHighlighter language="c" style={darcula} className="code--block">
        {code}
      </SyntaxHighlighter>
      <p class="extra-space">
        The individual tokens are: printf
        <br />
        (<br />
        "Hello, World!"
        <br />
        )<br />;
      </p>
      <p>
        tokens can be identifiers ,special characters,keywords,constants or a
        string literal.
      </p>
    </div>
  );
}

export default Tokens;
