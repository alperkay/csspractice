function toggle() {
  const toggleEl = document.getElementsByClassName('toggle')[0];
  if (toggleEl.classList) {
    toggleEl.classList.toggle('on');
  } else {
    // For IE9
    var classes = toggleEl.className.split(' ');
    var i = classes.indexOf('on');

    if (i >= 0) classes.splice(i, 1);
    else classes.push('on');
    toggleEl.className = classes.join(' ');
  }
  const resizeEl = document.getElementsByClassName('resize')[0];
  if (resizeEl.classList) {
    resizeEl.classList.toggle('active');
  } else {
    // For IE9
    var classes = resizeEl.className.split(' ');
    var i = classes.indexOf('active');

    if (i >= 0) classes.splice(i, 1);
    else classes.push('active');
    resizeEl.className = classes.join(' ');
  }
}
