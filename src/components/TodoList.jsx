import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center">
              <Checkbox
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="mr-3"
              />
              <div className="flex flex-col">
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`${
                    todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                  } text-lg transition-colors duration-200`}
                >
                  {todo.text}
                </label>
                <Badge variant="outline" className="mt-1 text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {todo.category}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
              className="hover:bg-red-100 transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
