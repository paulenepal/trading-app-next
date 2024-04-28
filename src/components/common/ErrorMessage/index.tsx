import { ErrorMessage } from '@hookform/error-message';

interface FormErrorMessageProps {
  formName: string;
  errors: object;
}

export default function FormErrorMessage({ formName, errors }: FormErrorMessageProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={formName}
      render={({ message }) => <span>{message}</span>}
    />
  );
}