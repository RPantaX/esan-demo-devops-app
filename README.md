# mi-app · Demo CI/CD con GitHub Actions (Grupo 4)

App mínima en Node.js + Express con tests (Jest), un Dockerfile y un pipeline de GitHub Actions que:

1. **test**: instala dependencias y corre los tests en cada push y pull request.
2. **build-push**: si los tests pasan, construye la imagen Docker y la publica en GitHub Container Registry (ghcr.io).
3. **deploy** (comentado): actualiza la app en un clúster de Kubernetes.

## Probar en tu máquina

```powershell
npm install
npm test
npm start
```

Abre http://localhost:3000 y http://localhost:3000/health

## Subirlo a GitHub (una sola vez)

Desde PowerShell, dentro de esta carpeta:

```powershell
git init
git add .
git commit -m "Primera versión de mi-app"
git branch -M main
gh repo create mi-app --public --source=. --push
```

Luego abre el repo en GitHub y entra a la pestaña **Actions**: el pipeline ya estará corriendo.
Cuando termine, la imagen aparece en tu perfil de GitHub, sección **Packages**.

## Guion de la demo en vivo

1. **Pipeline en verde**: cambia el mensaje en `src/app.js` **y** en `test/app.test.js`, luego:
   ```powershell
   git commit -am "Cambio el mensaje"
   git push
   ```
   Muestra la pestaña Actions: `test` ✅ → `build-push` ✅.

2. **Pipeline en rojo** (el momento más didáctico): cambia el mensaje **solo** en `src/app.js` y haz push.
   El job `test` falla ❌ y `build-push` **no se ejecuta**: el código roto nunca se publica.

3. **Arreglarlo**: corrige el test, haz push y vuelve a verde.

Tip: si no hay internet estable en el aula, graba la pantalla o toma capturas de una ejecución antes.
