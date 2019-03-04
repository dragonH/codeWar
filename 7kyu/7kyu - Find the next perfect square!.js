function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let ans = Math.sqrt(sq);
  let y = String(ans).indexOf(".") + 1;
  if (y > 0) {
    return - 1;
  } else {
    ans += 1;
    return ans * ans;
  }
}