document.getElementById('Container').addEventListener('submit', e => {
  e.preventDefault();
  console.clear();

  const formValue = {
    name: document.getElementById('FName').value,
    address: document.getElementById('FAddress').value,
    phone: document.getElementById('FPhone').value,
    gender: document.getElementsByName('gender')[0].checked
      ? document.getElementsByName('gender')[0].value
      : document.getElementsByName('gender')[1].value,
    professional: document.getElementById('FProfessional').value,
    products: getProducts(document.getElementById('FProducts')),
    prediction: document.getElementById('FPrediction').value,
  };

  document.getElementById('MSG').innerText = validateForm(formValue);
  document.getElementById('MSG').style.display = 'block';
});

function getProducts(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

function validateForm(formValue) {
  const props = Object.getOwnPropertyNames(formValue);
  for (let i = 0; i < props.length; i++) {
    if (!formValue[`${props[i]}`]) return 'THIẾU THÔNG TIN';
  }
  if (!parseInt(formValue.phone) || formValue.phone.length < 9) return 'SỐ ĐIỆN THOẠI KHÔNG HỢP LỆ';
  if (!parseInt(formValue.prediction)) return 'DỰ ĐOÁN KHÔNG HỢP LỆ';
  return 'BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG!!!';
}
