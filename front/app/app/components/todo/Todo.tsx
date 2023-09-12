'use client'
import { TodoType } from "@/app/types/Todo";
import Link from "next/link";

// Todo一つを表示するコンポーネント
const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <Link href={`/todos/${todo.id}`}>
      <div className="focus:outline-none mb-7 bg-white p-6 shadow rounded">
        <div className="flex items-center border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between w-full">
            <div className="pl-3">
              <p className="focus:outline-none text-lg font-medium leading-5 text-gray-800">
                {todo.title}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">{todo.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Todo;
