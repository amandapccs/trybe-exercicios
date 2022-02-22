// Date()

const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1)

window.addEventListener('DOMContentLoaded', function()
{
  var $min = document.querySelector('.real [name="whenStart"]'),
      $max = document.querySelector('.real [name="whenEnd"]');

      $min.DatePickerX.init({
        mondayFirst: true,
        minDate    : new Date(2022, 1, 20),
        maxDate    : $max
      });

      $max.DatePickerX.init({
        mondayFirst: true,
        minDate    : $min,
        maxDate    : new Date(2022, 2, 25),
        clearButton: false
      });

});