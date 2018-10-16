const SCREEN_SIZES = [
  ['tablet', 768]
];

const colors = {
  brand: 'rgb(0 ,0, 0)'
};

const fonts = {
  serif: {
    family: 'Lora, serif',
    weight: {
      regular: 400
    }
  },

  sansSerif: {
    family: 'Poppins, sans-serif',
    weight: {
      regular: 400,
      bold: 700
    }
  }
};

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export { colors, fonts, mq };
