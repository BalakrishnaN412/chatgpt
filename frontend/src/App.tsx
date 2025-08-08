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



interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const loadUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    setName('');
    setEmail('');
    loadUsers();
  };

  return (
    <div>
      <h1>QuizMaster Pro Users</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
