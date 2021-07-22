export const rupiahFormatter = angka => {
  let rupiah = '';
  const number = angka.toString().split('').reverse().join('');
  for (let i = 0; i < number.length; i++) {
    if (i % 3 === 0) {
      rupiah += number.substr(i, 3) + '.';
    }
  }
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
};
