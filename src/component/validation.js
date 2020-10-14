const onlyLetters = /[a-zA-Z\-\s]+/g;

export const required = value => (value ? undefined : 'Обязательное поле')

export const mustBeNumber = value => (isNaN(value) ? 'Введите число' : undefined)

export const minValue = min => value => (isNaN(value) || value >= min ? undefined : `Должно быть больше, чем ${min}`)

export const length = requiredLength => value => value.length === requiredLength ? undefined : `Должно быть ${requiredLength} символов`

export const mustBeLetters = value => (onlyLetters.test(value) ? undefined : 'Может содержать только латинские буквы, дефис и пробел')

export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)