import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function CodeMirrorEditor() {
  const [value, setValue] = React.useState('// Start coding...');

  const handleEditorChange = React.useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      <CodeMirror
        value={value}
        extensions={[javascript()]}
        onChange={(newValue) => handleEditorChange(newValue)}
        theme="none"
        lineNumbers="false"
      />
    </div>
  );
}

export default CodeMirrorEditor;
