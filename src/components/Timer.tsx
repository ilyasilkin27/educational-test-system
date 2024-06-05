import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitTest } from '../state/testSlice';
import { Alert } from 'react-bootstrap';

const Timer: React.FC = () => {
  const [time, setTime] = useState(600); // 10 минут в секундах
  const dispatch = useDispatch();

  useEffect(() => {
    if (time === 0) {
      dispatch(submitTest());
      return;
    }
    const timer = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time, dispatch]);

  return <Alert variant="warning" className="text-center">Оставшееся время: {Math.floor(time / 60)}:{time % 60}</Alert>;
};

export default Timer;
