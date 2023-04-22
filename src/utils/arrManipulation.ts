export const stringArrToOption = (
  strs: string[]
): { label: string; value: string }[] =>
  strs.map((i) => ({ label: i, value: i }));
