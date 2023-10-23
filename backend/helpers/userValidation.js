import { body, param } from "express-validator";

export const nameValidator = () => body(['firstName', 'lastName'])
    .notEmpty()
    .withMessage('FirstName and LastName should not be empty..!')
    .isLength({ min: 3, max: 18 })
    .withMessage('The length of FirsName and LastName should be between 3 and 20')
    .custom(value => {
        return value[0].toUpperCase() + value.slice(1);
    })
    .trim()

export const cityValidator = () => body('address.city')
    .notEmpty()
    .withMessage('city is required')

export const zipCodeValidator = () => body('address.zipCode')
    .notEmpty()
    .withMessage('zipCode is required')

export const emailValidator = () => body('email')
    .notEmpty()
    .withMessage('Email should not be empty...!')
    .isEmail()
    .withMessage('This field is an email address..!')

export const mobilePhoneValidator = () => body('mobilePhone')
    .notEmpty()
    .withMessage('Mobile Number Should not be empty..!')
    // .isMobilePhone('de-DE')
    // .withMessage('Only Germany Phone Number is accepted..!')

export const passwordValidator = () => body('password')
    .notEmpty()
    .withMessage('Password should not be empty..!')
    .isStrongPassword()
    .withMessage('Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol.')