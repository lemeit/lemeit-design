# lemeit-design

Sistema de diseño compartido para los portales ambientales de lemeit.ar — paleta, tipografía y componentes base tomados de [profe.lemeit.ar](https://profe.lemeit.ar) (tema PaperMod, paleta "X-Wing Poe Dameron": naranja óxido sobre crema en modo claro, negro cálido con acentos naranja en modo oscuro).

Publicado en [design.lemeit.ar](https://design.lemeit.ar), que sirve como página de documentación y como origen de los dos archivos que consumen los demás sitios.

## Uso

En el `<head>` de cualquier portal:

```html
<link rel="stylesheet" href="https://design.lemeit.ar/lemeit-theme.css">
```

Antes de cerrar `</body>`:

```html
<script src="https://design.lemeit.ar/lemeit-common.js"></script>
<script>
  LemeitCommon.initTheme();                 // aplica el tema guardado y conecta el botón #lm-theme-btn
  LemeitCommon.initSwitcher("emas");        // "emas" | "aq" | "wq" | "profe" — arma el menú #lm-switcher
  LemeitCommon.renderFooter(document.getElementById("lm-footer"), {
    version: "v1.0 — 2026-08-22"
  });
</script>
```

## Archivos

| Archivo | Contenido |
|---------|-----------|
| `lemeit-theme.css` | Variables de color (`--lm-*`), tipografía, y clases de componentes base (`.lm-card`, `.lm-badge-*`, `.lm-nav-btn`, `.lm-btn`, `.lm-select`, `.lm-footer`, etc.) |
| `lemeit-common.js` | `LemeitCommon.initTheme()`, `.initSwitcher()`, `.renderFooter()` — ver `index.html` para un ejemplo completo de cada uno |
| `index.html` | Página de documentación / muestra visual de todos los componentes — también es la home de design.lemeit.ar |

## Cómo se aplica en cada sitio

Los estilos y componentes son deliberadamente genéricos (tarjetas, badges, tabs, botones) para que cada portal los adopte de a poco sin tener que reescribirse entero de una. La idea es reemplazar gradualmente las variables de color y clases propias de cada sitio por las de acá, sin tocar su lógica ni su estructura de navegación en la primera etapa.

## Deploy

```bash
npx wrangler pages deploy . --project-name=lemeit-design
```

Dominio custom (`design.lemeit.ar`) configurado en el proyecto Pages de Cloudflare, no en este repo.

## Licencia

MIT.
