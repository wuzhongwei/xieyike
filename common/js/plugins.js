let baseUrl = 'http://47.98.126.64:8655'

/**
 * @param {String} module  
 * @param {String} operation  
 * @param {Object} data 请求参数
 * @param {Object} ext 附加参数
 * @param {Number} ext.cache 数据缓存时间，秒
 */
export const request = (options, ext) => {
	return new Promise((resolve, reject) => {
		ext = {
			...ext,
			isShowLoading: true
		}
		options.data = {
			...options.data,
			't': new Date().getTime()
		}
		ext.isShowLoading && uni.showLoading()
		uni.request({
			...options,
			header: {
				token_id: uni.getStorageSync('uniIdToken') || ''
			},
			url: `${baseUrl}${options.url}`
		}).then(([error, {
			data
		}]) => {
			ext.isShowLoading && uni.hideLoading()
			if (data.code === '0000') {
				resolve(data)
			} else {
				if (ext.msg) {
					uni.showToast({
						title: data.message,
						icon: 'none'
					});
				}
			}
		}).catch((error) => {
			ext.isShowLoading && uni.hideLoading()
			reject(error)
		})
	})
}

export const uploadFile = (options, ext) => {
	return new Promise((resolve, reject) => {
		ext = {
			...ext,
			isShowLoading: true
		}
		options.data = {
			...options.data
		}
		ext.isShowLoading && uni.showLoading()
		uni.uploadFile({
			url: `${baseUrl}${options.url}`, //仅为示例，非真实的接口地址
			filePath: options.filePath,
			name: options.name,
			success: (uploadFileRes) => {
				let data = JSON.parse(uploadFileRes.data)
				options.success(data)
			},
			complete () {
				ext.isShowLoading && uni.hideLoading()
			}
		});
	})
}
