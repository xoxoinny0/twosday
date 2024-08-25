import Removable from "@web/_component/tagInput/Removable";
import EditorPlaceholder from "../../_component/EditorPlaceholder";
import dynamic from "next/dynamic";
import * as css from "./form.css";
import { Editor as EditorType } from "@tiptap/react";

const Editor = dynamic(() => import("../../_component/Editor"), {
  ssr: false,
  loading: () => <EditorPlaceholder />,
});

interface FormProps {
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openTagsModal: () => void;
  tags: string[];
  value: string;
  onChange: (value: string) => void;
  editor: EditorType | null;
  session: Session;
}

export default function Form({
  title,
  value,
  onChangeTitle,
  onChange,
  openTagsModal,
  tags,
  editor,
  session,
}: FormProps) {
  return (
    <form className={css.form}>
      <div className={css.inputBox}>
        <input
          className={css.input}
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="제목을 입력해주세요"
          id="upload-title"
        />
      </div>
      <div className={css.tagsInput} onClick={openTagsModal}>
        {tags.map((tag, index) => (
          <Removable key={`saved_${tag}`} name={tag} />
        ))}
        {tags.length === 0 && <span>태그를 추가해주세요</span>}
      </div>
      <Editor editor={editor} />
    </form>
  );
}
