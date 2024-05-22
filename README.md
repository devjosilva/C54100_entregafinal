# React + Vite

# Objetivo: Desarrollar una aplicación de e-commerce para vender productos de un rubro a elección, utilizando React 10.2.4 y Vite.

### Componentes Requeridos:

-   NavBar: Barra de navegación con logo/ícono, enlaces a las páginas (home, quienes somos, productos, contacto) y un ícono para el carrito de compras. Incluir menú hamburguesa y CSS.
-   Catálogo: Listado de productos.
-   Detalle de Producto: Tarjeta con la información detallada del producto.
-   CartContext: Contexto para manejar el estado del carrito de compras.
-   CartWidget: Ícono del carrito de compras.
-   Página Principal: Con header y footer para redes sociales.
-   Página de Productos: Listado de productos obtenidos desde Firestore.
-   ItemDetail: Página de detalle del producto con funcionalidad para añadir al carrito.
-   App.jsx: Maneja el estado del carrito y redirección al carrito.

# Consideraciones
-   Utilizar React Router DOM v6 para la navegación.
-   Implementar Context API para el estado global del carrito.
-   Conectar la aplicación con Firestore para obtener y gestionar los productos.
-   Diseñar los componentes con CSS modularizado y responsivo.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
