module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "GloboShop";
      return args;
    });
    config.plugin("define").tap((args) => {
      args[0] = {
        ...args[0],
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
      };
      return args;
    });
  },
};
