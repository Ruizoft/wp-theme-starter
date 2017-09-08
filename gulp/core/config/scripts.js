var path = require('path');
var webpack = require('webpack-stream').webpack;
var BowerWebpackPlugin = require('bower-webpack-plugin');

// utils
var deepMerge = require('../utils/deepMerge');

// config
var overrides = require('../../config/scripts');
var assets = require('./common').paths.assets;

/**
 * Script Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
	paths: {
		watch: assets.src + '/js/**/*.js',
		src: [
			assets.src + '/js/*.js',
			'!' + assets.src + '/js/**/_*'
		],
		dest: assets.dest + '/js',
		clean: assets.dest + '/js/**/*.{js,map}'
	},

	options: {
		webpack: {

			// merged with defaults
			// for :watch task
			watch: {
				cache: true,
				watch: true,
				devtool: 'eval',
				keepalive: true
			},


			// merged with defaults
			// for :dev task
			dev: {
				devtool: 'eval'
			},


			// merged with defaults
			// for :prod task
			prod: {
            output: {
            chunkFilename: '[name].[chunkhash:8].js',
            filename: '[name].[chunkhash:8].js'
        },
                plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(true),
            new webpack.optimize.UglifyJsPlugin({
              sourceMap: false,
              comments: false,
              screw_ie8: true,
              compress: {
                drop_console: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
          })
        ],
                eslint: {
            failOnError: true,
            failOnWarning: true
        }
            },
      defaults: {
          resolve: {
            extensions: ['', '.js', '.jsx'],
            alias: {
                  'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                  'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                  'TimelineLite': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                  'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                  'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                  'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                  'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        },
          output: {
            chunkFilename: 'chunk-[name].js'
        },
          stats: {
            colors: true
        },
          module: {
            preLoaders: [],
            loaders: [
              {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
              },
              {
                  test: /\.jsx?$/,
                  exclude: [
                  /node_modules/,
                  /bower_components/,
                  /polyfills/
              ],
                  loader: 'babel',
                  query: {
                  presets: ['es2015', 'stage-2'],
                  plugins: ['transform-runtime']
              }
              }
          ]
        },
          plugins: [
            new BowerWebpackPlugin({
              includes: /\.jsx?$/
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
        })
        ],
          eslint: {
            emitError: true,
            emitWarning: true,
            configFile: path.resolve('./.eslintrc')
        }
      }

		}
	}
}, overrides);
