import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ProgressBar: React.FC<{ className?: string }> = ({ className }) => {
  const progress = useSelector((state: RootState) => state.test.progress);

  return (
    <BootstrapProgressBar now={progress} label={`${progress}%`} className={className} />
  );
};

export default ProgressBar;
