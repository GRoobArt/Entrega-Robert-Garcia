import contructorHeader from './components/header/header.js'
import constructCarrusel from './components/carrusel/carrusel.js'
import construcctorSlider from './components/slider/slider.js'
import dataCategorie from '../data/data.categorie.js'
import dataSession from '../data/data.controller.js'

// Contruccion del Header
const header = document.getElementById('header')
header.innerHTML = contructorHeader()

// Generación de un Carrito

// Aplicacion de los valores al Carro de compra.
const cartHTML = document.querySelector('.cart-content')
cartHTML.querySelector('.count').textContent = dataSession.cart.count
cartHTML.querySelector(
  '.price-total'
).textContent = `$${dataSession.cart.total}`

// construccion del carruseles
const carrusel = document.querySelectorAll('.carrusel.products')
if (carrusel) {
  // Aplicamos los productos a los carruseles filtrados por cagetoria.
  carrusel.forEach((carrusel) => {
    const categorie = carrusel.getAttribute('id')
    const productFilter = dataSession.categorie.products.filter(
      (product) => product.categorie === categorie
    )
    carrusel.innerHTML = constructCarrusel(productFilter)
  })
}

// Contruccion del Slider
const slider = document.getElementById('slider-principal')
if (slider) {
  dataCategorie.map((categorie) => {
    slider.innerHTML += construcctorSlider(categorie)
  })
}
