import { ElSubMenu, ElMenuItem } from "element-plus";

const renderSubMenuFn = (menu, children = []) => {
  return <ElSubMenu index={menu.url} v-slots={
    {
      title: () => <div className="submenu-content">
        {/* {menu.icon ?
          <div className="flexbox">
            <div className="icon">
              <svg class="iconpark-icon"><use href={`#${menu.icon}`}></use></svg>
            </div>
          </div>
          : ''} */}
        <span>{menu.title}</span>
      </div>
    }
  }>{children}</ElSubMenu>
}

const renderMenuFn = (menu) => {
  return <ElMenuItem index={menu.url}>
    <div className="menu-content">
      {/* {menu.icon ?
        <div className="flexbox">
          <div className="icon">
            <svg class="iconpark-icon"><use href={`#${menu.icon}`}></use></svg>
          </div>
        </div>
        : ''
      } */}
      <span>{menu.title}</span>
    </div>
  </ElMenuItem>
}

const renderFn = (menus) => {
  const arr = []
  menus.forEach(item => {
    const { children, type } = item

    const isSubmenu = (type === 'menu2-sp') || (type === 'menu1' && children.length)

    if (isSubmenu) {
      // submenu
      const childMenu = renderFn(children)
      const submenu = renderSubMenuFn(item, childMenu)
      arr.push(submenu)
    } else {
      // menu
      const menu = renderMenuFn(item)
      arr.push(menu)
    }

  })

  return arr
}

export default renderFn