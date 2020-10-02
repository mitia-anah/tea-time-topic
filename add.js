import { container, form, myList } from './libs.js';
import { upvoteSvg, downvoteSvg, archiveSvg, deleteSvg } from './svg.js';
export const items = [];
export const addElement = e => {
    e.preventDefault(); // prevent the page from loading
    const title = e.currentTarget;
    console.log(title);
    // if it is empty, then don't submit it.
    if (!title) return;

    const item = {
        title: title.value,
        id: Date.now(),
    };
    // push it into our state
    items.push(item);
    console.info(`There are now ${items.length} in your state`);
    // clear the form
    e.target.reset();
    displayItems();
};

export const displayItems = () => {
    const html = items.map(item =>
            `<article>
                <span class="archiveSvg">${archiveSvg}</span>
                <p>${item.value}</p>
                <span>
                    <li class="upvote">${upvoteSvg}</li>
                    <li class="downvote">${downvoteSvg}</li>
                </span>
            </article>
            `)
        .join('');
    container.insertAdjacentHTML('afterbegin', html);
};