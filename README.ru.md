[README.ru.md](./README.ru.md)

# Educational Test System

Это образовательная тестовая система, созданная с использованием React и TypeScript. Он позволяет пользователям проходить тесты, сохранять прогресс и динамически регистрировать новые типы вопросов.

## Функции

- Вопросы с выбором нескольких вариантов ответа
- Вопросы с выбором одного варианта ответа
- Вопросы с коротким ответом
- Вопросы с развернутым ответом
- Таймер для завершения теста
- Сохранение и восстановление прогресса
- Динамическая регистрация новых типов вопросов

## Используемые технологии

- React
- TypeScript
- Redux Toolkit
- Formik
- Bootstrap

## Установка

1. Клонируйте репозиторий:
    ```sh
    git clone git@github.com:ilyasilkin27/educational-test-system.git
    cd educational-test-system
    ```

2. Установите зависимости:
    ```sh
    npm install
    ```

3. Запустите сервер разработки:
    ```sh
    npm start
    ```

Приложение будет доступно по адресу `http://localhost:3000`.

## Использование

### Прохождение теста

1. Откройте приложение в вашем браузере.
2. Перейдите на главную страницу.
3. Следуйте инструкциям на экране, чтобы отвечать на вопросы один за другим.
4. Таймер будет отслеживать оставшееся время для завершения теста.
5. Прогресс будет сохраняться автоматически, так что вы можете обновить страницу без потери текущего прогресса.

### Регистрация новых типов вопросов

1. Перейдите на страницу "Register Question Type" с помощью навигационной панели.
2. Заполните поле "Question Type Name" именем нового типа вопроса.
3. Введите код компонента в поле "Component Code". Компонент должен принимать проп `question` и рендерить соответствующие поля ввода.
4. Нажмите "Register", чтобы зарегистрировать новый тип вопроса.
5. Теперь вы можете добавлять вопросы этого нового типа в тест.

### Пример кода компонента

```jsx
import React from 'react';
import { useField } from 'formik';
import { Question } from '../utils/questionTypes';
import { Form } from 'react-bootstrap';

interface NewDateQuestionTypeProps {
  question: Question;
}

const NewDateQuestionType: React.FC<NewDateQuestionTypeProps> = ({ question }) => {
  const [field] = useField(question.id);

  return (
    <Form.Group>
      <Form.Label>{question.text}</Form.Label>
      <Form.Control type="date" {...field} />
    </Form.Group>
  );
};

export default NewDateQuestionType;
```