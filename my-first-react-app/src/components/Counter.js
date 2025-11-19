import React, { useState } from 'react'

function Counter() {
  // useState מחזיר מערך של 2 איברים:
  // 1. המשתנה של ה-state (count)
  // 2. פונקציה לעדכון ה-state (setCount)
  // הערך שבתוך useState() הוא הערך ההתחלתי של ה-state.
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // עדכון ה-state באמצעות הפונקציה setCount
  };

  return (
    <div>
      <p>לחצת על הכפתור {count} פעמים.</p>
      <button onClick={increment}>
        לחץ עלי!
      </button>
    </div>
  );
}

export default Counter;