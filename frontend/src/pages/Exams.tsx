import React, { useEffect, useState } from 'react';

interface Exam {
  id: number;
  title: string;
}

const ExamsPage: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [title, setTitle] = useState('');

  const loadExams = async () => {
    const res = await fetch('/api/exams');
    const data = await res.json();
    setExams(data);
  };

  useEffect(() => {
    loadExams();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/exams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    setTitle('');
    loadExams();
  };

  return (
    <div>
      <h1>Exams</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Exam title" />
        <button type="submit">Add Exam</button>
      </form>
      <ul>
        {exams.map(e => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamsPage;
