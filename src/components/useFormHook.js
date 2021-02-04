import { useState } from 'react';

export const useForm = data => {
  const [values, setState] = useState(data);

  const handleChange = e => {
    setState({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  return [values, handleChange];
};
