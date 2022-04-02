module.exports = {
    root: true, env: {
        node: true
    }, 'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'], parserOptions: {
        ecmaVersion: 2020
    }, rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "vue/no-unused-components": "off",
        'space-before-function-paren': 0,//函数定义时括号前面要不要有空格
        'indent': 0,//缩进
        'comma-dangle': [0, 'never'],//对象字面量项尾不能有逗号
        'handle-callback-err': 0,//nodejs 处理错误
        'object-curly-spacing': [0, 'never'],//大括号内是否允许不必要的空格
        'no-unused-vars': "off",
    }, overrides: [{
        files: ['src/views/**/*.vue'], rules: {
            'vue/multi-word-component-names': 0,
        },
    },]
}
