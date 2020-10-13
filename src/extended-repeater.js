function repeater(str, options) {
  let realOptions = {};
  let resStr;
  let optStr;

  realOptions['separator'] = '+';
  realOptions['additionSeparator'] = '|';
  realOptions['addition'] = '';
  realOptions['additionRepeatTimes'] = 1;
  realOptions['repeatTimes'] = 1;

  Object.keys(realOptions).forEach(el => {
      if (typeof options[el] == 'undefined')
          options[el] = realOptions[el];
  })

  optStr = (options['addition'] + 'separator')
  .repeat(options['additionRepeatTimes'])
  .split('separator', options['additionRepeatTimes'])
  .join(options['additionSeparator']);

  resStr = (str + optStr + 'separator')
  .repeat(options['repeatTimes'])
  .split('separator', options['repeatTimes'])
  .join(options['separator']);
  
  return resStr;
};

module.exports = repeater;
