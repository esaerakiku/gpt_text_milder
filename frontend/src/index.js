import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Tailwind CSSをインポート

function App() {
  const [text, setText] = useState('');
  const [improvedText, setImprovedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const improveText = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/improve_text', { text });
      console.log(response); // レスポンスをログに出力
      setImprovedText(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error('Error improving text:', error);
      setImprovedText('Error improving text. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col items-center w-4/5 max-w-xl shadow-md p-6 bg-white border border-gray-300">
        <textarea className="w-full h-24 mb-4 text-lg font-sans" value={text} onChange={e => setText(e.target.value)} />
        <button className="w-full py-2 mb-4 text-lg font-bold text-white bg-blue-500 hover:bg-blue-700" onClick={improveText}>Mild</button>
        <div className="w-full break-words">{isLoading ? 'Wait a seconds, please...' : improvedText}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
