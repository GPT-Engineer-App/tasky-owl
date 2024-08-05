import { useState } from 'react';
import { Plus, CheckCircle2, ListTodo, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TodoList from '../components/TodoList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const tabIcons = {
    personal: <CheckCircle2 className="h-4 w-4" />,
    work: <ListTodo className="h-4 w-4" />,
    shopping: <ShoppingCart className="h-4 w-4" />,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-blue-600">Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              {Object.entries(tabIcons).map(([key, icon]) => (
                <TabsTrigger key={key} value={key} className="flex items-center justify-center">
                  {icon}
                  <span className="ml-2 capitalize">{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.keys(tabIcons).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="flex mb-4">
                  <Input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Add a new ${tab} todo`}
                    className="flex-grow mr-2"
                  />
                  <Button onClick={addTodo} className="bg-blue-500 hover:bg-blue-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
