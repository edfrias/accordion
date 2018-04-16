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
  constructor(accordionContainer, panelsContent) { /* eslint-disable-line */
    this.panelsContent = panelsContent;
    panelsContent.forEach((panelData) => {
      const panel = new Panel(panelData, accordionContainer); /* eslint-disable-line */
    });
  }

  openPanel() {
    const accordionHeading = document.querySelectorAll('.accordion-header');
    accordionHeading.forEach((item) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach((element) => {
          element.classList.contains('is-active') && element.classList.remove('is-active');
        });

        item.classList.add('is-active');
      });
    });
  }

  // If you want to open all panels at the same time use this:
  openAllPanels() {
    const accordionHeading = document.querySelectorAll('.accordion-header');
    accordionHeading.forEach((item) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach((element) => {
          element.classList.contains('is-active') ? element.classList.remove('is-active') : element.classList.add('is-active');
        });
      });
    });
  }
}

const accordionContainer = document.querySelector('.accordion');
const accordion = new Accordion(accordionContainer, panelsContent);
const ajaxRequest = new AjaxRequest('https://codepen.io/edofris/pen/mxZwNQ.js');

ajaxRequest.ajaxGet().then((newPanels) => {
  const pageButton = document.querySelector('.feeder');
  pageButton.addEventListener('click', () => {
    ajaxRequest.addPanels(newPanels);
    accordion.openPanel();
  });
});

accordion.openPanel();

export default Accordion;
