document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // const monto = parseFloat(document.getElementById("monto").value);
    const monto = parseFloat(document.getElementById("monto").value.replace(/,/g, ""));
    const interes = parseFloat(document.getElementById("interes").value);
    const isr = parseFloat(document.getElementById("isr").value);

    if (isNaN(monto) || isNaN(interes) || isNaN(isr)) {
        document.getElementById("resultado").textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    const gananciaBruta = monto * (interes / 100);
    const impuesto = gananciaBruta * (isr / 100);
    const ingresoNeto = gananciaBruta - impuesto;
    const montoFinal = gananciaBruta + monto;

    // document.getElementById("ingresoBrutoAnual").textContent = `Ingreso Bruto Anual: $${gananciaBruta.toFixed(2).toLocaleString("en-US")}`;
    // document.getElementById("isrAnual").textContent = `ISR Anual: $${impuesto.toFixed(2).toLocaleString("en-US")}`;
    // document.getElementById("ingresoNetoAnual").textContent = `Ingreso Neto Anual: $${ingresoNeto.toFixed(2).toLocaleString("en-US")}`;
    // document.getElementById("montoFinal").textContent = `$${montoFinal.toFixed(2).toLocaleString("en-US")}`;

    document.getElementById("ingresoBrutoAnual").textContent = `Ingreso Bruto Anual: $${gananciaBruta.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("isrAnual").textContent = `ISR Anual: $${impuesto.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("ingresoNetoAnual").textContent = `Ingreso Neto Anual: $${ingresoNeto.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("montoFinal").textContent = `$${montoFinal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

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
    document.getElementById("ganancia1m").textContent = `$${resultados1m.ingresoNeto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("isr1m").textContent = `$${resultados1m.impuesto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

    const resultados3m = calcularGananciaPorMeses(monto, interes, isr, 3);
    document.getElementById("ganancia3m").textContent = `$${resultados3m.ingresoNeto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("isr3m").textContent = `$${resultados3m.impuesto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

    const resultados6m = calcularGananciaPorMeses(monto, interes, isr, 6);
    document.getElementById("ganancia6m").textContent = `$${resultados6m.ingresoNeto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("isr6m").textContent = `$${resultados6m.impuesto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

    const resultados12m = calcularGananciaPorMeses(monto, interes, isr, 12);
    document.getElementById("ganancia12m").textContent = `$${resultados12m.ingresoNeto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.getElementById("isr12m").textContent = `$${resultados12m.impuesto.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
});

document.getElementById("monto").addEventListener("input", function (e) {
    const input = e.target;
    const cursorPos = input.selectionStart;
    const originalLength = input.value.length;

    let valor = input.value.replace(/,/g, "");
    if (!isNaN(valor) && valor !== "") {
        input.value = parseFloat(valor).toLocaleString("en-US");
        const newLength = input.value.length;
        const diff = newLength - originalLength;
        input.setSelectionRange(cursorPos + diff, cursorPos + diff);
    }
});