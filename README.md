# USE Derecho · Universidad Nacional de Trujillo

Proyecto web para la Unidad de Segunda Especialidad (USE) de la Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Trujillo. Reúne la oferta académica, los requisitos de admisión y las actividades de la unidad.

## Oferta académica

- Derecho Constitucional y Derechos Humanos
- Gestión Pública y Contrataciones del Estado
- Investigación Criminal
- Derecho Penal y Criminalidad Organizada

Consulta la información institucional vigente en el [sitio oficial de la USE Derecho UNT](https://useder.unitru.edu.pe/). La publicación de esta implementación en el dominio institucional está pendiente.

## Proyecto

Desarrollado con Next.js (App Router), React, Tailwind CSS e Iconify. Incluye el listado y las fichas de eventos, un anuncio destacado en el inicio y enlaces a resoluciones rectorales cuando están disponibles. Las páginas de eventos se generan durante la compilación a partir de archivos del repositorio.

## Desarrollo local

```sh
npm ci
npm run dev
```

Abre [localhost:3000](http://localhost:3000). Para generar la compilación de producción, ejecuta `npm run build`. Puedes servirla localmente con `npm start`.

## Actualización de eventos

Edita [`src/data/eventos.js`](src/data/eventos.js) y guarda los pósteres en [`public/img/eventos/`](public/img/eventos/). El primer evento se destaca en el anuncio del inicio y los tres primeros se muestran en la portada. Vuelve a compilar para incorporar los cambios a la entrega institucional.

## Créditos

- [Chan Vasquez Yanxmarcos](https://www.linkedin.com/in/yanxmarcos-chan-vasquez/) - Developer.
- [Avila Zamudio Eliaser Isai](https://www.linkedin.com/in/eliaser-avila-zamudio/) - Developer.
