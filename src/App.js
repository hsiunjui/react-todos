// import TodoList from './components/todo/TodoList';
import { Routes, Route, Navigate  } from 'react-router-dom'
import Login from './views/Login'
import TodoList from './views/TodoList'
import TodoListRedux from './views/TodoListRedux'
import TodoListHook from './views/TodoListHook'

function App() {
  return (
    <main>
      <h1>title</h1>
      <Routes>
        <Route path="/" element={<Navigate replace to="/todo-redux" />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="/todo-redux" element={<TodoListRedux />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/hook" element={<TodoListHook />}></Route>
      </Routes>
    </main>
  );
}

export default App;
