export const getShortAddress = (string) => {
  const res = string.slice(0, 5) + "..." + string.slice(string.length - 4)
  return res
}