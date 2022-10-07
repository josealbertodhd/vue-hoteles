<template>
    <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <img src="../images/logo.png" alt="Logo del Aplicativo" width="100" height="50">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <router-link to="/" class="nav-link" aria-current="page" href="#">Inicio</router-link>
                <router-link to="/" class="nav-link" aria-current="page" href="#">Hoteles</router-link>
                <router-link to="/habitaciones" class="nav-link" aria-current="page" href="#">Tipo de Habitaciones</router-link>
                <router-link to="/acomodaciones" class="nav-link" aria-current="page" href="#">Acomodaciones</router-link>
              </div>
            </div>
          </div>
        </nav>
  </template>