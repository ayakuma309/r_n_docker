'use client'
import { updateTodo } from '@/app/api/todos/route'
import { TodoType } from '@/app/types/Todo'
import { useEffect, useRef, useState } from 'react'

// Todo一つを表示するコンポーネント
const Todo = ({ todo }: { todo: TodoType }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)
  const [editedDescription, setEditedDescription] = useState(todo.description)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus
    }
  }, [isEditing])

  const handleEditButtonClick = () => {
    setIsEditing(true)
  }

  const handleSaveButtonClick = async () => {
    await updateTodo(todo.id, editedTitle, editedDescription)
    setIsEditing(false)
    window.location.reload();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value)
  }

  return (
    <div className="focus:outline-none mb-7 bg-white p-6 shadow rounded">
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            value={editedTitle}
            onChange={handleInputChange}
            className="mr-2 py-2 px-2 rounded border-gray-400 border"
          />
          <input
            ref={inputRef}
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
            className="mr-2 py-2 px-2 rounded border-gray-400 border"
          />
        </>
      ) : (
        <>
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
            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
              {todo.description}
            </p>
          </div>
        </>
      )}
      {isEditing ? (
        <div
          onClick={handleSaveButtonClick}
          className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer mr-3"
        >
          保存
        </div>
      ) : (
        <>
          <div
            onClick={handleEditButtonClick}
            className="h-5 w-5 text-green-400 hover:text-green-700 cursor-pointer mr-3"
          >
            編集
          </div>
        </>
      )}
    </div>
  )
}

export default Todo
