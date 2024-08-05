import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Checkbox
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <div className="flex flex-col">
              <label
                htmlFor={`todo-${todo.id}`}
                className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              >
                {todo.text}
              </label>
              <Badge variant="outline" className="mt-1">
                <Tag className="h-3 w-3 mr-1" />
                {todo.category}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => deleteTodo(todo.id)}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
