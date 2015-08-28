# One Design Company ESLint Config 
One Design Company Javascript coding standards for use with [ESLint](http://eslint.org)

---

## How to Use

### With Gulp

See the [ODC Gulp Setup](https://github.com/onedesign/dotfiles/tree/master/gulp) for an example of use with Gulp.

### In your global or project-specific .eslintrc

If you install this config globally, you can then use the `extends` property in any `.eslintrc` file to pull in this configuration. You can find more details in the [eslint-config-standard](https://github.com/feross/eslint-config-standard) project.

```
npm install -g eslint-config-odc babel-eslint eslint-plugin-react
```

```json
// in .eslintrc

{
  "extends": "odc"
}
```
