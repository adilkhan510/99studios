import { Button } from './Button';
import Container from './ui/Container';

const Cta = () => {
  return (
    <Container className="max-w-[80rem]">
      <div className=" p-4 md:px-20 md:py-20 mt-40 mx-auto   rounded-lg flex flex-col items-center bg-blue-400 bg-opacity-10">
        <h2 className=" text-4xl md:text-6xl tracking-tight font-bold text-blue-300">
          Power Up Your Online Presence.
        </h2>
        <p className="text-slate-400 mt-5 text-lg md:text-xl max-w-4xl text-center">
          Transform your business with our top-notch web solutions that are not
          just fast, but also engaging and tailored to your needs.
        </p>
        <div className="flex mt-5">
          <Button
            href="#"
            variant="inverted"
            size="large"
            className="font-bold rounded-md dark:text-black shadow-md bg-blue-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
