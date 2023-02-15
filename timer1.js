const timer = alarms => {

  if (alarms.length === 0)
    return;

  const validAlarms = alarms.filter(alarm => !isNaN(alarm) && alarm >= 0).map(e => Number(e) * 1000);

  validAlarms.forEach(alarm => {

    setTimeout(() => {
      console.log(`${alarm / 1000} seconds`);
      process.stdout.write('\x07');
    }, alarm);

  });

};

timer(process.argv.slice(2));

