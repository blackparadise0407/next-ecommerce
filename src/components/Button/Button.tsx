import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonAlignment = 'left' | 'right' | 'center';

export type ButtonSize = 'large' | 'small' | 'medium';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  outlined?: boolean;
  icon?: React.ReactNode;
  align?: ButtonAlignment;
  size?: ButtonSize;
  block?: boolean;
}

const getClassFromAlignment = (a: ButtonAlignment) => {
  switch (a) {
    case 'center':
      return 'justify-center';
    case 'left':
      return 'justify-start';
    case 'right':
      return 'justify-end';
    default:
      return '';
  }
};

const getClassFromSize = (s: ButtonSize) => {
  switch (s) {
    case 'large':
      return 'font-medium text-base px-7 py-3.5';
    case 'medium':
      return 'font-medium text-base px-5 py-2';
    case 'small':
      return 'text-xs tracking-tight px-3 py-1.5';
    default:
      return '';
  }
};

const getClassFromVariant = (v: ButtonVariant, outlined: boolean) => {
  switch (v) {
    case 'primary':
      return outlined
        ? 'text-black !border-black'
        : 'bg-black text-white hover:bg-opacity-80';
    case 'secondary':
      return '';
    default:
      return '';
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  outlined = false,
  align = 'center',
  size = 'medium',
  variant = 'primary',
  block = false,
  icon,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        'flex items-center gap-2 tracking-widest border border-transparent transition-all',
        block && 'w-full',
        getClassFromAlignment(align),
        getClassFromSize(size),
        getClassFromVariant(variant, outlined),
      )}
    >
      {children}
      {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
