
    // ── DATOS de la dirección (el "estado" de nuestra app) ──
    // Guardamos los datos aquí para poder leerlos y modificarlos
    let direccion = {
      nombre:   'Julianne',
      apellido: 'Moore',
      calle:    '1224 Quackling Way',
      calle2:   'Apt 4B, Pond View Estates',
      ciudad:   'Seattle',
      estado:   'WA',
      zip:      '98101',
      pais:     'United States',
      telefono: ''
    }

    // ── FUNCIÓN 1: abrir y cerrar el formulario ──
    function toggleFormulario() {
      const formulario = document.getElementById('addrFormulario')
      const vista      = document.getElementById('addrVista')
      const boton      = document.getElementById('btnEditAddr')

      // ¿Está abierto ahora mismo?
      const estaAbierto = formulario.classList.contains('abierto')

      if (estaAbierto) {
        // Si está abierto → cerrarlo
        cancelarDireccion()
      } else {
        // Si está cerrado → abrirlo y rellenar los campos
        document.getElementById('fNombre').value   = direccion.nombre
        document.getElementById('fApellido').value = direccion.apellido
        document.getElementById('fCalle').value    = direccion.calle
        document.getElementById('fCalle2').value   = direccion.calle2
        document.getElementById('fCiudad').value   = direccion.ciudad
        document.getElementById('fEstado').value   = direccion.estado
        document.getElementById('fZip').value      = direccion.zip
        document.getElementById('fPais').value     = direccion.pais
        document.getElementById('fTelefono').value = direccion.telefono

        formulario.classList.add('abierto')  // muestra el formulario
        vista.style.display = 'none'         // oculta la vista
        boton.textContent = 'Cancelar'
      }
    }

    // ── FUNCIÓN 2: validar y guardar ──
    function guardarDireccion() {

      // Lista de campos obligatorios: [id del input, id del mensaje de error]
      const obligatorios = [
        ['fNombre',   'errNombre'],
        ['fApellido', 'errApellido'],
        ['fCalle',    'errCalle'],
        ['fCiudad',   'errCiudad'],
        ['fZip',      'errZip'],
      ]

      let todoOk = true

      // Recorremos cada campo obligatorio
      obligatorios.forEach(function(par) {
        const idCampo = par[0]
        const idError = par[1]
        const campo   = document.getElementById(idCampo)
        const error   = document.getElementById(idError)

        if (campo.value.trim() === '') {
          // Campo vacío → mostrar error
          campo.classList.add('error')
          error.classList.add('visible')
          todoOk = false
        } else {
          // Campo relleno → quitar error
          campo.classList.remove('error')
          error.classList.remove('visible')
        }
      })

      // Si algún campo estaba vacío, no seguimos
      if (!todoOk) return

      // Todo OK → actualizamos el objeto direccion con los nuevos valores
      direccion.nombre   = document.getElementById('fNombre').value.trim()
      direccion.apellido = document.getElementById('fApellido').value.trim()
      direccion.calle    = document.getElementById('fCalle').value.trim()
      direccion.calle2   = document.getElementById('fCalle2').value.trim()
      direccion.ciudad   = document.getElementById('fCiudad').value.trim()
      direccion.estado   = document.getElementById('fEstado').value.trim()
      direccion.zip      = document.getElementById('fZip').value.trim()
      direccion.pais     = document.getElementById('fPais').value
      direccion.telefono = document.getElementById('fTelefono').value.trim()

      // Actualizamos la vista de solo lectura
      actualizarVista()

      // Cerramos el formulario
      cerrarFormulario()
    }

    // ════════════════════════════════
    //  CATÁLOGO Y CARRITO
    // ════════════════════════════════

    // ── Todos los productos de la tienda ──
    const catalogo = [
      { id:1,  nombre:'Galactic Explorer Duck', coleccion:'Professional Collection', precio:24.99, emoji:'🚀', bg:'#2A2A3A' },
      { id:2,  nombre:'Chef Ducky',             coleccion:'Professional Collection', precio:19.00, emoji:'👨‍🍳', bg:'#8B5E3C' },
      { id:3,  nombre:'Classic Yellow Duck',    coleccion:'Classic Collection',      precio:9.99,  emoji:'🦆', bg:'#E8A000' },
      { id:4,  nombre:'Royal Crown Duck',       coleccion:'Luxury Collection',       precio:39.99, emoji:'👑', bg:'#4A1A6A' },
      { id:5,  nombre:'Pirate Captain Duck',    coleccion:'Adventure Collection',    precio:22.50, emoji:'🏴‍☠️', bg:'#1A2A3A' },
      { id:6,  nombre:'Ninja Duck',             coleccion:'Adventure Collection',    precio:27.00, emoji:'🥷', bg:'#1A1A1A' },
      { id:7,  nombre:'Santa Duck',             coleccion:'Holiday Collection',      precio:18.99, emoji:'🎅', bg:'#8B0000' },
      { id:8,  nombre:'Astronaut Duck',         coleccion:'Professional Collection', precio:34.99, emoji:'👩‍🚀', bg:'#0A0A2A' },
    ]

    // ── El carrito: empieza con 2 productos ──
    // Cada item tiene los datos del producto + cantidad (qty)
    let carrito = [
      { ...catalogo[0], qty: 1 },
      { ...catalogo[1], qty: 1 },
    ]

    // ── Renderizar el carrito ──
    // Esta función borra y redibuja toda la lista cada vez que algo cambia
    function renderizarCarrito() {
      const lista  = document.getElementById('listaCarrito')
      const vacio  = document.getElementById('carritoVacio')
      const titulo = document.getElementById('tituloResumen')

      // Calculamos cuántos artículos hay en total (sumando cantidades)
      const totalItems = carrito.reduce(function(suma, item) {
        return suma + item.qty
      }, 0)

      // Actualizamos el título
      titulo.textContent = 'Order Summary (' + totalItems + ' Item' + (totalItems !== 1 ? 's' : '') + ')'

      // Si el carrito está vacío mostramos el mensaje
      if (carrito.length === 0) {
        lista.innerHTML = ''
        vacio.style.display = ''
        <!-- Actualizamos el total cada vez que cambia el carrito -->
        recalcularTotal()
        return
              
      }

      vacio.style.display = 'none'

      // Construimos el HTML de cada item como un string
      // y los unimos todos con join('')
      lista.innerHTML = carrito.map(function(item) {
        return `
          <div class="carrito-item">

            <div class="item-thumb" style="background:${item.bg}">
              ${item.emoji}
            </div>

            <div style="flex:1">
              <div style="font-size:10px; font-weight:600; color:var(--yellow); text-transform:uppercase; letter-spacing:.5px; margin-bottom:2px">
                ${item.coleccion}
              </div>
              <div style="font-size:13px; font-weight:600; margin-bottom:4px">
                ${item.nombre}
              </div>
              <div class="qty-ctrl">
                <button class="qty-btn" onclick="cambiarCantidad(${item.id}, -1)">−</button>
                <span style="font-size:13px; font-weight:500; min-width:16px; text-align:center">${item.qty}</span>
                <button class="qty-btn" onclick="cambiarCantidad(${item.id}, +1)">+</button>
              </div>
            </div>

            <div style="text-align:right">
              <div style="font-size:14px; font-weight:600">
                $${(item.precio * item.qty).toFixed(2)}
              </div>
              <div style="font-size:11px; color:var(--t3); margin-top:2px">
                $${item.precio.toFixed(2)} c/u
              </div>
            </div>

            <button class="btn-eliminar" onclick="eliminarItem(${item.id})">×</button>

          </div>
        `
      }).join('')

      recalcularTotal()
    
    }

    // ── Cambiar cantidad ──
    function cambiarCantidad(id, delta) {
      const item = carrito.find(function(i) { return i.id === id })
      if (!item) return
      item.qty = Math.max(1, item.qty + delta)  // mínimo 1, nunca 0
      renderizarCarrito()
    }

    // ── Eliminar item ──
    function eliminarItem(id) {
      carrito = carrito.filter(function(i) { return i.id !== id })
      renderizarCarrito()
    }

    // ── Abrir y cerrar el modal ──
    function abrirCatalogo() {
      document.getElementById('buscarCatalogo').value = ''
      renderizarCatalogo('')
      document.getElementById('modalCatalogo').classList.add('abierto')
    }

    function cerrarCatalogo() {
      document.getElementById('modalCatalogo').classList.remove('abierto')
    }

    // Cerrar al hacer clic fuera del modal
    document.getElementById('modalCatalogo').addEventListener('click', function(e) {
      if (e.target === this) cerrarCatalogo()
    })

    // ── Renderizar el catálogo dentro del modal ──
    function renderizarCatalogo(filtro) {
      const cuerpo = document.getElementById('cuerpoCatalogo')

      // Filtramos por nombre o colección
      const resultados = catalogo.filter(function(p) {
        return p.nombre.toLowerCase().includes(filtro.toLowerCase())
            || p.coleccion.toLowerCase().includes(filtro.toLowerCase())
      })

      if (resultados.length === 0) {
        cuerpo.innerHTML = '<div style="text-align:center; padding:20px; color:var(--t3); font-size:13px">No se encontraron patos 🦆</div>'
        return
      }

      cuerpo.innerHTML = resultados.map(function(p) {
        const estaEnCarrito = carrito.find(function(i) { return i.id === p.id })
        const btnClase = estaEnCarrito ? 'btn-agregar agregado' : 'btn-agregar'
        const btnTexto = estaEnCarrito ? '✓ Añadido' : '+ Añadir'

        return `
          <div class="cat-fila">
            <div class="cat-thumb" style="background:${p.bg}">${p.emoji}</div>
            <div class="cat-info">
              <div class="cat-coleccion">${p.coleccion}</div>
              <div class="cat-nombre">${p.nombre}</div>
            </div>
            <div style="font-size:13px; font-weight:700; flex-shrink:0">$${p.precio.toFixed(2)}</div>
            <button class="${btnClase}" onclick="toggleCarrito(${p.id})">${btnTexto}</button>
          </div>
        `
      }).join('')
    }

    // ── Añadir o quitar del carrito desde el catálogo ──
    function toggleCarrito(id) {
      const producto      = catalogo.find(function(p) { return p.id === id })
      const yaEnCarrito   = carrito.find(function(i) { return i.id === id })

      if (yaEnCarrito) {
        // Si ya está → lo quitamos
        carrito = carrito.filter(function(i) { return i.id !== id })
      } else {
        // Si no está → lo añadimos con qty 1
        carrito.push({ ...producto, qty: 1 })
      }

      renderizarCarrito()
      // Actualizamos el catálogo para reflejar el cambio del botón
      renderizarCatalogo(document.getElementById('buscarCatalogo').value)
    }

    // ── Inicializar la página ──
    // Llamamos a renderizar cuando carga la página por primera vez
    renderizarCarrito()

    // ── FUNCIÓN 3: actualizar lo que se ve ──
    function actualizarVista() {
      document.getElementById('addrNombre').textContent  = direccion.nombre + ' ' + direccion.apellido
      document.getElementById('addrCalle').textContent   = direccion.calle
      document.getElementById('addrCalle2').textContent  = direccion.calle2
      document.getElementById('addrCiudad').textContent  = direccion.ciudad
      document.getElementById('addrEstado').textContent  = direccion.estado
      document.getElementById('addrZip').textContent     = direccion.zip
      document.getElementById('addrPais').textContent    = direccion.pais
    }

    // ── FUNCIÓN 4: cancelar sin guardar ──
    function cancelarDireccion() {
      // Limpiamos los errores
      document.querySelectorAll('.campo-error').forEach(function(el) {
        el.classList.remove('visible')
      })
      document.querySelectorAll('.form-grupo input').forEach(function(el) {
        el.classList.remove('error')
      })
      cerrarFormulario()
    }

    // ── FUNCIÓN 5: cerrar el formulario (usada por guardar y cancelar) ──
    function cerrarFormulario() {
      document.getElementById('addrFormulario').classList.remove('abierto')
      document.getElementById('addrVista').style.display = ''
      document.getElementById('btnEditAddr').textContent = 'Edit'
    }

    // ════════════════════════════════
    //  ORDER TOTAL
    // ════════════════════════════════

    // Variables de estado del total
    let costoEnvio    = 0
    let descuento     = 0      // porcentaje: 0.10 = 10%
    let promoAplicada = ''

    const CODIGOS_PROMO = {
      'DUCK10':  0.10,   // 10% de descuento
      'QUACK20': 0.20,   // 20% de descuento
      'SAVE15':  0.15,   // 15% de descuento
    }

    // ── Calcular y mostrar el total ──
    function recalcularTotal() {
      // 1. Subtotal: sumamos precio × cantidad de cada item
      const subtotal = carrito.reduce(function(suma, item) {
        return suma + (item.precio * item.qty)
      }, 0)

      // 2. Descuento en euros
      const montoDescuento = subtotal * descuento

      // 3. Impuesto sobre el precio ya descontado
      const impuesto = (subtotal - montoDescuento) * 0.10

      // 4. Total final
      const total = subtotal + costoEnvio - montoDescuento + impuesto

      // 5. Actualizamos el HTML
      document.getElementById('totSubtotal').textContent  = '$' + subtotal.toFixed(2)
      document.getElementById('totImpuesto').textContent  = '$' + impuesto.toFixed(2)
      document.getElementById('totFinal').textContent     = '$' + Math.max(0, total).toFixed(2)

      // Envío
      const elEnvio = document.getElementById('totEnvio')
      if (costoEnvio === 0) {
        elEnvio.textContent  = 'Free'
        elEnvio.style.color  = '#1e8c45'
      } else {
        elEnvio.textContent  = '$' + costoEnvio.toFixed(2)
        elEnvio.style.color  = 'var(--t1)'
      }

      // Línea de descuento: solo visible si hay promo
      const lineaDesc = document.getElementById('lineaDescuento')
      if (montoDescuento > 0) {
        lineaDesc.style.display = 'flex'
        document.getElementById('totDescuento').textContent = '-$' + montoDescuento.toFixed(2)
      } else {
        lineaDesc.style.display = 'none'
      }
    }

    // ── Seleccionar velocidad de envío ──
    function seleccionarEnvio(elemento, costo, etiqueta) {
      // Quitamos la clase seleccionado a todas las opciones
      document.querySelectorAll('.speed-opt').forEach(function(el) {
        el.classList.remove('seleccionado')
      })
      // Se la añadimos solo a la que se pulsó
      elemento.classList.add('seleccionado')

      costoEnvio = costo
      recalcularTotal()
    }

    // ── Aplicar código promocional ──
    function aplicarPromo() {
      const codigo  = document.getElementById('codigoPromo').value.trim().toUpperCase()
      const mensaje = document.getElementById('mensajePromo')

      if (CODIGOS_PROMO[codigo]) {
        descuento     = CODIGOS_PROMO[codigo]
        promoAplicada = codigo
        mensaje.style.color   = '#1e8c45'
        mensaje.textContent   = '✓ "' + codigo + '" aplicado — ' + (descuento * 100) + '% de descuento'
        document.getElementById('codigoPromo').disabled = true
        recalcularTotal()
      } else {
        mensaje.style.color = '#d93025'
        mensaje.textContent = 'Código no válido. Prueba DUCK10, QUACK20 o SAVE15.'
      }
    }

    // ── Realizar pedido ──
    function realizarPedido() {
      const errores = []

      // Comprobamos cada condición
      if (carrito.length === 0) {
        errores.push('Tu carrito está vacío. Añade al menos un producto.')
      }
      if (!direccion.calle || !direccion.ciudad || !direccion.zip) {
        errores.push('Completa tu dirección de envío antes de continuar.')
      }

      // Si hay errores los mostramos en el aviso
      const aviso = document.getElementById('avisoErrores')
      const lista = document.getElementById('listaErrores')

      if (errores.length > 0) {
        lista.innerHTML = errores.map(function(e) {
          return '<li>' + e + '</li>'
        }).join('')
        aviso.style.display = ''
        aviso.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
      }

      // Si no hay errores ocultamos el aviso y procesamos
      aviso.style.display = 'none'

      const boton = document.getElementById('btnPedido')
      boton.textContent      = '⏳ Procesando…'
      boton.disabled         = true
      boton.style.background = '#ccc'

      setTimeout(function() {
        const numPedido = 'DS-' + Math.floor(100000 + Math.random() * 900000)

        boton.textContent      = '✓ ¡Pedido realizado!'
        boton.style.background = '#1e8c45'
        boton.style.color      = 'white'

        document.getElementById('numeroPedido').textContent  = 'Pedido #' + numPedido
        document.getElementById('bannerExito').style.display = ''
        document.getElementById('bannerExito').scrollIntoView({ behavior: 'smooth' })
      }, 1500)
    }