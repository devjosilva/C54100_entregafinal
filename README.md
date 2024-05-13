# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Componentes:
- Navbar = Contiene los links para la navegar en la app, el logo y el ícono del carrito.
- Catálogo = Catalogo con los productos.
- Detalle de producto = Detalle de los productos.
- CartContext = Contiene programación para mostrar el estado del contenido del carrito de compras.
- CartWidget = Ícono del carrito de compras.

### Detalle:
- NavBar (link de navegacion en la app)
- CartWidget (carrito de compras)
- ItemListContainer (programación para leer la base de datos y obtener los productos)
- ItemList (recibe producto para visualizar cada item de la lista del catálogo)
- ItemDetailContainer (funcionalidad para crear el ItemDetail, detalles del producto.)
- ItemDetail (recibe itemdetail que envía ItemDetailContainer)
-   ItemQuantitySelector (Botones que aumentan o disminuyen la cantidad a añadir al carrito de compras)
-   Description (detalle del producto)
-   AddItemButton (añade al carrito de compras)
- Checkout
-  Brief (detalle de compra)

