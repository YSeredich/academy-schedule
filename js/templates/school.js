import {schoolView} from '../data/data';
const schoolMarkup = function (schools) {
    const _callbackText = function(item) {
        return schoolView[item].text;
    };
    let textContent = schools.map(_callbackText);
    textContent = textContent.join(' ');

    const _callbackColor = function(item) {
        const color = schoolView[item].colorID;
        return `<i class="lecture__school-color lecture__school-color--${color}"></i>`;
    };
    let colorContent = schools.map(_callbackColor);
    colorContent = colorContent.join('');

    return `<span class="lecture__school-text">${textContent}</span>
                        <span class="lecture__school-colors">${colorContent}</span>`;
};

export default schoolMarkup;
