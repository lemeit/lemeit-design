# Tags y badges de proyecto

Etiquetas de metadata con dos segmentos, siguiendo el patrón de los README de lemeit: nombre gris a la izquierda y valor verde azulado a la derecha. El naranja destaca un dato puntual.

## Paleta compartida

| Segmento | Token del componente web | Color |
| --- | --- | --- |
| Nombre | `--lm-chip-label` | `#555555` |
| Valor habitual | `--lm-chip-value` | `#009688` |
| Valor destacado | `--lm-chip-accent` | `#FF5722` |

Los colores son fijos en ambos temas. Estos tags describen sitio, documentación, versión o licencia; para calidad ambiental o alertas se usan los componentes de estado `.lm-badge-*`.

## En GitHub y Markdown

Usar imágenes de Shields.io con `style=flat-square`, `labelColor=555555` y el color de valor explícito. Ubicarlas después del título, una por línea de código y sin líneas vacías entre ellas, para formar una fila que se adapte al ancho disponible. Cada imagen lleva texto alternativo y un enlace útil. GitHub no aplica el CSS del sistema de diseño a los README.

[![sitio: design.lemeit.ar](https://img.shields.io/badge/sitio-design.lemeit.ar-009688?style=flat-square&labelColor=555555)](https://design.lemeit.ar)
[![API: pública](https://img.shields.io/badge/API-p%C3%BAblica-FF5722?style=flat-square&labelColor=555555)](https://app.lemeit.ar/aq)
[![licencia: MIT](https://img.shields.io/badge/licencia-MIT-009688?style=flat-square&labelColor=555555)](../README.md#licencia)

```markdown
[![sitio: design.lemeit.ar](https://img.shields.io/badge/sitio-design.lemeit.ar-009688?style=flat-square&labelColor=555555)](https://design.lemeit.ar)
[![API: pública](https://img.shields.io/badge/API-p%C3%BAblica-FF5722?style=flat-square&labelColor=555555)](https://app.lemeit.ar/aq)
[![licencia: MIT](https://img.shields.io/badge/licencia-MIT-009688?style=flat-square&labelColor=555555)](../README.md#licencia)
```

El enlace del ejemplo API lleva al portal de referencia; al reutilizarlo, reemplazarlo por la documentación real de la API. No declarar licencias ni servicios que el proyecto no tenga. Mantener pocos tags y reservar el naranja para el dato que se quiera destacar.

Shields interpreta los guiones y los guiones bajos como separadores: usar `--` para un guion literal y `__` para un guion bajo literal, además de codificar caracteres especiales en las URLs. Los badges de versión estáticos se actualizan junto con la versión publicada.

## En páginas web

El equivalente ya está incluido en `lemeit-theme.css`; no se necesita otro componente:

```html
<a class="lm-chip" href="https://design.lemeit.ar">
  <span class="lm-chip-label">sitio</span>
  <span class="lm-chip-value">design.lemeit.ar</span>
</a>
<span class="lm-chip lm-chip-accent">
  <span class="lm-chip-label">versión</span>
  <span class="lm-chip-value">V4.6</span>
</span>
```

Ver la muestra de chips en [design.lemeit.ar](https://design.lemeit.ar). Referencia de parámetros: [Shields.io — Static Badge](https://shields.io/badges/static-badge).
