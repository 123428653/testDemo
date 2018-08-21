export default () => {
    let html = document.documentElement;

    function onWindowResize() {
      let width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 7.5 + 'px';
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
}