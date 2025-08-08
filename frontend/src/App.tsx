import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import UsersPage from './pages/Users';
import CategoriesPage from './pages/Categories';
import QuestionsPage from './pages/Questions';
import ExamsPage from './pages/Exams';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/users">Users</Link> |{' '}
        <Link to="/categories">Categories</Link> |{' '}
        <Link to="/questions">Questions</Link> |{' '}
        <Link to="/exams">Exams</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/exams" element={<ExamsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
