export default function interSectionObersever(onChange, id) {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };

  var observer = new IntersectionObserver(onChange, options);
  var target = document.querySelector(`#${id}`);
  observer.observe(target);
}
