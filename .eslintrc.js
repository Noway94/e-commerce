module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules:{
    "prettier/pretitter":[
      'error',{endOfLine:'auto'}
    ],
    'no-console': 'off',

  }
}
