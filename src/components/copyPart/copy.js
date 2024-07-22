export const getClientY = (event, set) => {
  const clientY = event.pageY;
  set({ clientY: clientY });

  navigator.clipboard.writeText(document.URL);
};

export const setScrollPosition = (searchContent) => {
  const getTop = searchContent.split("=")[1] - 100;
  window.scrollTo({ top: getTop });
};
