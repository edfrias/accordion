import './index.scss';
import Panel from './panel';
import AjaxRequest from './ajaxPanels';

const panelsContent = [
  {
    heading: 'Panel 1',
    content: 'Panel 1 Content...',
  },
  {
    heading: 'Panel 2',
    content: 'Panel 2 Content...',
  },
  {
    heading: 'Panel 3',
    content: 'Panel 3 Content...',
  },
];

class Accordion {
  constructor(container, panelsContent) { /* eslint-disable-line */
    this.panelsContent = panelsContent;
    panelsContent.forEach((panelData) => {
      const panel = new Panel(panelData, container); /* eslint-disable-line */
    });
  }

  openPanel() {
    const accordionHeading = document.querySelectorAll('.accordion-header');
    accordionHeading.forEach((item) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach((element) => {
          element.classList.contains('active') && element.classList.remove('active');
        });

        item.classList.add('active');
      });
    });
  }

  // If you want to open all panels at the same time use this:
  openAllPanels() {
    const accordionHeading = document.querySelectorAll('.accordion-header');
    accordionHeading.forEach((item) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach((element) => {
          element.classList.contains('active') ? element.classList.remove('active') : element.classList.add('active');
        });
      });
    });
  }
}

const addButton = '<button class="feeder" onclick="">Feed the accordion!</button>';
const container = document.querySelector('.accordion');
container.insertAdjacentHTML('beforeend', addButton);
const accordion = new Accordion(container, panelsContent);
const ajaxRequest = new AjaxRequest('https://codepen.io/edofris/pen/mxZwNQ.js');

ajaxRequest.ajaxGet().then((newPanels) => {
  ajaxRequest.addPanels(newPanels);
});

accordion.openPanel();

export default Accordion;
