let popupWindow = null; 

document.getElementById('btnAbrir').addEventListener('click', () => {

    if (popupWindow && !popupWindow.closed) {
        popupWindow.focus();
        return;
    }


    const features = 'width=400,height=300,toolbar=no,scrollbars=no,resizable=no';
    

    popupWindow = window.open('popup.html', 'PopupVentana', features);
    
    if (popupWindow === null) {
        alert("El navegador bloqueó la ventana emergente. Por favor, desactiva el bloqueador de pop-ups.");
    }
});

document.getElementById('btnCerrar').addEventListener('click', () => {

    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
        popupWindow = null; 
        console.log("Ventana pop-up cerrada.");
    } else {
        alert("La ventana pop-up no está abierta.");
    }
});

document.getElementById('btnImprimir').addEventListener('click', () => {

    window.print();
});