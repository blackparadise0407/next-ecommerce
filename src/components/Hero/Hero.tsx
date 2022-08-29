import { Button } from '../Button';

export interface HeroProps {
  shortTitle: string;
  title: string;
  description: string;
  backgroundUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  shortTitle,
  title,
  description,
  backgroundUrl,
}) => {
  return (
    <div
      className="bg-red-200 h-[800px] flex items-center"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container grid grid-cols-12">
        <div className="col-span-8 lg:col-span-7 xl:col-span-5 space-y-5">
          <h6 className="uppercase text-red-500 font-medium">{shortTitle}</h6>
          <h1 className="text-5xl font-medium leading-snug">{title}</h1>
          <p className="text-neutral-600">{description}</p>
          <Button>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
