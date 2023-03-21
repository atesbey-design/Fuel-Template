const descriptionMd = `Next Chakra UI Typescript Template`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'FuelWallet',
  descriptionMd,
  description,

  twitterUsername: '@Ates.eth',
  email: 'atesbagcabasi@gmail.com',
  socials: {
    GitHub: 'https://github.com/atesbey-design',
    Twitter: 'https://github.com/atesbey-design',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}
