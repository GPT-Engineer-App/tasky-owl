import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TodoList from '../components/TodoList';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [activeTab, setActiveTab] = useState('personal');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, category: activeTab }]);
      setNewTodo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => todo.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Todo App</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="shopping">Shopping</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div className="flex mb-4">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new personal todo"
                className="flex-grow mr-2"
              />
              <Button onClick={addTodo}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </TabsContent>
          <TabsContent value="work">
            <div className="flex mb-4">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new work todo"
                className="flex-grow mr-2"
              />
              <Button onClick={addTodo}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </TabsContent>
          <TabsContent value="shopping">
            <div className="flex mb-4">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new shopping todo"
                className="flex-grow mr-2"
              />
              <Button onClick={addTodo}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
