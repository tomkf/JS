const sum = (start, end) => {
  if (start == end) {
    return start;
  }
  return start + sum(start + 1, end);
}

console.log(sum(1, 10));
//55
