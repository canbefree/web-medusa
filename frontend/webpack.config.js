'use strict';

const path = require('path');
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin =
    process.env.TSC_COMPILE_ON_ERROR === 'true'
        ? require('react-dev-utils/ForkTsCheckerWarningWebpackPlugin')
        : require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require('eslint-webpack-plugin');


const hasJsxRuntime = (() => {
    if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
        return false;
    }

    try {
        require.resolve('react/jsx-runtime');
        return true;
    } catch (e) {
        return false;
    }
})();

module.exports = function (webpackEnv) {
    const isEnvDevelopment = webpackEnv === 'development';
    return {
        mode: "development",
        entry: {
            index: "./src/index.tsx",
            index2: "./src/index2.ts"
        },
        optimization: { //chunk每次改动影响
            runtimeChunk: 'single'
        },
        context: path.resolve(__dirname),
        output: {
            clean: true,
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
            assetModuleFilename: 'images/[contenthash][ext][query]'
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[contenthash][ext][query]',
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024 // 限制于 8kb
                        }
                    }
                },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.(scss)$/,
                    use: [{
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
                },
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            [
                                "@babel/preset-typescript",
                            ],
                            [
                                require.resolve('@babel/preset-react'),
                            ],
                        ],
                    }
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        template: "public/index.html"
                    },
                    {
                        chunks: ["index"]
                    }
                )
            ),
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        template: "public/index.html"
                    },
                    {
                        filename: "index2.html",
                        chunks: ["index2"]
                    }
                )
            ),
            new ForkTsCheckerWebpackPlugin({
                async: isEnvDevelopment,
                typescript: {
                },
                issue: {
                    // This one is specifically to match during CI tests,
                    // as micromatch doesn't match
                    // '../cra-template-typescript/template/src/App.tsx'
                    // otherwise.
                    include: [
                        { file: '../**/src/**/*.{ts,tsx}' },
                        { file: '**/src/**/*.{ts,tsx}' },
                    ],
                    exclude: [
                        { file: '**/src/**/__tests__/**' },
                        { file: '**/src/**/?(*.){spec|test}.*' },
                        { file: '**/src/setupProxy.*' },
                        { file: '**/src/setupTests.*' },
                    ],
                },
                logger: {
                    infrastructure: 'silent',
                },
            }),
            new ESLintPlugin({
                // Plugin options
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),
                cache: true,
                // ESLint class options
                resolvePluginsRelativeTo: __dirname,
                baseConfig: {
                    extends: [require.resolve('eslint-config-react-app/base')],
                    rules: {
                        ...(!hasJsxRuntime && {
                            'react/react-in-jsx-scope': 'error',
                        }),
                    },
                },
            }),
        ],
        devServer: {
            static: './dist',
            port: "9000"
        }
    };
}
