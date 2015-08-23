module.exports = {
  rules: {
    // https://docs.npmjs.com/misc/coding-style#line-length
    'max-len': [2, 80, 2],

    // https://docs.npmjs.com/misc/coding-style#indentation
    indent: [2, 2,
      // This is implicit in the source code
      {indentSwitchCase: true},
    ],

    // https://docs.npmjs.com/misc/coding-style#curly-braces
    curly: [2, 'multi-line'],

    // https://docs.npmjs.com/misc/coding-style#semicolons
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,

    // https://docs.npmjs.com/misc/coding-style#comma-first
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'first'],
    'comma-spacing': 2,
    'operator-linebreak': [2, 'after'],
    'one-var': [2, 'always'],
    'object-curly-spacing': 0,

    // https://docs.npmjs.com/misc/coding-style#whitespace
    'space-before-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'no-multiple-empty-lines': [2, {max: 1}],

    // https://docs.npmjs.com/misc/coding-style#case-naming-etc
    camelcase: 2,

    // https://docs.npmjs.com/misc/coding-style#null-undefined-false-0
    'no-undef-init': 2,

    // Other implicits
    'handle-callback-err': [2, 'er'],
    strict: [2, 'global'],
  }
};
