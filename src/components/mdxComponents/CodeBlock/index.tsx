/* eslint-disable*/
//@ts-nocheck
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import React from 'react';

const CodeBlock = (props: { children?: React.ReactNode }) => {
  if (
    !props?.children ||
    typeof props.children === 'string' ||
    typeof props.children === 'number' ||
    typeof props.children === 'boolean'
  ) {
    return <pre>{props?.children}</pre>;
  }

  const className: string = props?.children?.props?.className || '';
  const matches = className.match(/language-(?<lang>.*)/);

  const showLineNumbers = Boolean(props?.children?.props?.lineNumbers);
  return (
    <Highlight
      {...defaultProps}
      code={props?.children?.props?.children?.trim()}
      language={matches && matches.groups && matches?.groups?.lang ? matches?.groups?.lang : ''}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%' }}
          width="80"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {showLineNumbers && <span className="line-number">{i + 1}</span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
