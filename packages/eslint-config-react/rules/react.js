module.exports = {
  rules: {
    'react/boolean-prop-naming': ['error', { rule: '^(is|has|should|will|can|did)[A-Z]([A-Za-z0-9]?)+' }],
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off', // Forces to destructure `props`.
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off', // Autofix does not work well with TypeScript. Autofix uses `var` declaration.
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'off', // Overrides prettier config.
    'react/jsx-closing-bracket-location': 'off', // Overrides prettier config.
    'react/jsx-closing-tag-location': 'off', // Overrides prettier config.
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'always' }],
    'react/jsx-curly-newline': 'off', // Overrides prettier config.
    'react/jsx-curly-spacing': 'off', // Overrides prettier config.
    'react/jsx-equals-spacing': 'off', // Overrides prettier config.
    'react/jsx-filename-extension': 'off', // Does not work with TypeScript eslint.
    'react/jsx-first-prop-new-line': 'off', // Overrides prettier config.
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': 'off', // Overrides prettier config.
    'react/jsx-indent-props': 'off', // Overrides prettier config.
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off', // It's inconvenient.
    'react/jsx-max-props-per-line': 'off', // Overrides prettier config.
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-bind': 'off', // Used only for classed components.
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off', // Already handled by `react/jsx-curly-brace-presence` rule.
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'off', // Already handled by TypeScript.
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off', // Overrides prettier config.
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'off', // Already handled by prettier.
    'react/jsx-props-no-spreading': 'off', // Shows errors with 3rd party libraries (e.g. react-hook-form).
    'react/jsx-sort-default-props': 'off', // Already handled by `sort-keys-fix/sort-keys-fix` rule.
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'off', // Overrides prettier config.
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'off', // Already handled by TypeScript.
    'react/jsx-wrap-multilines': 'off', // Overrides prettier config.
    'react/no-access-state-in-setstate': 'off', // Used only for classed components.
    'react/no-adjacent-inline-elements': 'off', // Overrides prettier config.
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off', // Not helpful because you are not using dangerous properties when there is no need anyway.
    'react/no-danger-with-children': 'off', // Not helpful because you are not using dangerous properties when there is no need anyway.
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'off', // Used only for classed components.
    'react/no-did-update-set-state': 'off', // Used only for classed components.
    'react/no-direct-mutation-state': 'off', // Used only for classed components.
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'off', // Used only for classed components.
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'off', // Used only for classed components.
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', // Used only for classed components.
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'off', // Already handled by TypeScript.
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off', // Used only for classed components.
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'off', // Already handled by TypeScript.
    'react/no-unused-state': 'off', // Used only for classed components.
    'react/no-will-update-set-state': 'off', // Used only for classed components.
    'react/prefer-es6-class': 'off', // Used only for classed components.
    'react/prefer-read-only-props': 'off', // Works only for flow.
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off', // Already handled by TypeScript.
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off', // Already handled by TypeScript.
    'react/require-optimization': 'off', // Used only for classed components.
    'react/require-render-return': 'off', // Used only for classed components.
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off', // Used only for classed components.
    'react/sort-prop-types': 'off', // Not helpful because you are not using `prop-types` in TypeScript.
    'react/state-in-constructor': 'off', // Used only for classed components.
    'react/static-property-placement': 'off', // Used only for classed components.
    'react/style-prop-object': 'off', // Already handled by TypeScript.
    'react/void-dom-elements-no-children': 'error'
  }
}
