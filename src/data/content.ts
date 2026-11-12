import type { NavId } from "./site";

export type Lang = "kk" | "ru";

type Item = { title: string; text: string };

export type Dictionary = {
  langName: string;
  nav: Record<NavId, string>;
  ui: {
    whatsapp: string;
    menu: string;
    closeMenu: string;
    switchLang: string;
    backToTop: string;
  };
  hero: {
    titleBefore: string;
    titleAfter: string;
    subtitle: string;
    description: string;
    ctaContact: string;
    ctaMore: string;
    badge: string;
    stats: { value: string; label: string }[];
    hoursLabel: string;
    photoAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    features: Item[];
    photoAlt: string;
    groupsTitle: string;
    groupsIntro: string;
    groupName: (n: number) => string;
    groupPoints: string[];
    groupsNote: string;
    groupsCall: string;
  };
  nutrition: {
    eyebrow: string;
    title: string;
    subtitle: string;
    meals: Item[];
    note: string;
    perDay: string;
  };
  clubs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Item[];
    swipeHint: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    more: string;
    less: string;
    emptyTitle: string;
    emptyText: string;
    openPhoto: string;
    close: string;
    prev: string;
    next: string;
    photoAlt: (n: number) => string;
  };
  documents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyText: string;
    open: string;
    drive: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    subtitle: string;
    kindergarten: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    daysLabel: string;
    days: string;
    hoursLabel: string;
    call: string;
    map: string;
    mapText: string;
    writeUs: string;
  };
  footer: {
    tagline: string;
    legal: string;
    rights: string;
    sections: string;
    contacts: string;
  };
};

const kk: Dictionary = {
  langName: "ҚАЗ",
  nav: {
    about: "Біз туралы",
    nutrition: "Тамақтану",
    clubs: "Үйірмелер",
    gallery: "Галерея",
    documents: "Құжаттар",
    contacts: "Байланыс",
  },
  ui: {
    whatsapp: "WhatsApp",
    menu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    switchLang: "Тілді таңдау",
    backToTop: "Жоғары",
  },
  hero: {
    titleBefore: "",
    titleAfter: "балабақшасы",
    subtitle: "Балаңыздың бақытты балалық шағы осы жерден басталады!",
    description:
      "1–7 жас аралығындағы балаларға арналған жайлы орта, қызықты сабақтар және жан-жақты даму мүмкіндіктері.",
    ctaContact: "Бізбен байланысу",
    ctaMore: "Толығырақ",
    badge: "Қазақ тілінде тәрбие",
    stats: [
      { value: "1–7", label: "жас" },
      { value: "3", label: "топ" },
      { value: "5", label: "мезгіл тамақтану" },
    ],
    hoursLabel: "Дс–Жм",
    photoAlt: "«Ай Патшам» балабақшасы",
  },
  about: {
    eyebrow: "Біз туралы",
    title: "Біз туралы және топтарымыз",
    lead:
      "«Ай Патшам» — балаларға арналған жылы да жайлы балабақша. Біз әр баланың бақытты, белсенді әрі ізденімпаз болып өсуіне жағдай жасаймыз. Тәрбие мен білім беру қазақ тілінде жүргізіледі, ал күнделікті шығармашылық және танымдық сабақтар балалардың жан-жақты дамуына көмектеседі.",
    features: [
      {
        title: "Қазақ тіліндегі тәрбие",
        text: "Тәрбие мен білім беру ана тілімізде жүргізіледі.",
      },
      {
        title: "Жан-жақты даму",
        text: "Баланың ойлау, сөйлеу, шығармашылық және дене дамуына көңіл бөлеміз.",
      },
      {
        title: "Шығармашылық және танымдық сабақтар",
        text: "Ойын арқылы үйренуге және жаңа нәрселерді ашуға мүмкіндік береміз.",
      },
      {
        title: "Жайлы орта",
        text: "Балалар өздерін үйдегідей сезінетін жылы атмосфера.",
      },
      {
        title: "Әр балаға жеке көзқарас",
        text: "Әр баланың қабілеті мен қызығушылығын ескеріп, оны дамытуға тырысамыз.",
      },
    ],
    photoAlt: "«Ай Патшам» балабақшасындағы балалар",
    groupsTitle: "Біздің топтар",
    groupsIntro: "Балабақшада 1 жастан 7 жасқа дейінгі балаларға арналған 3 топ жұмыс істейді.",
    groupName: (n) => `${n}-топ`,
    groupPoints: ["Қазақ тілінде тәрбие", "Шығармашылық сабақтар", "5 мезгіл тамақтану"],
    groupsNote: "Топтар туралы толық ақпаратты телефон арқылы біле аласыз.",
    groupsCall: "Қоңырау шалу",
  },
  nutrition: {
    eyebrow: "Тамақтану",
    title: "Дәмді әрі пайдалы тамақтану",
    subtitle: "Балаларға күніне 5 мезгіл тамақ беріледі.",
    meals: [
      { title: "Таңғы ас", text: "Күнді жігерлі бастау үшін" },
      { title: "Екінші таңғы ас", text: "Жеңіл әрі пайдалы толықтыру" },
      { title: "Түскі ас", text: "Күннің негізгі ас мезгілі" },
      { title: "Бесін ас", text: "Күш-қуат қосатын жеңіл ас" },
      { title: "Кешкі ас", text: "Күнді жайлы аяқтау үшін" },
    ],
    note: "Нақты мәзір туралы ақпаратты балабақшадан біле аласыз.",
    perDay: "мезгіл күніне",
  },
  clubs: {
    eyebrow: "Қосымша сабақтар",
    title: "Қызықты үйірмелер",
    subtitle: "Балаңыздың қызығушылығын оятып, қабілетін ашуға көмектесетін қосымша сабақтар.",
    items: [
      { title: "Ағылшын тілі", text: "Шет тілін қызықты сабақтар арқылы меңгереміз." },
      { title: "Робототехника", text: "Логиканы, ойлауды және технологияға қызығушылықты дамытады." },
      { title: "Музыка", text: "Музыкалық қабілет пен шығармашылық қабылдауды дамытады." },
      { title: "Хореография", text: "Ырғақ сезімін, икемділік пен қимыл үйлесімділігін дамытады." },
      { title: "Дене шынықтыру", text: "Қимыл белсенділігі, ептілік және дене дамуы." },
    ],
    swipeHint: "Жылжытып көріңіз",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Біздің жарқын сәттеріміз",
    subtitle: "Балабақшадағы күнделікті қуанышты сәттер.",
    more: "Көбірек көрсету",
    less: "Жасыру",
    emptyTitle: "Фотосуреттер жақында қосылады",
    emptyText: "Әзірге біздің Instagram парақшамызды қараңыз.",
    openPhoto: "Фотосуретті үлкейту",
    close: "Жабу",
    prev: "Алдыңғы",
    next: "Келесі",
    photoAlt: (n) => `«Ай Патшам» балабақшасы — фото ${n}`,
  },
  documents: {
    eyebrow: "Ресми ақпарат",
    title: "Құжаттар",
    subtitle: "Балабақшаның ресми құжаттары осы бөлімде жарияланады.",
    emptyTitle: "Құжаттар жақында қосылады",
    emptyText: "Сұрақтарыңыз болса, бізге хабарласыңыз.",
    open: "Ашу",
    drive: "Барлық құжаттар (Google Drive)",
  },
  contacts: {
    eyebrow: "Байланыс",
    title: "Бізбен байланысыңыз",
    subtitle: "Сұрақтарыңызға қуана жауап береміз — жазыңыз немесе қоңырау шалыңыз.",
    kindergarten: "«Ай Патшам» балабақшасы",
    addressLabel: "Мекенжай",
    address: "Көктем-1 ықшам ауданы, 11-үй",
    phoneLabel: "Телефон",
    daysLabel: "Жұмыс күндері",
    days: "Дүйсенбі–Жұма",
    hoursLabel: "Жұмыс уақыты",
    call: "Қоңырау шалу",
    map: "2GIS / карта",
    mapText: "Мекенжайды 2GIS картасынан табыңыз",
    writeUs: "WhatsApp-қа жазу",
  },
  footer: {
    tagline: "Балаңыздың бақытты балалық шағы осы жерден басталады!",
    legal: "«Smart Korkem» ЖШС",
    rights: "Барлық құқықтар қорғалған.",
    sections: "Бөлімдер",
    contacts: "Байланыс",
  },
};

const ru: Dictionary = {
  langName: "РУС",
  nav: {
    about: "О нас",
    nutrition: "Питание",
    clubs: "Кружки",
    gallery: "Галерея",
    documents: "Документы",
    contacts: "Контакты",
  },
  ui: {
    whatsapp: "WhatsApp",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
    switchLang: "Выбор языка",
    backToTop: "Наверх",
  },
  hero: {
    titleBefore: "Детский сад",
    titleAfter: "",
    subtitle: "Счастливое детство вашего ребёнка начинается здесь!",
    description:
      "Уютная среда, интересные занятия и возможности для всестороннего развития детей от 1 до 7 лет.",
    ctaContact: "Связаться с нами",
    ctaMore: "Подробнее",
    badge: "Воспитание на казахском языке",
    stats: [
      { value: "1–7", label: "лет" },
      { value: "3", label: "группы" },
      { value: "5", label: "приёмов пищи" },
    ],
    hoursLabel: "Пн–Пт",
    photoAlt: "Детский сад «Ай Патшам»",
  },
  about: {
    eyebrow: "О нас",
    title: "О нас и наши группы",
    lead:
      "«Ай Патшам» — тёплый и уютный детский сад для детей. Мы создаём условия, чтобы каждый ребёнок рос счастливым, активным и любознательным. Воспитание и обучение ведутся на казахском языке, а ежедневные творческие и познавательные занятия помогают всестороннему развитию детей.",
    features: [
      {
        title: "Воспитание на казахском языке",
        text: "Воспитание и обучение ведутся на казахском языке.",
      },
      {
        title: "Всестороннее развитие",
        text: "Уделяем внимание мышлению, речи, творчеству и физическому развитию.",
      },
      {
        title: "Творческие и познавательные занятия",
        text: "Помогаем учиться через игру и открывать для себя новое.",
      },
      {
        title: "Уютная среда",
        text: "Тёплая атмосфера, в которой дети чувствуют себя как дома.",
      },
      {
        title: "Внимание к каждому ребёнку",
        text: "Учитываем способности и интересы каждого ребёнка и помогаем их раскрыть.",
      },
    ],
    photoAlt: "Дети в детском саду «Ай Патшам»",
    groupsTitle: "Наши группы",
    groupsIntro: "В детском саду работают 3 группы для детей от 1 до 7 лет.",
    groupName: (n) => `Группа ${n}`,
    groupPoints: ["Воспитание на казахском", "Творческие занятия", "5-разовое питание"],
    groupsNote: "Подробную информацию о группах можно узнать по телефону.",
    groupsCall: "Позвонить",
  },
  nutrition: {
    eyebrow: "Питание",
    title: "Вкусное и полезное питание",
    subtitle: "Детям предоставляется 5-разовое питание в день.",
    meals: [
      { title: "Завтрак", text: "Чтобы бодро начать день" },
      { title: "Второй завтрак", text: "Лёгкое и полезное дополнение" },
      { title: "Обед", text: "Основной приём пищи дня" },
      { title: "Полдник", text: "Лёгкий приём пищи для новых сил" },
      { title: "Ужин", text: "Чтобы уютно завершить день" },
    ],
    note: "Об актуальном меню можно узнать в детском саду.",
    perDay: "раз в день",
  },
  clubs: {
    eyebrow: "Дополнительные занятия",
    title: "Интересные кружки",
    subtitle: "Дополнительные занятия, которые пробуждают интерес и помогают раскрыть способности ребёнка.",
    items: [
      { title: "Английский язык", text: "Иностранный язык через увлекательные занятия." },
      { title: "Робототехника", text: "Развитие логики, мышления и интереса к технологиям." },
      { title: "Музыка", text: "Развитие музыкальных способностей и творческого восприятия." },
      { title: "Хореография", text: "Развитие чувства ритма, пластики и координации." },
      { title: "Физкультура", text: "Двигательная активность, ловкость и физическое развитие." },
    ],
    swipeHint: "Листайте",
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Наши яркие моменты",
    subtitle: "Радостные моменты из жизни детского сада.",
    more: "Показать ещё",
    less: "Свернуть",
    emptyTitle: "Фотографии скоро появятся",
    emptyText: "А пока загляните в наш Instagram.",
    openPhoto: "Увеличить фотографию",
    close: "Закрыть",
    prev: "Предыдущее",
    next: "Следующее",
    photoAlt: (n) => `Детский сад «Ай Патшам» — фото ${n}`,
  },
  documents: {
    eyebrow: "Официальная информация",
    title: "Документы",
    subtitle: "Здесь публикуются официальные документы детского сада.",
    emptyTitle: "Документы скоро будут добавлены",
    emptyText: "Если у вас есть вопросы — свяжитесь с нами.",
    open: "Открыть",
    drive: "Все документы (Google Drive)",
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "С радостью ответим на ваши вопросы — пишите или звоните.",
    kindergarten: "Детский сад «Ай Патшам»",
    addressLabel: "Адрес",
    address: "мкр. Көктем-1, дом 11",
    phoneLabel: "Телефон",
    daysLabel: "Рабочие дни",
    days: "Понедельник–Пятница",
    hoursLabel: "Время работы",
    call: "Позвонить",
    map: "2GIS / карта",
    mapText: "Найдите нас на карте 2GIS",
    writeUs: "Написать в WhatsApp",
  },
  footer: {
    tagline: "Счастливое детство вашего ребёнка начинается здесь!",
    legal: "ТОО «Smart Korkem»",
    rights: "Все права защищены.",
    sections: "Разделы",
    contacts: "Контакты",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { kk, ru };
