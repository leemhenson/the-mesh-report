module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 100,
    proseWrap: 'always',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ['e2e/cucumber-browser-tests/**/*'],
            options: {
                semi: false,
                singleQuote: false,
                printWidth: 80,
                tabWidth: 4,
                useTabs: false,
                proseWrap: 'preserve',
                bracketSpacing: false,
                arrowParens: 'always',
            },
        },
    ],
};
