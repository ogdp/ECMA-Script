const Nav = (menu) => {
  //   console.log(menu.menu);
  return `
    ${menu.menu
      .map((item) => `<a href="${item.link}">${item.name}</a>`)
      .join("")}
  `;
};

export default Nav;
