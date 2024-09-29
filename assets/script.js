const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const atualizarRelogio = () => {
    const dateToday = new Date();
    const hr = String(dateToday.getHours()).padStart(2, '0');
    const min = String(dateToday.getMinutes()).padStart(2, '0');
    const s = String(dateToday.getSeconds()).padStart(2, '0');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
};

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função imediatamente para não esperar 1 segundo para exibir o horário inicial
atualizarRelogio();
