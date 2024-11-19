import { Editor } from '@tiptap/react'

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  const buttonClass = "px-4 py-2 m-1 bg-blue-500 text-white rounded";

  return (
    <div className="flex flex-wrap gap-2 pt-6 pb-6">
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Paragraph
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Heading 1
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Heading 2
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Heading 3
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Bullet List
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Numbered List
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Task List
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setDetails().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Toggle List
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setBlockquote().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Blockquote
      </button>
      <div className="w-0.5 bg-gray-300"></div>
      <button
        onClick={() => editor.chain().focus().setCodeBlock().run()}
        className="flex gap-2 p-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 text-left bg-transparent rounded hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
      >
        Code Block
      </button>
    </div>
  );
};

export default MenuBar;
