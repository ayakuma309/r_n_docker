module Api
  module V1
    class TodosController < ApplicationController

      def index
        @todos = Todo.all
        render json: @todos
      end

      def show
        @todo = Todo.find(params[:id])
        render json: @todo
      end

      def create
        todo = Todo.new(todo_params)

        if todo.save
          render json: todo, status: :created
        else
          render json: todo.errors, status: :unprocessable_entity
        end
      end

      def destroy
        if @lyric.destroy
          head :no_content
        else
          render_error('Failed to destroy', :unprocessable_entity)
        end
      end

      private

      def todo_params
        params.require(:todo).permit(:title, :description, :is_completed, :priority)
      end
    end
  end
end
