export const required = (value) => {
    if (value) return undefined;
    return 'Поле обязательно для заполненния';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальное допустимое количество символов : ${maxLength}`;
    return undefined;
};

