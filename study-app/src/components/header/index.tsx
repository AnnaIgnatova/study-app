import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { changeSignInModalOpen, changeSignUpModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { FilledBtn } from '../filledBtn';
import { Lang } from '../lang';
import { NotFilledBtn } from '../notFilledBtn';
import { Theme } from '../theme';
import './style.css';

const data = [
  {
    name: 'Знакомство с HTML',
    subtitle: 'Основы HTML, CSS и веб-дизайна',
    level: 2,
    time: 60,
    theory:
      '[{"title":"Что такое HTML?"},{"text":"HTML — это специальный язык для создания веб-страниц. «Язык» значит «набор правил»."},{"text":"Вся идея сводится к двум условиям:"},{"text":"- Мы пишем код в соответствии с заранее оговорёнными правилами."},{"text":"- Веб-браузер (например, Google Chrome или Microsoft Edge) превращает такой код в страницы для людей."},{"text":"Всё, что вы видите сейчас на этой странице — это HTML, преобразованный в визуальный, человеческий вид вашим браузером. Ваш браузер «попросил» у нашего сервера данные в формате HTML, наш сервер отправил его браузеру, после чего браузер прочитал все строчки в этом файле и, используя правила HTML, нарисовал на экране текст, картинки, цвета, кнопки и так далее."},{"img":"https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjdhZjZlYWNjMWZjYzZkNjAwNzdlMGJhZmU1ZjljODM3LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=4962e59a256b821b80d091b802b783e44b0fabac658765077d7e3081c794bbd5"}]',
    examples:
      '[{"title":"Взглянем на живой пример. Слева — HTML-код, а справа то, как он преобразован браузером в вид для людей:"},{"code":"https://codepen.io/hexlet/embed/zEjbGM?default-tab=html%2Cresult&editable=true"},{"text":"А теперь измените HTML-код в левой панели таким образом, чтобы вместо «на Хекслет» было «в Википедию»."}]',
    practise:
      '[{"title":"Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись одним элементом."},{"img":"http://htmlbook.ru/files/images/practical/62.png"}]',
    testing:
      '[{"question":"Расшифруйте аббревиатуру HTML.","answer_1":"HyperText Markup Language","answer_2":"HeadingText Mode Language","answer_3":"HeadText Modulation Language","right":"HyperText Markup Language"},{"question":"Где правильно использовать тег title?","answer_1":"в теге head","answer_2":"в теге body","answer_3":"в теге footer","right":"в теге head"},{"question":"При помощи какого тега можно создать ссылку в документе?","answer_1":"<p>","answer_2":"<link>","answer_3":"<a>","right":"<a>"},{"question":"Какой атрибут используется для определения URL-адреса в ссылке?","answer_1":"alt","answer_2":"href","answer_3":"name","right":"href"},{"question":"Какой тег используется для вывода изображения?","answer_1":"<images>","answer_2":"<img>","answer_3":"<image>","right":"<img>"}]',
    img: 'https://www.codingbytes.com/wp-content/uploads/2019/03/1_28-1lYrYTQoLhi87mllgBw.png',
  },
  {
    name: 'Элементы, теги и атрибуты',
    subtitle: 'Основы HTML, CSS и веб-дизайна',
    level: 2,
    time: 20,
    theory:
      '[{"title":"Что такое HTML?"},{"text":"HTML — это специальный язык для создания веб-страниц. «Язык» значит «набор правил»."},{"text":"Вся идея сводится к двум условиям:"},{"text":"- Мы пишем код в соответствии с заранее оговорёнными правилами."},{"text":"- Веб-браузер (например, Google Chrome или Microsoft Edge) превращает такой код в страницы для людей."},{"text":"Всё, что вы видите сейчас на этой странице — это HTML, преобразованный в визуальный, человеческий вид вашим браузером. Ваш браузер «попросил» у нашего сервера данные в формате HTML, наш сервер отправил его браузеру, после чего браузер прочитал все строчки в этом файле и, используя правила HTML, нарисовал на экране текст, картинки, цвета, кнопки и так далее."},{"img":"https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjdhZjZlYWNjMWZjYzZkNjAwNzdlMGJhZmU1ZjljODM3LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=4962e59a256b821b80d091b802b783e44b0fabac658765077d7e3081c794bbd5"}]',
    examples:
      '[{"title":"Взглянем на живой пример. Слева — HTML-код, а справа то, как он преобразован браузером в вид для людей:"},{"code":"https://codepen.io/hexlet/embed/zEjbGM?default-tab=html%2Cresult&editable=true"},{"text":"А теперь измените HTML-код в левой панели таким образом, чтобы вместо «на Хекслет» было «в Википедию»."}]',
    practise:
      '[{"title":"Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись одним элементом."},{"img":"http://htmlbook.ru/files/images/practical/62.png"}]',
    testing:
      '[{"question":"Расшифруйте аббревиатуру HTML.","answer_1":"HyperText Markup Language","answer_2":"HeadingText Mode Language","answer_3":"HeadText Modulation Language","right":"HyperText Markup Language"},{"question":"Где правильно использовать тег title?","answer_1":"в теге head","answer_2":"в теге body","answer_3":"в теге footer","right":"в теге head"},{"question":"При помощи какого тега можно создать ссылку в документе?","answer_1":"<p>","answer_2":"<link>","answer_3":"<a>","right":"<a>"},{"question":"Какой атрибут используется для определения URL-адреса в ссылке?","answer_1":"alt","answer_2":"href","answer_3":"name","right":"href"},{"question":"Какой тег используется для вывода изображения?","answer_1":"<images>","answer_2":"<img>","answer_3":"<image>","right":"<img>"}]',
    img: 'https://miro.medium.com/max/750/1*eTuCOcn_u09KDIkEKoOhZQ.jpeg',
  },
  {
    name: 'Структура страницы',
    subtitle: 'Основы HTML, CSS и веб-дизайна',
    level: 2,
    time: 45,
    theory:
      '[{"title":"Что такое HTML?"},{"text":"HTML — это специальный язык для создания веб-страниц. «Язык» значит «набор правил»."},{"text":"Вся идея сводится к двум условиям:"},{"text":"- Мы пишем код в соответствии с заранее оговорёнными правилами."},{"text":"- Веб-браузер (например, Google Chrome или Microsoft Edge) превращает такой код в страницы для людей."},{"text":"Всё, что вы видите сейчас на этой странице — это HTML, преобразованный в визуальный, человеческий вид вашим браузером. Ваш браузер «попросил» у нашего сервера данные в формате HTML, наш сервер отправил его браузеру, после чего браузер прочитал все строчки в этом файле и, используя правила HTML, нарисовал на экране текст, картинки, цвета, кнопки и так далее."},{"img":"https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjdhZjZlYWNjMWZjYzZkNjAwNzdlMGJhZmU1ZjljODM3LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=4962e59a256b821b80d091b802b783e44b0fabac658765077d7e3081c794bbd5"}]',
    examples:
      '[{"title":"Взглянем на живой пример. Слева — HTML-код, а справа то, как он преобразован браузером в вид для людей:"},{"code":"https://codepen.io/hexlet/embed/zEjbGM?default-tab=html%2Cresult&editable=true"},{"text":"А теперь измените HTML-код в левой панели таким образом, чтобы вместо «на Хекслет» было «в Википедию»."}]',
    practise:
      '[{"title":"Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись одним элементом."},{"img":"http://htmlbook.ru/files/images/practical/62.png"}]',
    testing:
      '[{"question":"Расшифруйте аббревиатуру HTML.","answer_1":"HyperText Markup Language","answer_2":"HeadingText Mode Language","answer_3":"HeadText Modulation Language","right":"HyperText Markup Language"},{"question":"Где правильно использовать тег title?","answer_1":"в теге head","answer_2":"в теге body","answer_3":"в теге footer","right":"в теге head"},{"question":"При помощи какого тега можно создать ссылку в документе?","answer_1":"<p>","answer_2":"<link>","answer_3":"<a>","right":"<a>"},{"question":"Какой атрибут используется для определения URL-адреса в ссылке?","answer_1":"alt","answer_2":"href","answer_3":"name","right":"href"},{"question":"Какой тег используется для вывода изображения?","answer_1":"<images>","answer_2":"<img>","answer_3":"<image>","right":"<img>"}]',
    img: 'https://fresheropenings.com/wp-content/uploads/2020/08/170427-637251494437967118-16x9html.jpg',
  },
  {
    name: 'Основы CSS',
    subtitle: 'Основы HTML, CSS и веб-дизайна',
    level: 2,
    time: 30,
    theory:
      '[{"title":"Что такое HTML?"},{"text":"HTML — это специальный язык для создания веб-страниц. «Язык» значит «набор правил»."},{"text":"Вся идея сводится к двум условиям:"},{"text":"- Мы пишем код в соответствии с заранее оговорёнными правилами."},{"text":"- Веб-браузер (например, Google Chrome или Microsoft Edge) превращает такой код в страницы для людей."},{"text":"Всё, что вы видите сейчас на этой странице — это HTML, преобразованный в визуальный, человеческий вид вашим браузером. Ваш браузер «попросил» у нашего сервера данные в формате HTML, наш сервер отправил его браузеру, после чего браузер прочитал все строчки в этом файле и, используя правила HTML, нарисовал на экране текст, картинки, цвета, кнопки и так далее."},{"img":"https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjdhZjZlYWNjMWZjYzZkNjAwNzdlMGJhZmU1ZjljODM3LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=4962e59a256b821b80d091b802b783e44b0fabac658765077d7e3081c794bbd5"}]',
    examples:
      '[{"title":"Взглянем на живой пример. Слева — HTML-код, а справа то, как он преобразован браузером в вид для людей:"},{"code":"https://codepen.io/hexlet/embed/zEjbGM?default-tab=html%2Cresult&editable=true"},{"text":"А теперь измените HTML-код в левой панели таким образом, чтобы вместо «на Хекслет» было «в Википедию»."}]',
    practise:
      '[{"title":"Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись одним элементом."},{"img":"http://htmlbook.ru/files/images/practical/62.png"}]',
    testing:
      '[{"question":"Расшифруйте аббревиатуру HTML.","answer_1":"HyperText Markup Language","answer_2":"HeadingText Mode Language","answer_3":"HeadText Modulation Language","right":"HyperText Markup Language"},{"question":"Где правильно использовать тег title?","answer_1":"в теге head","answer_2":"в теге body","answer_3":"в теге footer","right":"в теге head"},{"question":"При помощи какого тега можно создать ссылку в документе?","answer_1":"<p>","answer_2":"<link>","answer_3":"<a>","right":"<a>"},{"question":"Какой атрибут используется для определения URL-адреса в ссылке?","answer_1":"alt","answer_2":"href","answer_3":"name","right":"href"},{"question":"Какой тег используется для вывода изображения?","answer_1":"<images>","answer_2":"<img>","answer_3":"<image>","right":"<img>"}]',
    img: 'https://i0.wp.com/rifqimulyawan.com/wp-content/uploads/Gambar-Istilah-Istilah-Dalam-CSS.jpg?fit=1068%2C713&ssl=1',
  },
  {
    name: 'div, span и display',
    subtitle: 'Основы HTML, CSS и веб-дизайна',
    level: 2,
    time: 60,
    theory:
      '[{"title":"Что такое HTML?"},{"text":"HTML — это специальный язык для создания веб-страниц. «Язык» значит «набор правил»."},{"text":"Вся идея сводится к двум условиям:"},{"text":"- Мы пишем код в соответствии с заранее оговорёнными правилами."},{"text":"- Веб-браузер (например, Google Chrome или Microsoft Edge) превращает такой код в страницы для людей."},{"text":"Всё, что вы видите сейчас на этой странице — это HTML, преобразованный в визуальный, человеческий вид вашим браузером. Ваш браузер «попросил» у нашего сервера данные в формате HTML, наш сервер отправил его браузеру, после чего браузер прочитал все строчки в этом файле и, используя правила HTML, нарисовал на экране текст, картинки, цвета, кнопки и так далее."},{"img":"https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjdhZjZlYWNjMWZjYzZkNjAwNzdlMGJhZmU1ZjljODM3LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=4962e59a256b821b80d091b802b783e44b0fabac658765077d7e3081c794bbd5"}]',
    examples:
      '[{"title":"Взглянем на живой пример. Слева — HTML-код, а справа то, как он преобразован браузером в вид для людей:"},{"code":"https://codepen.io/hexlet/embed/zEjbGM?default-tab=html%2Cresult&editable=true"},{"text":"А теперь измените HTML-код в левой панели таким образом, чтобы вместо «на Хекслет» было «в Википедию»."}]',
    practise:
      '[{"title":"Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись одним элементом."},{"img":"http://htmlbook.ru/files/images/practical/62.png"}]',
    testing:
      '[{"question":"Расшифруйте аббревиатуру HTML.","answer_1":"HyperText Markup Language","answer_2":"HeadingText Mode Language","answer_3":"HeadText Modulation Language","right":"HyperText Markup Language"},{"question":"Где правильно использовать тег title?","answer_1":"в теге head","answer_2":"в теге body","answer_3":"в теге footer","right":"в теге head"},{"question":"При помощи какого тега можно создать ссылку в документе?","answer_1":"<p>","answer_2":"<link>","answer_3":"<a>","right":"<a>"},{"question":"Какой атрибут используется для определения URL-адреса в ссылке?","answer_1":"alt","answer_2":"href","answer_3":"name","right":"href"},{"question":"Какой тег используется для вывода изображения?","answer_1":"<images>","answer_2":"<img>","answer_3":"<image>","right":"<img>"}]',
    img: 'https://www.enuygunteklif.com/wp-content/uploads/2019/02/css-temel-bilgiler.jpg',
  },
];

export const Header = () => {
  const { t } = useTranslation();
  const { accessToken } = useAppSelector((state) => state.userReducer);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const toggleSignInModal = () => {
    dispatch(changeSignInModalOpen());
  };

  const toggleSignUpModal = () => {
    dispatch(changeSignUpModalOpen());
  };

  return (
    <div className="header">
      {location.pathname === '/' && !accessToken && (
        <div className="header-container">
          <FilledBtn text={t('header.signUpBtn')} toggleModal={toggleSignUpModal} />
          <NotFilledBtn text={t('header.signInBtn')} toggleModal={toggleSignInModal} />
        </div>
      )}
      {accessToken && location.pathname !== '/main' && (
        <Link to="/main">
          <FilledBtn text={t('header.toMain')} />
        </Link>
      )}
      {location.pathname === '/main' && <div></div>}
      <div className="header-container">
        {location.pathname !== '/user' && <Link to="/user" className="user-link" />}
        <Theme />
        <Lang />
      </div>
    </div>
  );
};
