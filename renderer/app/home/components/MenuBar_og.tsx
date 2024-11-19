import { Editor } from '@tiptap/react'

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  const buttonClass = "px-4 py-2 m-1 bg-blue-500 text-white rounded";

  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${buttonClass} ${editor.isActive("heading", { level: 1 }) ? "bg-blue-700" : ""}`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${buttonClass} ${editor.isActive("heading", { level: 2 }) ? "bg-blue-700" : ""}`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${buttonClass} ${editor.isActive("heading", { level: 3 }) ? "bg-blue-700" : ""}`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${buttonClass} ${editor.isActive("paragraph") ? "bg-blue-700" : ""}`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${buttonClass} ${editor.isActive("bold") ? "bg-blue-700" : ""}`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${buttonClass} ${editor.isActive("italic") ? "bg-blue-700" : ""}`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${buttonClass} ${editor.isActive("strike") ? "bg-blue-700" : ""}`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`${buttonClass} ${editor.isActive("taskList") ? "bg-blue-700" : ""}`}
      >
        toggle task list
      </button>
    </div>
  );
};

export default MenuBar;
