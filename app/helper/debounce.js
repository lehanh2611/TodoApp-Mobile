export default function debounce(fn, ms) {
  let timerID;
  return (...props) => {
    if (timerID) {
      clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
      fn(...props);
    }, ms);
  };
}
