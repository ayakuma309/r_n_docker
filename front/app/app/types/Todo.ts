export type TodoType = {
  id: number;
  title: string;
  description: string;
  is_complete: boolean;
  priority: number;
};

export type CreateTodoType = {
  title: string;
  description: string;
};
