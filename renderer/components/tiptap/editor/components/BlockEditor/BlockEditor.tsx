import { EditorContent } from '@tiptap/react'
import React, { useRef } from 'react'
import { LinkMenu } from '@/tiptap/editor/components/menus'
import { useBlockEditor } from '@/tiptap/editor/hooks/useBlockEditor'
import { Sidebar } from '@/tiptap/editor/components/Sidebar'
import ImageBlockMenu from '@/tiptap/editor/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/tiptap/editor/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/tiptap/editor/extensions/Table/menus'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import { useSidebar } from '@/tiptap/editor/hooks/useSidebar'
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'
import '@/tiptap/editor/styles/index.css'
import { EditorHeader } from './components/EditorHeader'

export const BlockEditor = ({
  aiToken,
  ydoc,
  provider,
}: {
  aiToken?: string
  hasCollab: boolean
  ydoc: Y.Doc
  provider?: TiptapCollabProvider | null | undefined
}) => {
  const menuContainerRef = useRef(null)

  const leftSidebar = useSidebar()
  const { editor, users, collabState } = useBlockEditor({ aiToken, ydoc, provider })

  if (!editor || !users) {
    return null
  }

  return (
    <div className="flex h-full flex-row" ref={menuContainerRef}>
      <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor} />
      <div className="relative flex flex-col flex-1 h-[calc(100vh-80px)]">
        <EditorHeader
          editor={editor}
          collabState={collabState}
          users={users}
          isSidebarOpen={leftSidebar.isOpen}
          toggleSidebar={leftSidebar.toggle}
        />
        <TextMenu editor={editor} />
        <EditorContent editor={editor} className="flex-1" />
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  )
}

export default BlockEditor
