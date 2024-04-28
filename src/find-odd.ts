// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd)

function findOdd(data: number[]) {
  if (data.length % 2 === 0) return;
  const set = [...new Set(data)]; // filter duplicates
  const should = set.find((item) => data.filter((el) => el == item).length % 2);
  const occurs = data.filter((el) => el === should).length;
  return { should, occurs };
}

export { findOdd };
