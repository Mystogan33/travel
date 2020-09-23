function handleClick(event, action) {
      var parent = event.parentNode.childNodes[action];
      alert(parent.textContent);
}
