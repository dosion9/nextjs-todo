import { useState } from "react";

export const useTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
};
