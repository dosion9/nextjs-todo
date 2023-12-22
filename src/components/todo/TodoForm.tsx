"use client";

import React, { useState } from "react";
import { Button } from "../common/Button";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(1);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-4 border-yellow-500 border-2 rounded"
    >
      <fieldset>
        <label htmlFor="todo__form-id" className="block mb-2 font-bold">
          Todo 제목
        </label>
        <input
          type="text"
          name="todo__form-id"
          id="todo__form-id"
          className="w-full bg-gray-100 rounded p-2 focus:bg-white focus:outline-yellow-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="todo__form-content" className="block mb-2 font-bold">
          Todo 내용
        </label>
        <textarea
          name="todo__form-content"
          id="todo__form-content"
          rows={5}
          autoComplete="false"
          className="w-full bg-gray-100 resize-none rounded p-2 focus:bg-white focus:outline-yellow-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </fieldset>
      <div>
        <Button type="submit" className="w-full">
          todo 생성
        </Button>
      </div>
    </form>
  );
};
