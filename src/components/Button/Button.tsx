export interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="bg-blue-500">{children}</button>;
};

export default Button;
