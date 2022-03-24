import "../coursesStyles.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
function Simple() {
  SyntaxHighlighter.registerLanguage("c", c);
  const code = `#include  <stdio.h>;
int  main()
{
    int a =78;
    int b=34;
    int add=a+b;
    printf("%d",c);
    return add;
}`;
  return (
    <div class="content" id="2">
      <h1 className="content--heading">
        <strong>Simple C code</strong>
      </h1>
      <p>The sample code of c language looks like this</p>

      <SyntaxHighlighter language="c" style={darcula} className="code--block">
        {code}
      </SyntaxHighlighter>

      <p class="extra-space">
        When we run the code. It's like saying to computer Hey read line to line
        in code and Do the work assigned. Before knowing what this code means
        let's take a look at how program works and basic C syntax .
      </p>
    </div>
  );
}

export default Simple;
