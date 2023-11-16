<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav gap-3 mb-2 mb-lg-0 mx-auto fs-5 fw-bold">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Faculties
              </a>
              <ul
                class="dropdown-menu fs-5 fw-bold"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link class="dropdown-item" aria-current="page" to="/"
                    >List
                  </router-link>
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    to="/faculties/create"
                    >Create
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Classes
              </a>
              <ul
                class="dropdown-menu fs-5 fw-bold"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    to="/classes"
                    >List
                  </router-link>
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    to="/classes/create"
                    >Create
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Students
              </a>
              <ul
                class="dropdown-menu fs-5 fw-bold"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    to="/students"
                    >List
                  </router-link>
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    class="dropdown-item"
                    aria-current="page"
                    to="/students/create"
                    >Create
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
