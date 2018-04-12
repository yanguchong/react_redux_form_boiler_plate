const webpack = require('webpack');
const path = require('path');

const APP_REDUX_FORM_DIR = path.resolve(__dirname, 'redux-form');


module.exports = function (env){
    const CONFIG = {

        entry: {
            redux_form: ["babel-polyfill", APP_REDUX_FORM_DIR + '\\Root.jsx'],
        },
        output: {
            path: '',
            filename: '[name].bundle.js'
        },
        devtool: 'inline-source-map',
        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map"
            }),
            new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(env.environment)
            }),
	        new webpack.optimize.CommonsChunkPlugin({
		        name: "commons",
		        // (the commons chunk name)

		        filename: "commons.js",
		        // (the filename of the commons chunk)

		        // minChunks: 3,
		        // (Modules must be shared between 3 entries)

		        // chunks: ["pageA", "pageB"],
		        // (Only use these entries)
	        })
        ],
        module : {
            loaders : [
                {
                    test : /\.jsx$/,
                    exclude: /node_modules/,
                    loader : 'babel-loader',
                    query: {
                        presets:['react', 'es2015', 'stage-0']
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets:['react', 'es2015', 'stage-0']
                    }
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader'
                },
                {
                    test: /\.scss|\.css$/,
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
                {
                    test: /\.scss$/,
                    loader: 'sass-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            ],

        }
    };

    console.log('environment');
    console.log(env.environment);
    console.log(env);

    switch (env.environment){
        case 'dev':
            CONFIG.output.path = path.resolve(__dirname, './web/public/js');
            break;
        case 'prod':
            CONFIG.output.path = path.resolve(__dirname, './dist');
            break;
    }

    return CONFIG;
};
