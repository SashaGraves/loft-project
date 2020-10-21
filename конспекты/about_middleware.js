export const middleware = store => next => action => {
    let text = `В каждом мидлвэре передается первым аргументом store, он возвращает функцию,
    она получает как аргумент ссылку на следующий миддлвэр, возвращает функцию,
    он7а получает как аргумент action и возвращает собственно действия миддлвэра.`

    console.log(action);
    console.log(store.getState());
    let text = `У нас есть доступ к action и store внутри миддлвэра.
    Также обязательно вернуть следующий миддлвэр с action`

    return next(action);
};

export const middleware = store => next => action => {

    console.log(action);
    console.log(store.getState());
    let text = `У нас есть доступ к action и store внутри миддлвэра.
    Также обязательно вернуть следующий миддлвэр с action`

    const result = next(action);

    console.log(store.getState());
    let text = `а вот так мы получаем доступ к уже изменившемуся store`;
    return result;
};
