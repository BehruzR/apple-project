const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1.5,
	centeredSlides: true,

	autoplay: {
		delay: 4000,
		disableOnInteraction: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	speed: 800,
	slideShadows: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

let navbarList = [
	'Store',
	'Mac',
	'iPad',
	'iPhone',
	'Watch',
	'Vision',
	'AirPods',
	'TV & Home',
	'Entertainment',
	'Accessories',
	'Support',
]

const headerNavListElement = document.querySelector('.header-nav')

const renderNavbarItems = (navbarItemsList, target) => {
	navbarItemsList.reverse().forEach(navbarListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.className = 'text-xs text-slate-400 hover:text-white'
		listItemLink.textContent = navbarListString

		listItem.append(listItemLink)
		target.children[0].after(listItem)
	})
}

renderNavbarItems(navbarList, headerNavListElement)

let footerListShop = [
	'Store',
	'Mac',
	'iPad',
	'iPhone',
	'Watch',
	'Vision',
	'AirPods',
	'TV & Home',
	'AirTag',
	'Accessories',
	'Gift Cards',
]

let footerListAppleWallet = ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']

let footerListAccount = [
	'Manage Your Apple ID',
	'Apple Store Account',
	'iCloud.com',
]

let footerListEntertainment = [
	'Apple One',
	'Apple TV+',
	'Apple Music',
	'Apple Arcade',
	'Apple Fitness+',
	'Apple News+',
	'Apple Podcasts',
	'Apple Books',
	'App Store',
]

let footerListAppleStore = [
	'Find a Store',
	'Genius Bar',
	'Today at Apple',
	'Group Reservations',
	'Apple Camp',
	'Apple Store App',
	'Certified Refurbished',
	'Apple Trade In',
	'Financing',
	'Carrier Deals at Apple',
	'Order Status',
	'Shopping Help',
]

let footerListForBusiness = ['Apple and Business', 'Shop for Business']

let footerListForEducation = [
	'Apple and Education',
	'Shop for K-12',
	'Shop for College',
]

let footerListForHealthcare = [
	'Apple in Healthcare',
	'Mac in Healthcare',
	'Health on Apple Watch',
	'Health Records on iPhone and iPad',
]

let footerListForGovernment = [
	'Shop for Government',
	'Shop for Veterans and Military',
]

let footerListAppleValues = [
	'Accessibility',
	'Education',
	'Environment',
	'Inclusion and Diversity',
	'Privacy',
	'Racial Equity and Justice',
	'Supply Chain',
]

let footerListAboutApple = [
	'Newsroom',
	'Apple Leadership',
	'Career Opportunities',
	'Investors',
	'Ethics & Compliance',
	'Events',
	'Contact Apple',
]

let footerNavListElement = document.querySelector('.footer__nav-list')

const renderFooterItems = (
	footerListShop,
	target,
	footerListAppleWallet,
	footerListAccount,
	footerListEntertainment,
	footerListAppleStore,
	footerListForBusiness,
	footerListForEducation,
	footerListForHealthcare,
	footerListForGovernment,
	footerListAppleValues,
	footerListAboutApple
) => {
	footerListShop.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[0].after(listItem)
	})
	footerListAppleWallet.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[12].after(listItem)
	})
	footerListAccount.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[17].after(listItem)
	})
	footerListEntertainment.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[21].after(listItem)
	})
	footerListAppleStore.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[31].after(listItem)
	})
	footerListForBusiness.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[44].after(listItem)
	})
	footerListForEducation.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[47].after(listItem)
	})
	footerListForHealthcare.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[51].after(listItem)
	})
	footerListForGovernment.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[56].after(listItem)
	})
	footerListAppleValues.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[59].after(listItem)
	})
	footerListAboutApple.reverse().forEach(footerListString => {
		const listItem = document.createElement('li')
		const listItemLink = document.createElement('a')
		listItemLink.href = '#'
		listItemLink.textContent = footerListString
		listItemLink.className = 'text-xs text-slate-400'

		listItem.append(listItemLink)
		target.children[67].after(listItem)
	})
}

renderFooterItems(
	footerListShop,
	footerNavListElement,
	footerListAppleWallet,
	footerListAccount,
	footerListEntertainment,
	footerListAppleStore,
	footerListForBusiness,
	footerListForEducation,
	footerListForHealthcare,
	footerListForGovernment,
	footerListAppleValues,
	footerListAboutApple
)
