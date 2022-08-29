import { CustomArrowProps } from 'react-slick';

const SlickButton: React.FC<CustomArrowProps & { icon: React.ReactNode }> = ({
  currentSlide: _currentSlide,
  slideCount: _slideCount,
  icon,
  ...props
}) => <div {...props}>{icon}</div>;

export default SlickButton;
