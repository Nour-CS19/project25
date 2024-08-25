import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UserList from './UserList';
import UserDetail from './UserDetails';
import Weather from './Weather';
import Users from './Users';
import TodoList from './Todolist';
import Contact from './Contact'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/UserDetails" element={<UserDetail />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
