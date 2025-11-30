function tribonacciSequence(startSequence, length) {
  const sequence = startSequence.slice(0, length);

  while (sequence.length < length) {
    const n = sequence.length;
    sequence.push(sequence[n - 1] + sequence[n - 2] + sequence[n - 3]);
  }

  return sequence;
}
