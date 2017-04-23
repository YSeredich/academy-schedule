import schoolMarkup from './school';
import teachersMarkup from './teacher';

const dateOptions = {
    day: 'numeric',
    month: 'short'
};

const dateNow = new Date();

const lectureMarkup = function (lecture) {
    return `<div class="schedule__item lecture ${dateNow > lecture.date ? 'lecture--passed' : ''}">
                <div class="lecture__date">
                    <div class="lecture__item lecture__item--date">${lecture.date.toLocaleDateString('ru', dateOptions)}</div>
                </div>
                <div class="lecture__info">
                    <div class="lecture__item lecture__item--name">
                        <a href="${dateNow > lecture.date ? lecture.link : ''}" class="lecture__link">${lecture.name}
                            <div class="lecture__more-btn">
                                <img src="images/youtube.svg" class="lecture__more-btn-icon" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="lecture__item lecture__item--teacher">${teachersMarkup(lecture.teachersIDs)}</div>
                    <div class="lecture__item lecture__item--place">«${lecture.place}»</div>
                    <div class="lecture__item lecture__item--school">${schoolMarkup(lecture.schools)}</div>
                </div>
            </div>`;
};

export default lectureMarkup;
