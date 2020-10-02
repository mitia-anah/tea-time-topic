import { fetchItem } from './data.js';
import { upvoteSvg, downvoteSvg, archiveSvg, deleteSvg } from './svg.js';
import { container, myList } from './libs.js';

export async function generateElement() {
    const elements = await fetchItem();
    const ListOfEl = elements.map(element => {
        return `
        <article>
            <span class="archiveSvg">${archiveSvg}</span>
            <p>${element.title}</p> 
            <span>
                <li class="upvote">${upvoteSvg}</li>
                <li class="downvote">${downvoteSvg}</li>
            </span>
        </article>
    `;
    }).join('');
    container.innerHTML += ListOfEl;
}
generateElement();