function solution(nums) {
  const setNums = [...new Set(nums)];

  if (nums.length === 2) return 1;
  if (nums.length / 2 <= setNums.length) return nums.length / 2;
  return setNums.length;
}
