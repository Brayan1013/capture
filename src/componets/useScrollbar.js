import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollbar = () => {
  const [ref, view] = useInView({ threshold: 0.4 });
  const controlls = useAnimation();
  if (view) {
    controlls.start('show');
  } else {
    controlls.start('hidden');
  }

  return [ref, controlls];
};
