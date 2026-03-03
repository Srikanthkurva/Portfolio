import type { ContactFormErrors, ContactFormState } from '../types/portfolio'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}
