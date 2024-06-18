const temperatureInput = document.getElementById('temperature');
const convertButton = document.getElementById('convert-button');
const reverseConvertButton = document.getElementById('reverse-convert-button');
const resetButton = document.getElementById('reset-button');
const conversionProcessInput = document.getElementById('conversion-process');

// Event listener untuk memastikan input hanya angka
temperatureInput.addEventListener('keyup', () => {
    temperatureInput.value = temperatureInput.value.replace(/[^\d\.]/g, ''); // Hanya mempertahankan digit dan titik
});

// Event listener untuk tombol konversi ke Fahrenheit
convertButton.addEventListener('click', () => {
    const input = temperatureInput.value.trim(); // Menghapus spasi di awal dan akhir input
    if (!validateInput(input)) {
        Swal.fire({
            icon: 'error',
            title: 'Input Tidak Valid',
            text: 'Masukkan suhu yang valid (hanya angka dan tidak boleh kosong).',
        });
        return;
    }

    const temperature = parseFloat(input);
    const convertedTemperature = (temperature * 9 / 5) + 32;
    conversionProcessInput.value = `${temperature} °C * 9/5 + 32 = ${convertedTemperature.toFixed(2)} °F`;

    Swal.fire({
        icon: 'success',
        title: 'Konversi Berhasil',
        html: `Hasil Konversi:<br><strong>${temperature} °C = ${convertedTemperature.toFixed(2)} °F</strong><br><br>Proses Perhitungan:<br>${conversionProcessInput.value}`,
    });
});

// Event listener untuk tombol konversi ke Celsius
reverseConvertButton.addEventListener('click', () => {
    const input = temperatureInput.value.trim(); // Menghapus spasi di awal dan akhir input
    if (!validateInput(input)) {
        Swal.fire({
            icon: 'error',
            title: 'Input Tidak Valid',
            text: 'Masukkan suhu yang valid (hanya angka dan tidak boleh kosong).',
        });
        return;
    }

    const temperature = parseFloat(input);
    const convertedTemperature = (temperature - 32) * 5 / 9;
    conversionProcessInput.value = `${temperature.toFixed(2)} °F - 32 * 5/9 = ${convertedTemperature.toFixed(2)} °C`;

    Swal.fire({
        icon: 'success',
        title: 'Konversi Berhasil',
        html: `Hasil Konversi:<br><strong>${temperature.toFixed(2)} °F = ${convertedTemperature.toFixed(2)} °C</strong><br><br>Proses Perhitungan:<br>${conversionProcessInput.value}`,
    });
});

// Event listener untuk tombol reset
resetButton.addEventListener('click', () => {
    temperatureInput.value = '';
    conversionProcessInput.value = '';
});

const validateInput = (input) => {
    // Memeriksa apakah input tidak kosong dan hanya terdiri dari angka
    return input !== '' && /^\d*\.?\d*$/.test(input);
};

