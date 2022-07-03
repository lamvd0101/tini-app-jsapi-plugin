import * as path from 'path';

const libPath = path.join(__dirname, '..', '@types/index.d.ts');

function init(modules: {
  typescript: typeof import('typescript/lib/tsserverlibrary');
}): ts.server.PluginModule {
  const ts = modules.typescript;

  return {
    create(info: ts.server.PluginCreateInfo) {
      const host: ts.LanguageServiceHost = info.languageServiceHost;

      const _getScriptFileNames = host.getScriptFileNames.bind(host);
      host.getScriptFileNames = () => {
        const fileNames = _getScriptFileNames();
        return [...fileNames, libPath];
      };

      const ls = ts.createLanguageService(host);
      return ls;
    },
  };
}

export = init;
