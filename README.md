Вот вам тестовое: реализовать функцию-аналог confirm с CSS-стилизуемым модальным "окном" в DOMе, принимающую текст вопроса к пользователю и массив вариантов ответов, которым будут соответствовать кнопки в модальном "окне". На каждой кнопке надпись, а за кнопкой закреплено соответствующее ей значение. Вызванная функция должна возвращать промис, в котором появится значение, соответствующее нажатой пользователем кнопке. "Окно" при этом должно cкрываться и исчезать из DOMа.
Пример вызова:
asyncConfirmlikeFn('Чего ты хочешь?', [{label: 'есть', value: 'eat'}, {label: 'пить', value: 'drink'}, {label: 'спать', value: 'sleep'}]).then(console.log)
должно вывести в консоль 'eat', 'drink' или 'sleep' в зависимости от нажатой кнопки.