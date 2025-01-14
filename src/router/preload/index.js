import loadMenus from "./menus";

export default () => {
  return Promise.all([loadMenus()])
}