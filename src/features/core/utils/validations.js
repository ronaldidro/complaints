export const required =
  (message = 'Campo requerido') =>
  value =>
    value || value === 0 ? undefined : message
