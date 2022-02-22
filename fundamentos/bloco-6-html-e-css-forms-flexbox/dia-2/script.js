const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form', {
errorFieldCssClass: 'is-invalid',
});
validation
  .addField('#name', [
    {
     rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
]);