module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        ['module-resolver', {
            extensions: ['.js', '.jsx', '.json'],
            root: ['src'],
            alias: {
                root: __dirname,
                src: 'src'
            }
        }
        ],
        ['@babel/plugin-proposal-class-properties']
    ]
};
