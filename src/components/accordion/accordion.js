import Panel from './panel';

const panelsContent = [
  {
    "heading": "Panel 1",
    "content": "Panel 1 Content..."
  },
  {
    "heading": "Panel 2",
    "content": "Panel 2 Content..."
  },
  {
    "heading": "Panel 3",
    "content": "Panel 3 Content..."
  }
]

class Accordion {
  constructor(container, panelsContent) {
     this.panelsContent = panelsContent;

      panelsContent.forEach((panelData) => {
        const panel = new Panel(panelData, container);
        // console.log(panel.generatePanel());
      });
  }

  openPanel() {
     const accordionHeading = document.querySelectorAll(this.heading);

     accordionHeading.forEach(item => {
        item.addEventListener('click', () => {
           accordionHeading.forEach(element => {
              element.classList.contains('active') ?
                 element.classList.remove('active') : null
           });

           item.classList.add('active');
        });
     });
  }

   openAllPanels() {
      const accordionHeading = document.querySelectorAll(this.heading);

      accordionHeading.forEach((item, key) => {
         item.addEventListener('click', () => {
           accordionHeading.forEach(element => {
              element.classList.contains('active') ?
                element.classList.remove('active') :
                element.classList.add('active');
           });
         });
      });
   }
}

const container = document.querySelector(".accordion");
const accordion = new Accordion(container, panelsContent);
// for open every use openAllPanels();
accordion.openPanel();

export default Accordion;