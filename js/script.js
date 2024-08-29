function formValidation() {
  // Mendapatkan nilai dari elemen form
  const name = document.getElementById('full-name').value;
  const birthdate = document.getElementById('date').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message').value; 
  const result = document.getElementById('result');

  if (name === "") {
    alert("Nama harus diisi.");
    return;
  }
  if (birthdate === "") {
    alert("Tanggal lahir harus diisi.");
    return;
  }
  if (!gender) {
    alert("Jenis kelamin harus dipilih.");
    return;
  }
  if (message === "") {
    alert("Pesan harus diisi.");
    return;
  }

  result.textContent = `Nama: ${name}, Tanggal Lahir: ${birthdate}, Jenis Kelamin: ${gender.value}, Pesan: ${message}`;
}

