export interface Markup {
  node: Node,
  stringified: string,
}

let domImplementation: DOMImplementation;
let xmlSerializer: XMLSerializer;

if (process.envType === 'browser') {
  domImplementation = document.implementation;
  xmlSerializer = new XMLSerializer();
}
else {
  const {
    DOMImplementation,
    XMLSerializer,
  } = require('xmldom');

  domImplementation = new DOMImplementation();
  xmlSerializer = new XMLSerializer();
}

const xmlToString = (xml: Element): string => {
  return xmlSerializer.serializeToString(xml);
}

export const createHtml5Markup = (): Markup => {
  const doc = domImplementation.createDocument('', '', null);

  const html = doc.createElement('html');
  doc.appendChild(html);

  const head = doc.createElement('head');
  html.appendChild(head);

  const title = doc.createElement('title');
  head.appendChild(title);
  title.textContent = 'I am a valid HTML5 document';

  const body = doc.createElement('body');
  html.appendChild(body);

  return {
    node: html,
    stringified: `<!DOCTYPE html>${xmlToString(html)}`,
  };
}