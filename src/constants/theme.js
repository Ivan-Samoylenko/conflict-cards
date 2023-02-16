const theme = {
  colors: {
    color: {
      header: '#ffffff',
      btn: {
        normal: '#ffffff',
      },
    },
    bcg: {
      header: '#333333',
      btn: {
        normal: '#333333',
      },
      btnBefore: {
        normal: 'rgba(0, 0, 0, 0.2)',
        hover: 'rgba(0, 0, 0, 0.1)',
        active: 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  shadows: {
    box: {
      profileIcon: '0 0 0 2px #333, 0 0 2px 4px #eee',
      normalBtn:
        'inset 2px 2px 0 0 #555555, inset -2px -2px 0 0 #111111, inset 0 0 1px 5px #333333, inset 0 0 1px 7px #ffffff',
      activeBtn:
        'inset -2px -2px 0 0 #555555, inset 2px 2px 2px #111111, inset 0 0 1px 5px #333333, inset 0 0 1px 7px #ffffff',
    },
    text: {
      logo: makeTextOutline(2, '#333', '#eee'),
    },
  },
  transition: '150ms linear',
  animation: {
    btnBefore: '300ms 150ms linear',
  },
};

export default theme;

function makeTextOutline(width = 1, bcg = '#000', color = '#fff') {
  const arr = Array(width * 2).fill('');

  const textOutline = arr.map((_, index) => {
    const px = index + 1;

    if (px <= width) {
      return `${px}px ${px}px ${px}px ${bcg}, ${px}px -${px}px ${px}px ${bcg}, -${px}px ${px}px ${px}px ${bcg}, -${px}px -${px}px ${px}px ${bcg}`;
    } else {
      return `${px}px ${px}px ${px}px ${color}, ${px}px -${px}px ${px}px ${color}, -${px}px ${px}px ${px}px ${color}, -${px}px -${px}px ${px}px ${color}`;
    }
  });

  return textOutline.join(',');
}
