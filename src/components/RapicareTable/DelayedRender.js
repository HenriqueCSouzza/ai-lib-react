import useDelayedRender from "../../hooks/useDelayedRender";
function DelayedRender({ delay, children }) {
  return useDelayedRender(delay)(() => children);
}

export default DelayedRender;
