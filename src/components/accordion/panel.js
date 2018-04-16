function generatePanel(title, content) {
  return `<dt class="accordion-header">${title}</dt>
  <dd class="accordion-body">
  <p>${content}</p>
  </dd>`;
}

class Panel {
  constructor({ heading, content }, accordionContainer) {
    const panelHtml = generatePanel(heading, content);
    accordionContainer.insertAdjacentHTML('beforeend', panelHtml);
  }
}

export default Panel;
