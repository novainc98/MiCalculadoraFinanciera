document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const monto = parseFloat(document.getElementById("monto").value);
    const interes = parseFloat(document.getElementById("interes").value);
    const isr = parseFloat(document.getElementById("isr").value);

    if (isNaN(monto) || isNaN(interes) || isNaN(isr)) {
        document.getElementById("resultado").textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    const gananciaBruta = monto * (interes / 100);
    const impuesto = gananciaBruta * (isr / 100);
    const ingresoNeto = gananciaBruta - impuesto;

    document.getElementById("ingresoBrutoAnual").textContent = `Ingreso Bruto Anual: $${gananciaBruta.toFixed(2)}`;
    document.getElementById("isrAnual").textContent =`ISR Anual: $${impuesto.toFixed(2)}`;
    document.getElementById("ingresoNetoAnual").textContent = `Ingreso Neto Anual: $${ingresoNeto.toFixed(2)}`;

    function calcularGananciaPorMeses(monto, interes, isr, meses) {
        const interesMensual = interes / 12;
        const gananciaBruta = monto * (interesMensual / 100) * meses;
        const impuesto = gananciaBruta * (isr / 100);
        const ingresoNeto = gananciaBruta - impuesto;
        return {
            ingresoNeto: ingresoNeto.toFixed(2),
            impuesto: impuesto.toFixed(2)
        };
    }

    const resultados1m = calcularGananciaPorMeses(monto, interes, isr, 1);
    document.getElementById("ganancia1m").textContent = `$${resultados1m.ingresoNeto}`;
    document.getElementById("isr1m").textContent = `$${resultados1m.impuesto}`;

    const resultados3m = calcularGananciaPorMeses(monto, interes, isr, 3);
    document.getElementById("ganancia3m").textContent = `$${resultados3m.ingresoNeto}`;
    document.getElementById("isr3m").textContent = `$${resultados3m.impuesto}`;

    const resultados6m = calcularGananciaPorMeses(monto, interes, isr, 6);
    document.getElementById("ganancia6m").textContent = `$${resultados6m.ingresoNeto}`;
    document.getElementById("isr6m").textContent = `$${resultados6m.impuesto}`;

    const resultados12m = calcularGananciaPorMeses(monto, interes, isr, 12);
    document.getElementById("ganancia12m").textContent = `$${resultados12m.ingresoNeto}`;
    document.getElementById("isr12m").textContent = `$${resultados12m.impuesto}`;
});
