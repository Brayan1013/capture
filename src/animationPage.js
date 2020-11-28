export const animationPage = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const animateTitle = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const animateText = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const animateImage = {
  hidden: {
    scale: 1.75,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const animateLine = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: {
      duration: 1.5,
    },
  },
};

export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
