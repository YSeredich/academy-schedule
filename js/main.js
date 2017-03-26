import lectureMarkup from './templates/lecture';
import {teachers, lectures} from './data/data';
(function() {

    renderTeachersFilter(teachers);
    renderLectures(lectures);
    bindFiltersHandlers();

    function renderTeachersFilter(tutors) {
        let options = document.createDocumentFragment();
        for (const key of Object.keys(tutors)) {
            const option = new Option(tutors[key].name, key);
            options.appendChild(option);
        }

        const teachersSelect = document.getElementById('#teachersSelect');
        teachersSelect.appendChild(options);
    }

    function renderLectures(lecturesList) {
        const container = document.getElementById('#scheduleContent');
        const header = document.querySelector('.schedule__header');
        let content;
        lecturesList = filterLectures(lecturesList);
        if (lecturesList.length > 0) {
            content = document.createDocumentFragment();
            lecturesList.sort(compareLectures);
            lecturesList.forEach(function(lecture) {
                let wrapper = document.createElement('div');
                wrapper.innerHTML = lectureMarkup(lecture);
                content.appendChild(wrapper.childNodes[0]);
            });
            bindTeachersHandlers(content);
            header.classList.remove('invisible');
        } else {
            content = document.createElement('div');
            content.classList.add('schedule__empty');
            content.innerHTML = 'Нет лекций';
            header.classList.add('invisible');
        }

        container.innerHTML = '';
        container.appendChild(content);
    }

    function fillTeacherInfo(modal, teacherID) {
        const nameContainer = modal.querySelector('.teacher__name');
        const descriptionContainer = modal.querySelector('.teacher__description');
        const imgContainer = modal.querySelector('.teacher__image');

        nameContainer.textContent = teachers[teacherID].name;
        descriptionContainer.textContent = teachers[teacherID].description;
        imgContainer.setAttribute('src', teachers[teacherID].photo);
    }

    function bindTeachersHandlers(content) {
        const teachersBtns = content.querySelectorAll('.lecture__teacher-name');
        const modal = document.getElementById('#teacherModal');
        const close = modal.querySelector('.modal__close');

        [].forEach.call(teachersBtns, function(teachersBtn) {
            teachersBtn.addEventListener('click', function(e) {
                fillTeacherInfo(modal, e.target.dataset.id);
                modal.classList.remove('invisible');
            });
        });

        close.addEventListener('click', function () {
            modal.classList.add('invisible');
        });
    }

    function bindFiltersHandlers() {
        const filters = document.querySelectorAll('.filters__select');
        const reset = document.querySelector('.filters__reset-btn');

        [].forEach.call(filters, function(filter) {
            filter.addEventListener('change', function() {
                renderLectures(lectures);
            });
        });

        reset.addEventListener('click', resetFilters);

    }

    function compareLectures(a, b) {
        return a.date - b.date;
    }

    function filterLectures(lecturesList) {
        let filteredList = dateFiltering(lecturesList);
        filteredList = schoolFiltering(filteredList);
        return teachersFiltering(filteredList);
    }

    function resetFilters() {
        const filters = document.querySelectorAll('.filters__select');

        [].forEach.call(filters, function(filter) {
            filter.options[0].selected = true;
        });

        renderLectures(lectures);

    }

    function dateFiltering(lecturesList) {
        const filter = document.getElementById('#dateSelect');
        const filterValue = filter.options[filter.selectedIndex].value;
        const dateNow = new Date();
        let filteredList;

        switch (filterValue) {
            case 'passed':
                filteredList = lecturesList.filter(function(item) {
                    return item.date < dateNow;
                });
                break;
            case 'future':
                filteredList = lecturesList.filter(function(item) {
                    return item.date >= dateNow;
                });
                break;
            case 'all':
                filteredList = lecturesList;
        }

        return filteredList;
    }

    function schoolFiltering(lecturesList) {
        const filter = document.getElementById('#schoolSelect');
        return includesFiltering(lecturesList, filter, 'schools');
    }

    function teachersFiltering(lecturesList) {
        const filter = document.getElementById('#teachersSelect');
        return includesFiltering(lecturesList, filter, 'teachersIDs');
    }

    function includesFiltering(lecturesList, filter, field) {
        const filterValue = filter.options[filter.selectedIndex].value;
        let filteredList;

        if(filterValue === 'all') {
            filteredList = lecturesList;
        } else {
            filteredList = lecturesList.filter(function(item) {
                return item[field].includes(filterValue);
            });
        }

        return filteredList;
    }

})();

