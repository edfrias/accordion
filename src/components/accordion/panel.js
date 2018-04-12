function generatePanel(title, content) {
  return `<dt class="accordion-header">${title}</dt>
  <dd class="accordion-body">
  <p>${content}</p>
  </dd>`;
}

class Panel {
  constructor({heading, content}, container){
    const panelHtml = generatePanel(heading, content);
    container.insertAdjacentHTML('beforeend', panelHtml);
  }
}

export default Panel;
