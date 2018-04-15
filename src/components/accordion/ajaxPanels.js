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

// const ajaxRequest = new AjaxRequest('https://codepen.io/edofris/pen/mxZwNQ.js');

// ajaxRequest.ajaxGet().then((newPanels) => {
//   ajaxRequest.addPanels(newPanels);
// });

export default AjaxRequest;
