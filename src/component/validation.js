// const onlyLattin = /[0-9_!~`@"#$%^&*()+=?:%;№}{[\],.<>\/а-яА-я]+/;
const onlyLatin = /[0-9а-яА-я_!~`@"#$%^&*()+=?:%;№}{\[\],.<>\/\\]+/;

const onlyLetters = /[0-9_!~`@"#$%^&*()+=?:%;№}{\[\],.<>\/\\]+/;

const onlyEmail = /\b.+@.+\.[a-zA-Z]+\b/g;    

export const required = value => (value ? undefined : 'Обязательное поле')

export const mustBeNumber = value => (isNaN(value) ? 'Введите число' : undefined)

export const minValue = min => value => (isNaN(value) || value >= min ? undefined : `Должно быть больше, чем ${min}`)

export const length = requiredLength => value => value.length === requiredLength ? undefined : `Должно быть ${requiredLength} символов`

export const minLength = requiredLength => value => value.length >= requiredLength ? undefined : `Должно быть не меньше ${requiredLength} символов`

export const mustBeLatin = value => (onlyLatin.test(value) ? 'Только латинские буквы, дефис и пробел' : undefined )

export const mustBeLetters = value => (onlyLetters.test(value) ? 'Только буквы, дефис и пробел' : undefined )

export const isEmail = value => {
    let result = value.match(onlyEmail) || [];
    if (result.length === 1) {
        return undefined
    } else {
        return 'Введите ваш email'
    }
}

export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)