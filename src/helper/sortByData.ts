const sortByName = <T extends { name: string }>(input: T[]) => {
  const res = [...input].sort((a, b) => a.name.localeCompare(b.name));
  return res;
};
const sortById = <T extends { id: number }>(input: T[]) => {
  const res = [...input].sort((a, b) => a.id - b.id);
  return res;
};

const sortByStatus = <T extends { status: number }>(input: T[]) => {
  const res = [...input].sort((a, b) => a.status - b.status);
  return res;
};
const sortByTotal = <T extends { total: number }>(input: T[]) => {
  const res = [...input].sort((a, b) => a.total - b.total);
  return res;
};

export { sortByName, sortById, sortByStatus, sortByTotal };