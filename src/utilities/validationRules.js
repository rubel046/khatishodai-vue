import {email, max, min, required} from 'vee-validate/dist/rules'
import {extend} from 'vee-validate'

extend('required', {
    ...required,
    message: '{_field_} is required',
})

extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
})

extend('min', {
    ...min,
    message: '{_field_} must be at least {length} characters',
})

extend('email', {
    ...email,
    message: 'Email must be valid',
})
