const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        app: [
            "@babel/polyfill",
            './src/app/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js'
    },

    devServer: {
        port: 4000
    },

    module: {
        rules: [
            {
              test: /\.(scss)$/,
              use: [
                {
                  // Adds CSS to the DOM by injecting a `<style>` tag
                  loader: 'style-loader'
                },
                {
                  // Interprets `@import` and `url()` like `import/require()` and will resolve them
                  loader: 'css-loader'
                },
                {
                  // Loader for webpack to process CSS with PostCSS
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                {
                  // Loads a SASS/SCSS file and compiles it to CSS
                  loader: 'sass-loader'
                }
              ]
            }
          ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace:true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: './css/index.css'
        })
    ]

};