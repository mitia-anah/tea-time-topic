import { upvoteSvg, downvoteSvg, archiveSvg, deleteSvg } from './svg.js';
import { fetchElement, myArray } from './data.js';
import { generateElement } from './elements.js';
import { items, addElement, displayItems } from './add.js';
import { form, input, myList, container, submitButton } from './libs.js';

form.addEventListener('submit', addElement);
container.addEventListener('itemsUpdated', displayItems);