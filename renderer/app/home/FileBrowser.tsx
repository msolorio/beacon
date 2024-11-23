import { observer } from "@legendapp/state/react";
import { state$ } from '@/renderer/state';

const FileBrowser = observer(function FileBrowser() {
  const fileTree = state$.fileTree.get();

  console.log('FileBroser rendered');

  return (
    <div>
      <p>this is where files go</p>
      <p>file tree: {fileTree}</p>
    </div>
  )
});

export { FileBrowser };
