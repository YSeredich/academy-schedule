/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _schoolView;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schoolType = exports.schoolType = {
    SHMD: '0',
    SHMR: '1',
    SHRI: '2'
};

var schoolView = exports.schoolView = (_schoolView = {}, _defineProperty(_schoolView, schoolType.SHMD, {
    colorID: 'shmd',
    text: 'ШМД'
}), _defineProperty(_schoolView, schoolType.SHMR, {
    colorID: 'shmr',
    text: 'ШМР'
}), _defineProperty(_schoolView, schoolType.SHRI, {
    colorID: 'shri',
    text: 'ШРИ'
}), _schoolView);

var teachers = exports.teachers = {
    dushkin_d: {
        name: 'Дмитрий Душкин',
        description: 'Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big'
    },
    vasiliev_m: {
        name: 'Максим Васильев',
        description: 'Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big'
    },
    berezhnoi_s: {
        name: 'Сергей Бережной',
        description: 'Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/2e89984ab6d511e687ef002590c62a5c/big'
    },
    morozov_a: {
        name: 'Андрей Морозов',
        description: 'Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/478d8b92b6dc11e687ef002590c62a5c/big'
    },
    karev_i: {
        name: 'Иван Карев',
        description: 'Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/71a0f046b6d611e687ef002590c62a5c/big'
    },
    prokopuk_a: {
        name: 'Прокопюк Андрей',
        description: 'В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/08c0df918516725d5f8ac452fb8bf610/big'
    },
    matsukov_e: {
        name: 'Эдуард Мацуков',
        description: 'Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/9d9a8672b6da11e687ef002590c62a5c/big'
    },
    skladanov_d: {
        name: 'Дмитрий Складнов',
        description: 'Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/08c605ecb6dc11e687ef002590c62a5c/big'
    },
    grigoriev_r: {
        name: 'Роман Григорьев',
        description: 'Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/1ce07512b6dc11e687ef002590c62a5c/big'
    },
    shcherbinin_a: {
        name: 'Алексей Щербинин',
        description: 'Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/95043/209761c0b6dc11e687ef002590c62a5c/big'
    },
    makarov_a: {
        name: 'Алексей Макаров',
        description: 'Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/246b1f3ab6dc11e687ef002590c62a5c/big'
    },
    tagakov_v: {
        name: 'Владимир Тагаков',
        description: 'Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/24d12686b6dc11e687ef002590c62a5c/big'
    },
    hromtsov_m: {
        name: 'Максим Хромцов',
        description: 'Учится в магистратуре на факультете информатики и вычислительной техники Московского института радиотехники, электроники и автоматики. С 2005 года занимается разработкой приложений (игры, бизнес-приложения) для мобильных устройств на платформах J2ME, Windows Mobile, Android, Symbian, участвовал в разработке веб-приложений на Java EE. В Яндексе с 2010 года, занимается разработкой для мобильных устройств на платформах J2ME и Android.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/781ede98b6d511e687ef002590c62a5c/big'
    },
    zagaevskii_d: {
        name: 'Денис Загаевский',
        description: 'Окончил факультет ВМК МГУ им. Ломоносова. Занимается разработкой приложений и игр с 2011 года, в 2012-м сконцентрировался на мобильных платформах Android и iOS. В Яндексе разрабатывает приложения для Android.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/fc1d16442d6a7cbe12b154032f8a0019/big'
    },
    popov_d: {
        name: 'Дмитрий Попов',
        description: 'Окончил факультет ПМТ Вятского государственного университета в 2012 году. В Яндексе с 2015-го, занимается разработкой продуктов медийных сервисов.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/61b9c073415fbaea4bce3851900c28c8/big'
    },
    sergeev_i: {
        name: 'Илья Сергеев',
        description: 'Разрабатывает приложения под мобильные платформы с 2009 года. За это время принял участие более чем в 30 законченных проектах под Android, iOS, и Windows Phone. В Яндексе с 2015 года, занимается разработкой КиноПоиска под Android и iOS.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/bbe3a45e099d739cfb5bba6f96ae07f8/big'
    },
    ten_a: {
        name: 'Антон Тен',
        description: 'В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big'
    },
    vasunin_n: {
        name: 'Васюнин Николай',
        description: 'Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/1c55b8d2b6dc11e687ef002590c62a5c/big'
    },
    kalabin_s: {
        name: 'Сергей Калабин',
        description: 'Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/1e200dacb6dc11e687ef002590c62a5c/big'
    },
    tomilov_s: {
        name: 'Сергей Томилов',
        description: 'Серёжа: Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/9d003c48b6da11e687ef002590c62a5c/big'
    },
    staritsina_d: {
        name: 'Дарья Старицына',
        description: 'Дизайнер мобильных продуктов. До прихода в компанию занималась интерфейсами мобильных игр. В Яндексе делает Браузер под все платформы. Также успела поработать над экспериментальными голосовыми интерфейсами и мобильной версией главной страницы Яндекса.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/194464/441378dcb6dc11e687ef002590c62a5c/big'
    },
    rijshouwer_k: {
        name: 'Rijshouwer Krijn',
        description: 'Krijn Rijshouwer is a product designer. “I like to create and work on products that have a positive impact in the world. The thing that attracts me most in doing what I do at Framer, and did before at other companies, is changing the way a lot of people work, live and consume on a daily basis with just the push of a button.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/447ca5b4b6dc11e687ef002590c62a5c/big'
    },
    treub_j: {
        name: 'Treub Jonas',
        description: 'Jonas Treub is a software developer. “I am a creative software developer with experience working on a variety of projects, from small prototypes to large apps for some well-known Dutch clients.”',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/453b4dc0b6dc11e687ef002590c62a5c/big'
    },
    gevak_a: {
        name: 'Андрей Гевак',
        description: 'В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты. В докладе я расскажу о том, как шёл процесс переосмысления, почему мы сделали именно так, как сделали, и что из этого всего вышло.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/197753/6f74eb0eb6d811e687ef002590c62a5c/big'
    },
    kondratiev_a: {
        name: 'Кондратьев Александр',
        description: 'Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/198307/2e07060227e202433f0bf1d483ee0a15/big'
    },
    podorojnii_u: {
        name: 'Юрий Подорожный',
        description: 'Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/ccd5a5c8f1abbc2c6eebca87e56b5f5a/big'
    },
    moruz_d: {
        name: 'Дмитрий Моруз',
        description: 'Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/d6f837add3cb0a859a41959b8ae14c6a/big'
    },
    filippov_j: {
        name: 'Ждан Филиппов',
        description: 'Арт-директор коммуникаций Яндекса. В прошлом — арт-директор журналов «CitizenK», «Эрмитаж», «Секрет Фирмы», «Top-Flight», сотрудник «Мастерской Димы Барбанеля». Занимался макетной работой для компаний Readymag, Aliexpress, ONY, Charmer, MINI, Grohe и Мосметрострой.',
        photo: 'https://avatars.mds.yandex.net/get-yaevents/204268/c2548e0badfa7a678fecb2127d44828f/big'
    }
};

var lectures = exports.lectures = [{
    date: new Date(2017, 2, 20),
    name: 'Адаптивная вёрстка',
    link: 'https://events.yandex.ru/lib/talks/4162/',
    teachersIDs: ['dushkin_d'],
    place: 'Синий кит',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 2, 27),
    name: 'Работа с сенсорным пользовательским вводом',
    link: 'https://events.yandex.ru/lib/talks/4172/',
    teachersIDs: ['dushkin_d'],
    place: 'Синий кит',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 3, 3),
    name: 'Мультимедиа: возможности браузера',
    link: 'https://events.yandex.ru/lib/talks/4197/',
    teachersIDs: ['vasiliev_m'],
    place: 'Желтый носорог',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 3, 10),
    name: 'Нативные приложения на веб-технологиях',
    link: 'https://events.yandex.ru/lib/talks/4230/',
    teachersIDs: ['berezhnoi_s'],
    place: 'Желтый носорог',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 3, 17),
    name: 'Клиентская оптимизация: базовые знания и лучшие практики',
    link: 'https://events.yandex.ru/lib/talks/4292/',
    teachersIDs: ['morozov_a'],
    place: 'Хмурый питон',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 3, 24),
    name: 'Клиентская оптимизация: мобильные устройства и инструменты',
    link: 'https://events.yandex.ru/lib/talks/4307/',
    teachersIDs: ['karev_i'],
    place: 'Хмурый питон',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 4, 1),
    name: 'Инфраструктура веб-проектов',
    link: 'https://events.yandex.ru/lib/talks/4323/',
    teachersIDs: ['prokopuk_a'],
    place: 'Розовый слон',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 4, 1),
    name: 'Инструменты разработки мобильного фронтенда',
    link: 'https://events.yandex.ru/lib/talks/4324/',
    teachersIDs: ['prokopuk_a'],
    place: 'Розовый слон',
    schools: [schoolType.SHRI]
}, {
    date: new Date(2017, 2, 19),
    name: 'Java Blitz (Часть&nbsp;1)',
    link: 'https://events.yandex.ru/lib/talks/4160/',
    teachersIDs: ['matsukov_e'],
    place: 'Синий кит',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 2, 19),
    name: 'Git & Workflow',
    link: 'https://events.yandex.ru/lib/talks/4161/',
    teachersIDs: ['skladanov_d'],
    place: 'Желтый носорог',
    schools: [schoolType.SHMR, schoolType.SHRI]
}, {
    date: new Date(2017, 2, 25),
    name: 'Java Blitz (Часть&nbsp;2)',
    link: 'https://events.yandex.ru/lib/talks/4168/',
    teachersIDs: ['matsukov_e'],
    place: 'Синий кит',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 2, 25),
    name: 'MyFirstApp (Часть&nbsp;1)',
    link: 'https://events.yandex.ru/lib/talks/4169/',
    teachersIDs: ['grigoriev_r'],
    place: 'Веселый пингвин',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 2),
    name: 'MyFirstApp (Часть&nbsp;2)',
    link: 'https://events.yandex.ru/lib/talks/4195/',
    teachersIDs: ['grigoriev_r'],
    place: 'Веселый пингвин',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 2),
    name: 'ViewGroup',
    link: 'https://events.yandex.ru/lib/talks/4196/',
    teachersIDs: ['shcherbinin_a'],
    place: 'Хмурый питон',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 9),
    name: 'Background',
    link: 'https://events.yandex.ru/lib/talks/4222/',
    teachersIDs: ['makarov_a'],
    place: 'Хмурый питон',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 9),
    name: 'RecyclerView',
    link: 'https://events.yandex.ru/lib/talks/4223/',
    teachersIDs: ['tagakov_v'],
    place: 'Синий кит',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 16),
    name: 'Service & Broadcasts',
    link: 'https://events.yandex.ru/lib/talks/4275/',
    teachersIDs: ['makarov_a'],
    place: 'Зеленая зебра',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 16),
    name: 'Drawing',
    link: 'https://events.yandex.ru/lib/talks/4276/',
    teachersIDs: ['shcherbinin_a'],
    place: 'Синий кит',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 23),
    name: 'Content provider',
    link: 'https://events.yandex.ru/lib/talks/4296/',
    teachersIDs: ['hromtsov_m'],
    place: 'Веселый пингвин',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 23),
    name: 'SQL&SQLite',
    link: 'https://events.yandex.ru/lib/talks/4297/',
    teachersIDs: ['hromtsov_m'],
    place: 'Веселый пингвин',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 30),
    name: 'Fragments (Часть&nbsp;1)',
    link: 'https://events.yandex.ru/lib/talks/4320/',
    teachersIDs: ['zagaevskii_d'],
    place: 'Желтый носорог',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 3, 30),
    name: 'Fragments (Часть&nbsp;2)',
    link: 'https://events.yandex.ru/lib/talks/4321/',
    teachersIDs: ['zagaevskii_d'],
    place: 'Желтый носорог',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 4, 7),
    name: 'MVP&Co',
    link: 'https://events.yandex.ru/lib/talks/4346/',
    teachersIDs: ['popov_d'],
    place: 'Розовый слон',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 4, 14),
    name: 'Debugging & Polishing',
    link: 'https://events.yandex.ru/lib/talks/4352/',
    teachersIDs: ['sergeev_i'],
    place: 'Розовый слон',
    schools: [schoolType.SHMR]
}, {
    date: new Date(2017, 2, 18),
    name: 'Идея, исследование, концепт (Часть&nbsp;1)',
    link: 'https://events.yandex.ru/lib/talks/4158/',
    teachersIDs: ['ten_a'],
    place: 'Синий кит',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 2, 18),
    name: 'Идея, исследование, концепт (Часть&nbsp;2)',
    link: 'https://events.yandex.ru/lib/talks/4159/',
    teachersIDs: ['ten_a'],
    place: 'Синий кит',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 2, 25),
    name: 'Особенности проектирования мобильных интерфейсов',
    link: 'https://events.yandex.ru/lib/talks/4167/',
    teachersIDs: ['vasunin_n'],
    place: 'Розовый слон',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 1),
    name: 'Продукт и платформа',
    link: 'https://events.yandex.ru/lib/talks/4189/',
    teachersIDs: ['kalabin_s'],
    place: 'Розовый слон',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 1),
    name: 'Природа операционных систем',
    link: 'https://events.yandex.ru/lib/talks/4190/',
    teachersIDs: ['vasunin_n'],
    place: 'Хмурый питон',
    schools: [schoolType.SHMD, schoolType.SHRI, schoolType.SHMR]
}, {
    date: new Date(2017, 3, 8),
    name: 'Прототипирование как процесс',
    link: 'https://events.yandex.ru/lib/talks/4267/',
    teachersIDs: ['tomilov_s', 'staritsina_d'],
    place: 'Синий кит',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 8),
    name: 'Инструмент под задачи',
    link: 'https://events.yandex.ru/lib/talks/4268/',
    teachersIDs: ['tomilov_s', 'staritsina_d'],
    place: 'Синий кит',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 15),
    name: 'Анимации',
    link: 'https://events.yandex.ru/lib/talks/4266/',
    teachersIDs: ['tomilov_s', 'staritsina_d'],
    place: 'Синий кит',
    schools: [schoolType.SHMD, schoolType.SHRI]
}, {
    date: new Date(2017, 3, 15),
    name: 'Design Everything',
    link: 'https://events.yandex.ru/lib/talks/4269/',
    teachersIDs: ['rijshouwer_k', 'treub_j'],
    place: 'Зеленая зебра',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 22),
    name: 'Развите продукта',
    link: 'https://events.yandex.ru/lib/talks/4295/',
    teachersIDs: ['gevak_a'],
    place: 'Веселый пингвин',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 3, 29),
    name: 'Исследование интерфейсов',
    link: 'https://events.yandex.ru/lib/talks/4319/',
    teachersIDs: ['kondratiev_a'],
    place: 'Желтый носорог',
    schools: [schoolType.SHMD]
}, {
    date: new Date(2017, 4, 6),
    name: 'Работа в команде',
    link: 'https://events.yandex.ru/lib/talks/4345/',
    teachersIDs: ['podorojnii_u'],
    place: 'Хмурый питон',
    schools: [schoolType.SHMD, schoolType.SHRI, schoolType.SHMR]
}, {
    date: new Date(2017, 4, 13),
    name: 'Айдентика',
    link: 'https://events.yandex.ru/lib/talks/4349/',
    teachersIDs: ['moruz_d', 'filippov_j'],
    place: 'Синий кит',
    schools: [schoolType.SHMD]
}];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _school = __webpack_require__(3);

var _school2 = _interopRequireDefault(_school);

var _teacher = __webpack_require__(4);

var _teacher2 = _interopRequireDefault(_teacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateOptions = {
    day: 'numeric',
    month: 'short'
};

var dateNow = new Date();

var lectureMarkup = function lectureMarkup(lecture) {
    return '<div class="schedule__item lecture ' + (dateNow > lecture.date ? 'lecture--passed' : '') + '">\n                <div class="lecture__date">\n                    <div class="lecture__item lecture__item--date">' + lecture.date.toLocaleDateString('ru', dateOptions) + '</div>\n                </div>\n                <div class="lecture__info">\n                    <div class="lecture__item lecture__item--name">\n                        <a href="' + (dateNow > lecture.date ? lecture.link : '') + '" class="lecture__link">' + lecture.name + '\n                            <div class="lecture__more-btn">\n                                <img src="source/images/youtube.svg" class="lecture__more-btn-icon" alt="">\n                            </div>\n                        </a>\n                    </div>\n                    <div class="lecture__item lecture__item--teacher">' + (0, _teacher2.default)(lecture.teachersIDs) + '</div>\n                    <div class="lecture__item lecture__item--place">\xAB' + lecture.place + '\xBB</div>\n                    <div class="lecture__item lecture__item--school">' + (0, _school2.default)(lecture.schools) + '</div>\n                </div>\n            </div>';
};

exports.default = lectureMarkup;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lecture = __webpack_require__(1);

var _lecture2 = _interopRequireDefault(_lecture);

var _data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

    renderTeachersFilter(_data.teachers);
    renderLectures(_data.lectures);
    bindFiltersHandlers();

    function renderTeachersFilter(tutors) {
        var options = document.createDocumentFragment();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(tutors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                var option = new Option(tutors[key].name, key);
                options.appendChild(option);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var teachersSelect = document.getElementById('#teachersSelect');
        teachersSelect.appendChild(options);
    }

    function renderLectures(lecturesList) {
        var container = document.getElementById('#scheduleContent');
        var header = document.querySelector('.schedule__header');
        var content = void 0;
        lecturesList = filterLectures(lecturesList);
        if (lecturesList.length > 0) {
            content = document.createDocumentFragment();
            lecturesList.sort(compareLectures);
            lecturesList.forEach(function (lecture) {
                var wrapper = document.createElement('div');
                wrapper.innerHTML = (0, _lecture2.default)(lecture);
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
        var nameContainer = modal.querySelector('.teacher__name');
        var descriptionContainer = modal.querySelector('.teacher__description');
        var imgContainer = modal.querySelector('.teacher__image');

        nameContainer.textContent = _data.teachers[teacherID].name;
        descriptionContainer.textContent = _data.teachers[teacherID].description;
        imgContainer.setAttribute('src', _data.teachers[teacherID].photo);
    }

    function bindTeachersHandlers(content) {
        var teachersBtns = content.querySelectorAll('.lecture__teacher-name');
        var modal = document.getElementById('#teacherModal');
        var close = modal.querySelector('.modal__close');

        [].forEach.call(teachersBtns, function (teachersBtn) {
            teachersBtn.addEventListener('click', function (e) {
                fillTeacherInfo(modal, e.target.dataset.id);
                modal.classList.remove('invisible');
            });
        });

        close.addEventListener('click', function () {
            modal.classList.add('invisible');
        });
    }

    function bindFiltersHandlers() {
        var filters = document.querySelectorAll('.filters__select');
        var reset = document.querySelector('.filters__reset-btn');

        [].forEach.call(filters, function (filter) {
            filter.addEventListener('change', function () {
                renderLectures(_data.lectures);
            });
        });

        reset.addEventListener('click', resetFilters);
    }

    function compareLectures(a, b) {
        return a.date - b.date;
    }

    function filterLectures(lecturesList) {
        var filteredList = dateFiltering(lecturesList);
        filteredList = schoolFiltering(filteredList);
        return teachersFiltering(filteredList);
    }

    function resetFilters() {
        var filters = document.querySelectorAll('.filters__select');

        [].forEach.call(filters, function (filter) {
            filter.options[0].selected = true;
        });

        renderLectures(_data.lectures);
    }

    function dateFiltering(lecturesList) {
        var filter = document.getElementById('#dateSelect');
        var filterValue = filter.options[filter.selectedIndex].value;
        var dateNow = new Date();
        var filteredList = void 0;

        switch (filterValue) {
            case 'passed':
                filteredList = lecturesList.filter(function (item) {
                    return item.date < dateNow;
                });
                break;
            case 'future':
                filteredList = lecturesList.filter(function (item) {
                    return item.date >= dateNow;
                });
                break;
            case 'all':
                filteredList = lecturesList;
        }

        return filteredList;
    }

    function schoolFiltering(lecturesList) {
        var filter = document.getElementById('#schoolSelect');
        return includesFiltering(lecturesList, filter, 'schools');
    }

    function teachersFiltering(lecturesList) {
        var filter = document.getElementById('#teachersSelect');
        return includesFiltering(lecturesList, filter, 'teachersIDs');
    }

    function includesFiltering(lecturesList, filter, field) {
        var filterValue = filter.options[filter.selectedIndex].value;
        var filteredList = void 0;

        if (filterValue === 'all') {
            filteredList = lecturesList;
        } else {
            filteredList = lecturesList.filter(function (item) {
                return item[field].includes(filterValue);
            });
        }

        return filteredList;
    }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = __webpack_require__(0);

var schoolMarkup = function schoolMarkup(schools) {
    var _callbackText = function _callbackText(item) {
        return _data.schoolView[item].text;
    };
    var textContent = schools.map(_callbackText);
    textContent = textContent.join(' ');

    var _callbackColor = function _callbackColor(item) {
        var color = _data.schoolView[item].colorID;
        return '<i class="lecture__school-color lecture__school-color--' + color + '"></i>';
    };
    var colorContent = schools.map(_callbackColor);
    colorContent = colorContent.join('');

    return '<span class="lecture__school-text">' + textContent + '</span>\n                        <span class="lecture__school-colors">' + colorContent + '</span>';
};

exports.default = schoolMarkup;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = __webpack_require__(0);

var teachersMarkup = function teachersMarkup(teachersIDs) {
    var _callback = function _callback(item) {
        return '<span class="lecture__teacher-name" data-id="' + item + '">' + _data.teachers[item].name + '</span>';
    };
    var content = teachersIDs.map(_callback);
    return content.join(', ');
};

exports.default = teachersMarkup;

/***/ })
/******/ ]);