// ini javascript

function formValidation() {
  // ambil DOM
    let name = document.getElementById('name').value;
    // Kondisi pemisah
    if (name == '') {
        alert('Form Mohon Diisi');
        document.getElementById('result').innerHTML = '-';
    } else {
        document.getElementById('result').innerText = name;
    }
    console.log(name);

    let TanggalLahir = document.getElementById('date').value;
    if(TanggalLahir == ''){
      alert('Tanggal Mohon di Isi');
      document.getElementById('result1').innerHTML ='-'
    } else {
      document.getElementById('result1').innerHTML = '';
    }
}