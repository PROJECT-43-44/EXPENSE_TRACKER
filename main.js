const dateInput = document.getElementById("date");
dateInput.addEventListener("change", () => {
    const date = dateInput.value;
    localStorage.setItem('message', date);
    window.location.href = 'cash.html';
});
