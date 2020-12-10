document.getElementById('Start').addEventListener('keydown', e => {
  const regex = /^[a-zA-Z\/\*\,\.\<\>\(\)\&\^\%\$\#\@\!\`\~\*\=]$/;
  if (e.key.length > 1) return true;
  if (regex.test(e.key)) {
    e.preventDefault();
    return false;
  }
});

document.getElementById('End').addEventListener('keydown', e => {
  const regex = /^[a-zA-Z\/\*\,\.\<\>\(\)\&\^\%\$\#\@\!\`\~\*\=]$/;
  if (e.key.length > 1) return true;
  if (regex.test(e.key)) {
    e.preventDefault();
    return false;
  }
});

document.getElementById('Form').addEventListener('submit', e => {
  e.preventDefault();
  const formValues = {
    start: document.getElementById('Start').value,
    end: document.getElementById('End').value,
  };
  if (validate(formValues)) {
    const arrRange = parseArray(formValues);

    document.getElementById('Sum').value = arrRange.reduce((sum, num) => sum + num, 0);
    document.getElementById('Mult').value = arrRange.reduce((mult, num) => mult * num, 1);
    document.getElementById('SumEven').value = arrRange
      .filter(num => isEven(num))
      .reduce((sum, num) => sum + num, 0);

    document.getElementById('SumOdd').value = arrRange
      .filter(num => !isEven(num))
      .reduce((sum, num) => sum + num, 0);
  } else {
    alert('INVALID INPUT!!!');
    console.error('INVALID INPUT!!!');
  }
});

const parseArray = range => {
  let array = [];
  for (
    let i = parseInt(range.start > range.end ? range.end : range.start);
    i <= parseInt(range.end < range.start ? range.start : range.end);
    i++
  ) {
    array.push(i);
  }
  return array.sort();
};

const isEven = num => {
  if (num % 2 == 0) return true;
  return false;
};

const validate = formValues => {
  const start = parseInt(formValues.start);
  const end = parseInt(formValues.end);
  return true;
};
