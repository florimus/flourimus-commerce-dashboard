import React, { FC } from 'react';

interface FormProps {
  children: () => React.ReactNode;
}

const Form: FC<FormProps> = ({ children }) => {
  return <form>{children()}</form>;
};

export default Form;
