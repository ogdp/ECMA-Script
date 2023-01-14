const menus = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Projects", link: "/projects" },
  { id: 3, name: "Posts", link: "/posts" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "About", link: "/about" },
];

const dataProjects = [
  {
    id: 1,
    name: "Dự án mẫu",
    member: {
      1: "Đức",
    },
    day: "10/1/2023",
  },
  {
    id: 2,
    name: "Dự án 1",
    member: {
      1: "Đức",
      2: "Hoàng",
      3: "Huy",
    },
    day: "20/2/2023",
  },
  {
    id: 3,
    name: "Dự án tốt nghiệp",
    member: {
      1: "Đức",
      2: "Hoàng",
      3: "Huy",
    },
    day: "30/3/2023",
  },
];
export { dataProjects, menus };
