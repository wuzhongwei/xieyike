import Vue from 'vue'
import Vuex from 'vuex'
import {request} from '@/common/js/plugins'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		openExamine: false,//是否开启审核状态
		token: uni.getStorageSync('uniIdToken') || '',
		userInfo: {
			baseUser: uni.getStorageSync('baseUser') || {}
		},
		testAdmin: {
			title: '',
			shoeName: '',
			gender: 1,
			age: '',
			height: '',
			weight: '',
			footType: '',
			physicalFunction: '',
			shoesType: '',
			brandId: '',
			shoesTypeName: '',
			shoesSize: '',
			testSocksContent: '',
			testSocksPhotos: '',
			testSiteContent: '',
			testSitePhotos: '',
			basketballStrategyIds: '',
			footFeelingPhotos: '',
			footFeelingExplain: '',
			footFeelingAfterExplain: '',
			appearancePhotos: '',
			appearanceDesignEvaluation: '',
			appearanceColorEvaluation: '',
			appearanceColorEffect: '',
			workPhotos: '',
			workSuture: '',
			workGlue: '',
			encapsulationPhotos: '',
			encapsulationForefoot: '',
			encapsulationMiddlePalm: '',
			encapsulationHindPaw: '',
			strutPhotos: '',
			strutVampForefoot: '',
			strutVampMiddlePalm: '',
			strutVampHindPaw: '',
			strutSoleForefoot: '',
			strutSoleMiddlePalm: '',
			strutSoleHindPaw: '',
			flexibilityPhotos: '',
			flexibilityCoordination: '',
			flexibilityVampAntiTorsion: '',
			flexibilitySoleAntiTorsion: '',
			airPermeabilityPhotos: '',
			airPermeabilityExplain: '',
			tractionPhotos: '',
			tractionExplain: '',
			abrasivenessPhotos: '',
			abrasivenessExplain: '',
			cushioningPhotos: '',
			cushioningNeed: '',
			cushioningForefoot: '',
			cushioningHindPaw: '',
			summary: '',
			shoeId: '',
			summaryPhotos: ''
		}, // 测评管理数据
		timerIdent: false,//全局1s定时器，只在全局开启一个，所有需要定时执行的任务监听该值即可，无需额外开启
		cartCount: 0, //购物车数量
		orderCount: {}, //订单数量
		couponCount: 0, //可用优惠券数量
	},
	getters: {
		hasLogin(state){
			return !!state.token;
		}
	},
	mutations: {
		//更新state数据
		setStateAttr(state, param){
			if (typeof state[param.key] === 'object') {
				state[param.key] = {
					...state[param.key],
					...param.val
				};
			} else {
				state[param.key] = param.val;
			}
			console.log(state[param.key])
		},
		//更新token
		setToken(state, data){
			const {token} = data;
			state.token = token;
			uni.setStorageSync('baseUser', data);
			uni.setStorageSync('uniIdToken', token);
		},
		//退出登录
		logout(state){
			state.token = '';
			uni.removeStorageSync('uniIdToken');
			uni.removeStorageSync('baseUser');
			setTimeout(()=>{
				state.userInfo = {};
			}, 1100)
		},
	},
	actions: {
		//更新用户信息
		async getUserInfo({state, commit}){
			request({
				url: `/baseUser/v1.0/getMyInfo`,
				method: 'get'
			}).then(({data}) => {
				commit('setStateAttr', {
					key: 'userInfo',
					val: data
				})
				commit('setToken', data.baseUser)
			})
		}
	}
}) 


export default store
