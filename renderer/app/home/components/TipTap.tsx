import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import MenuBar from './MenuBar_og'

import BlockEditorDocument from './BlockEditorSrc/app/[room]/page';

// define your extension array
const extensions = [
  StarterKit,
  Document,
  Paragraph,
  Text,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <>
      <BlockEditorDocument params={{ room: 'test' }} />
      {/* <EditorContent editor={editor} /> */}
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  )
}

export default Tiptap
