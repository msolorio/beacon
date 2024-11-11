import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';

function CodeMirrorEditor() {
  const [value, setValue] = React.useState('// Start coding...');

  const handleEditorChange = React.useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      <CodeMirror
        value={value}
        extensions={[markdown()]}
        onChange={(newValue) => handleEditorChange(newValue)}
        theme="light"
        lineNumbers={false}
      />
    </div>
  );
}

export default CodeMirrorEditor;
