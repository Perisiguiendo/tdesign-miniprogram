// 将rgb颜色转成hex
function colorRGB2Hex(color) {
  const rgb = color.split(',');
  const r = parseInt(rgb[0].split('(')[1], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2].split(')')[0], 10);

  // eslint-disable-next-line no-bitwise
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  return hex;
}

// 将hex颜色转成rgb
function hexToRgba(hex, opacity) {
  const RGBA = `rgba(${parseInt(`0x${hex.slice(1, 3)}`, 10)},${parseInt(`0x${hex.slice(3, 5)}`, 10)},${parseInt(
    `0x${hex.slice(5, 7)}`,
    10,
  )},${opacity})`;
  return {
    red: parseInt(`0x${hex.slice(1, 3)}`, 10),
    green: parseInt(`0x${hex.slice(3, 5)}`, 10),
    blue: parseInt(`0x${hex.slice(5, 7)}`, 10),
    rgba: RGBA,
  };
}

module.exports = {
  colorRGB2Hex,
  hexToRgba,
};
