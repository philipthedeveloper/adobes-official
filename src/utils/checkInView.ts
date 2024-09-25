/**
 * @param HTMLElement
 * @returns boolean
 * @description Takes an html element and returns either true or false depending on if it is within viewport or  not
 */
export const checkInViewPort = (el: HTMLElement) => {
  let elPos = el.getBoundingClientRect();
  // console.log(el, elPos.top, elPos.bottom);
  return (
    (elPos.top <= 0 && elPos.bottom >= -16500) ||
    (elPos.top >= 0 && elPos.bottom <= window.innerHeight) ||
    (elPos.bottom >= window.innerHeight && elPos.top <= window.innerHeight - 60)
  );
};
