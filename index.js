function crankPlugin(babel) {
  const { types } = babel;

  return {
    visitor: {
      JSX( path, state ) {
				if ( state.hasUndeclaredScopeVariable ) {
					return;
				}

				state.hasUndeclaredScopeVariable = ! path.scope.hasBinding(
          'createElement'
        );
			},
      Program: {
        exit(path, state) {
          
          const namedImport = types.importSpecifier(
            types.identifier('createElement'),
            types.identifier('createElement')
          );
          
          const importDeclaration = types.importDeclaration(
            [namedImport],
            types.stringLiteral('@bikeshaving/crank')
          );

          if (state.hasUndeclaredScopeVariable) {
            path.unshiftContainer('body', importDeclaration);
          }
        }
      }
    }
  };
};

module.exports = () => {
  return {
    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement'}], crankPlugin]
  }
}