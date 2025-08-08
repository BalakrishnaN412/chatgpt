import React, { useEffect, useState } from 'react';

interface Question {
  id: number;
  text: string;
}

const QuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [text, setText] = useState('');

  const loadQuestions = async () => {
    const res = await fetch('/api/questions');
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    setText('');
    loadQuestions();
  };

  return (
    <div>
      <h1>Questions</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Question text" />
        <button type="submit">Add Question</button>
      </form>
      <ul>
        {questions.map(q => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsPage;
