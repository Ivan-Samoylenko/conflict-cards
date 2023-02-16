const animations = {
  glare: fillGlare(18),
};

export default animations;

function glareKeyFrameTemplate(index, steps) {
  const percent = (100 / steps) * index;

  return `${percent}% {background: linear-gradient(115deg, rgba(0,0,0,0.1) ${
    0 + percent
  }%, rgba(255,255,255,0.7), rgba(0,0,0,0.1) ${12 + percent}%);}`;
}

function fillGlare(steps) {
  return Array(steps)
    .fill('')
    .map((_, index) => glareKeyFrameTemplate(index, steps))
    .join('');
}
