import { useNavigate } from 'react-router-dom';

const Condition = () => {
  const navigate = useNavigate();

  const handleTestSelection = (testId) => {
    navigate(`/test-form/${testId}`);
  };

  return (
    <div>
      <button onClick={() => handleTestSelection('anxiety')}>Anxiety Test</button>
      <button onClick={() => handleTestSelection('depression')}>Depression Test</button>
      {/* Add more buttons for other tests */}
    </div>
  );
};

export default Condition;
