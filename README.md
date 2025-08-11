# 📦 Kodibootcamps

Proyecto basado en [Next.js](https://nextjs.org), [Supabase](https://supabase.com/) y [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Instalación y configuración

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd kodibootcamps
```

### 2. Instala las dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3. Configura las variables de entorno

Copia el archivo de ejemplo y agrega tus claves de Supabase:

```bash
cp example.env .env.local
```

Edita `.env.local` y coloca tus valores:

```
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura básica

- `/app` – Rutas y páginas principales (Next.js App Router)
- `/components` – Componentes reutilizables
- `/src/services` – Servicios y lógica de acceso a datos (Supabase)
- `/src/stores` – Estado global (Zustand)
- `/src/app/api` – Endpoints API personalizados
- `/public` – Archivos estáticos

---

## 🛠️ Stack Tecnológico

- Next.js
- Supabase
- Tailwind CSS
- Zustand
- React Hook Form
- React Toastify
- Axios
- React Query

---

## ℹ️ Notas

- El archivo `.env.local` **no debe subirse al repositorio**.
- Si tienes problemas con dependencias, ejecuta `npm install` nuevamente.
- Para producción, asegúrate de tener las variables de entorno correctamente configuradas.

---

¡Listo! Ya puedes comenzar a desarrollar
