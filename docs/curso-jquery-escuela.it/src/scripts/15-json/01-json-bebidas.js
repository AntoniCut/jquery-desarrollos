let bebidas={bebida:"Cerveza",inicioProduccion:"3500 a.c.",ingredientes:["lupulo","cebada","agua","trigo","malta"],marcas:[{nombre:"San Miguel",tipo:"pilsen",procedencia:"España"},{nombre:"Kölsch",tipo:"Estilo Alemán",procedencia:"Colonia"},{nombre:"Guinness",tipo:"Negra",procedencia:"Irlanda"}]};(e=>{console.log("\n"),console.warn("----------  01-json-bebidas.js  ----------");var a=e("#bebida"),i=e("#inicio"),n=e("#ingredientes"),e=e("#tablaMarcas");let o=[],d=[];a.text("Bebida: "+bebidas.bebida),i.text(bebidas.inicioProduccion),bebidas.ingredientes.forEach(e=>o.push(`<li> - ${e} </li>`)),n.append(o),bebidas.marcas.forEach(e=>{d.push(`
            <tr>
                <td>${e.nombre}</td>
                <td>${e.tipo}</td>
                <td>${e.procedencia}</td>
            </tr>
        `)}),e.append(d)})(jQuery);