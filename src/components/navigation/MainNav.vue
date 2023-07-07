<template>
  <div class="w-1/4">
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`" class="">
      <div class="logo">
        <img :src="logoURL" alt="Vue" />
      </div>

      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
        </button>
      </div>

      <div class="menu">
        <router-link to="/" class="button">
          <span class="material-symbols-outlined"> trending_up </span>
          <span class="text ml-5">Inwestycje</span>
        </router-link>
        <router-link to="/expenses" class="button">
          <span class="material-symbols-outlined"> receipt_long </span>
          <span class="text ml-5">Wydatki</span>
        </router-link>
        <router-link to="/charts" class="button">
          <span class="material-symbols-outlined"> query_stats </span>
          <span class="text ml-5">Notowania</span>
        </router-link>
      </div>

      <div class="flex"></div>

      <div class="menu">
        <router-link to="/settings" class="button">
          <span class="material-symbols-outlined">settings</span>
          <span class="text ml-5">Settings</span>
        </router-link>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '/logo.jpg'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 100 700;
  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v122/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2)
    format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 36px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

aside {
  display: flex;
  flex-direction: column;
  widows: 100%;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 100%;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
