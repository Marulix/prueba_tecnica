# 🌍 Explorador de países

Aplicación web minimalista y moderna para explorar información de países, buscar y filtrar por región, y ver detalles completos de cada país, incluyendo países fronterizos. Realizada como prueba técnica de ingreso a Duppla por Mariana Ruiz Giraldo.

---

## 🚀 Instalación y ejecución local

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre la aplicación en tu navegador:**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Decisiones técnicas clave

- **Next.js App Router:**  
  Se utilizó la nueva arquitectura de rutas de Next.js para aprovechar la modularidad y el soporte para layouts y loading states.

- **SSR/SSG:**  
  - La página principal (listado de países) utiliza **Client Side Rendering (CSR)** para permitir búsqueda y filtrado instantáneo en el navegador, mejorando la experiencia de usuario.
  - La página de detalle de país utiliza **Server Side Rendering (SSR)** para obtener siempre la información más actualizada y permitir el acceso directo a cualquier país mediante URL.

- **Tailwind CSS:**  
  Se eligió Tailwind por su rapidez para prototipar y mantener un diseño consistente y minimalista, además de permitir personalización de la paleta de colores acorde al sistema de diseño de la landing page de Duppla. Se utilizó la fuente Nunito por esta misma razón.

- **API type-safe:**  
  Se emplea la librería `@yusifaliyevpro/countries` para obtener datos de países de forma tipada y segura. Esta librería es un wrapper encima del API proporcionado que permite obtener tipados dinámicos según las peticiones necesarias.

---

## 📝 Notas adicionales

- **Skeleton Loaders:**  
  Ambas páginas principales cuentan con skeleton loaders personalizados para mejorar la percepción de velocidad mientras se cargan los datos.

- **Paginación:**  
  El listado de países incluye paginación para mejorar la navegación en grandes volúmenes de datos.

- **Accesibilidad y UX:**  
  Los campos de búsqueda y filtros son accesibles. 

- **Responsive:**  
  La aplicación es completamente responsive y se adapta a dispositivos móviles y de escritorio.

- **Colores personalizados:**  
  La paleta de colores lilas y verdes está definida en el archivo de configuración de Tailwind para mantener coherencia visual con la paleta de colores de Duppla.

