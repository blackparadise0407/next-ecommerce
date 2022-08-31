export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default TextField;
