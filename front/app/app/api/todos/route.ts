import { TodoType } from "@/app/types/Todo";

const baseUrl = "http://localhost:3000";

//更新
export const updateTodo = async (
  id: number,
  newTitle: string,
  newDescription: string
): Promise<TodoType> => {
  const res = await fetch(`${baseUrl}/api/v1/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, description: newDescription }),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: number): Promise<TodoType> => {
  const res = await fetch(`${baseUrl}/api/v1/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = await res.json();
  return deleteTodo;
};
