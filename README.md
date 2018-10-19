A client only builder for static scrollytelling. The editor can put together React components and render them to a static html file, which also includes all required assets (images, styles, ...). The exported archive also contains a json representation of the story, where all assets are inlined, so it can be imported at any time, changed and exported again.

The editor doesn't store any data. Editing happens in the browser only.


## Project overview

- `editor` contains the all components for the editor interface.
- `template` holds all components, which can be put together. The components are self-contained and define their required fields and provide all assets, which are going to be exported.


## Development

`npm run start`

### Create static production package

`npm run build`

### Lint

`npm run lint`
