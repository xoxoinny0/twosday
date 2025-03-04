"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (!file) return;
    formData.append("image", file);
    const res = await fetch("/api/v1/images", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error(res.statusText);
      throw new Error("이미지 업로드에 실패했습니다.");
    }

    // console.log(await res.json());
    return true;
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // console.log(file);
    if (!file) return;
    setFile(file);
  };

  return (
    <div>
      test
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChangeFile} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
