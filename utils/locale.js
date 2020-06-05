module.exports = (i) => {
	let that = i
	uni.setTabBarItem({
	  index: 0,
	  text: that.$t('tabBar.index0')
	});
	uni.setTabBarItem({
	  index: 1,
	  text: that.$t('tabBar.index1')
	});
	uni.setTabBarItem({
	  index: 2,
	  text: that.$t('tabBar.index2')
	});
	uni.setTabBarItem({
	  index: 3,
	  text: that.$t('tabBar.index3')
	});
	
}