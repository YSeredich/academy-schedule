import {teachers} from '../data/data';
const teachersMarkup = function(teachersIDs) {
    const _callback = function(item) {
        return `<span class="lecture__teacher-name" data-id="${item}">${teachers[item].name}</span>`;
    };
    const content = teachersIDs.map(_callback);
    return content.join(', ');
};

export default teachersMarkup;
