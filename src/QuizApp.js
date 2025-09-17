import React, { useState } from 'react';

function QuizApp() {
  const questions = [
    {
      text: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correct: 1,
    },
    {
      text: "Props trong React là gì?",
      options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
      correct: 1,
    },
    {
      text: "State dùng để?",
      options: [
        "Quản lý dữ liệu thay đổi",
        "Định nghĩa component",
        "Kết nối backend",
        "Trang trí giao diện",
      ],
      correct: 0,
    },
  ];
const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      {!finished ? (
        <div style={{marginBottom: 20}}>
          <p>{questions[current].text}</p>
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <p>
          Bạn trả lời đúng {score}/{questions.length} câu.
        </p>
      )}
    </div>
  );
}
export default QuizApp;