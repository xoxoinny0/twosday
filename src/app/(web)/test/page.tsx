"use client";
import { useSetModalStore } from "@/app/_lib/modalStore";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect } from "react";
import Control from "./Control";
import * as css from "./editor.css";
import classNames from "classnames";
import Youtube from "@tiptap/extension-youtube";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import "@/style/cropper.css";

export default function Page() {
  const modalStore = useSetModalStore();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Youtube,
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    immediatelyRender: false, // Prevents the editor from rendering immediately
    content: `
      <p>Hello! This is a <code>tiptap</code> editor</p>.
      `,
  });

  useEffect(() => {
    if (!editor) return;
    editor.on("transaction", (e) => {
      console.log("transaction", editor.getHTML());
    });
  }, [editor]);

  if (!editor) {
    return <div>로딩중...</div>;
  }

  return (
    <div className={classNames(css.lightTheme, css.editor)}>
      <Control editor={editor} />
      <EditorContent className={css.body} editor={editor} />
    </div>
  );
}