<template>
  <header
    class="d-flex flex-wrap justify-content-center py-4 mb-4 border-bottom"
  >
    <b-a
      flex
      align-items="center"
      margin="y-0 e-auto"
      link="body-emphasis"
      text-decoration="none"
      to="/"
    >
      <b-span font-size="3">OCRjs</b-span>
    </b-a>
    <NavList
      class="nav-pills"
    >
      <NavItem margin="s-2">
        <NavbarNavList
          class="button-outline-light link-success link-opacity-75 link-opacity-100-hover"
        >
          <ColorModeNavItemDropdown id="color-settings" />
        </NavbarNavList>
      </NavItem>
      <NavItem margin="x-0">
        <NavLink
          to="https://github.com/MrIsaacs/ocrjs"
          link="secondary"
          target="_blank"
        >
          <BIcon icon="fa:github" />
        </NavLink>
      </NavItem>
    </NavList>
  </header>
</template>
