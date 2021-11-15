const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components':		'src/components',
    '@assets':			'src/assets',
    '@sass':			'src/assets/sass',
    '@sass-components':	'src/assets/sass/components'
  })(config)

  return config
}