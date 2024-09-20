interface PluginOptions {
  linkComponent: Component;
}

export default {
  install: (app, options: PluginOptions) => {
    const { linkComponent } = options

    // app.config.globalProperties.$link = options.linkComponent

    app.provide("linkComponent", linkComponent)
  }
}
