let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2)); // 1 Hold
console.log(cc(3)); // 2 Hold
console.log(cc(7)); // 2 Hold
console.log(cc('K')); // 1 Hold
console.log(cc('A')); // 0 Hold
