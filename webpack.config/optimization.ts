export default {
	runtimeChunk: 'single',
	// mergeDuplicateChunks: true,
	// removeEmptyChunks: false,
	// flagIncludedChunks: true,
	// occurrenceOrder: true,
	// concatenateModules: false,
	splitChunks: {
		minSize: 1,
		cacheGroups: {
			vendor: {
				test: /[\\/]node_modules[\\/]/,
				name: 'app/vendors',
				chunks: 'all'
			},
			components: {
				test: /[\\/]source[\\/]components[\\/]/,
				name: 'app/components',
				chunks: 'all'
			},
			utils: {
				test: /[\\/]source[\\/]utils[\\/]/,
				name: 'app/utils',
				chunks: 'all'
			},
			system: {
				test: /[\\/]source[\\/]system[\\/]/,
				name: 'app/system',
				chunks: 'all'
			},
			mixins: {
				test: /[\\/]source[\\/]mixins[\\/]/,
				name: 'app/mixins',
				chunks: 'all'
			},
			interfaces: {
				test: /[\\/]source[\\/]interfaces[\\/]/,
				name: 'app/interfaces',
				chunks: 'all'
			},
		}
	}
}