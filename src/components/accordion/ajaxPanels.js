import Panel from './panel';

class AjaxRequest {
  constructor(url) {
    this.url = url;
  }

  ajaxGet() {
    return new Promise((resolve) => {
      const ajaxCall = new XMLHttpRequest(); /* eslint-disable-line */
      ajaxCall.onreadystatechange = () => {
        let panels;
        if (ajaxCall.readyState === 4 && (ajaxCall.status === 200 || ajaxCall.status === 304)) {
          const data = ajaxCall.responseText;
          panels = JSON.parse(data);

          resolve(panels);
        }
      };

      ajaxCall.open('GET', this.url, true);
      ajaxCall.send();
    });
  }

  addPanels(panels) {
    const container = document.querySelector('.accordion');

    panels.forEach((panelData) => {
      const panel = new Panel(panelData, container); /* eslint-disable-line */
    });
  }
}

const container = document.querySelector('.container');
const addButton = '<button class="feeder">Feed the accordion!</button>';
container.insertAdjacentHTML('beforeend', addButton);

export default AjaxRequest;
