"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import Viewer from "./_component/Viewer";
import "highlight.js/styles/github.css";
import "./_component/editor.css";

const Editor = dynamic(() => import("./_component/Editor"), { ssr: false });

export default function Page() {
  const [value, setValue] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  const onChange = (value: string) => {
    setValue(() => value);
  };

  return (
    <div>
      <div>
        <h1>포스트</h1>
      </div>
      <section>
        <h2>에디터</h2>
        <Editor value={value} onChange={onChange} editorRef={quillRef} />
      </section>
      <section>
        <h2>미리보기</h2>
        <Viewer content={value} />
      </section>
    </div>
  );
}
