module.exports = {
    entry: './js/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
        ],
    },
    output: {
        filename: 'build/build.js'
    }
};
