var webpack = require('webpack');

module.exports={
    entry: {
	    "bundle": "./src/entry.jsx",
	  //  "bundle.min": "./src/components/app.jsx",
	},
    output: {
        path : __dirname  + '/dist',
        filename: "[name].js"
    },
    devtool: "cheap-module-source-map",
    module : {
    	preLoaders: [
	        {
	            test: /\.js$/,
	            loader: 'eslint',
	            exclude: /(node_modules|bower_components)/
	        }
	    ],
        loaders : [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {	
            	test : /\.sass$/ ,
            	loader : 'style!css!sass'
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015' , 'react']
                }
            }
        ]

    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
        */
    ]
}