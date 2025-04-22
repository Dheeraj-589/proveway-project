const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    boxes.forEach((b) => {
      if (b !== box) b.classList.remove('expanded');
    });

    box.classList.toggle('expanded');

    if (!box.querySelector('.options')) {
      const options = document.createElement('div');
      options.className = 'options';

      options.innerHTML = `
        <div>
          <div class="option-label">Color</div>
          <div class="option-group">
            <div class="option-button">Red</div>
            <div class="option-button">Blue</div>
            <div class="option-button">Green</div>
          </div>
        </div>
        <div>
          <div class="option-label">Size</div>
          <div class="option-group">
            <div class="option-button">S</div>
            <div class="option-button">M</div>
            <div class="option-button">L</div>
          </div>
        </div>
      `;
      box.appendChild(options);
    }
  });
});
