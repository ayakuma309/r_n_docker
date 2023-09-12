import { TodoType, CreateTodoType } from "@/app/types/Todo";

const baseUrl = "http://localhost:3000";

//取得
export const getAllTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(`${baseUrl}/api/v1/todos`, { cache: "no-store" }); //getserversideprops
  const todos = await res.json();
  return todos;
};

//作成
export const addTodo = async (todo: CreateTodoType): Promise<CreateTodoType> => {
  const res = await fetch(`${baseUrl}/api/v1/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};


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

//削除
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
