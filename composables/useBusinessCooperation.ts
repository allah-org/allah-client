export const useBusinessCooperation = () => {
  const { t } = useI18n()
  
  const businessCards = computed(() => [
    // 原創遊戲開發團隊
    {
      type: 'business-advice',
      icon: 'yellow',
      iconBg: 'bg-yellow-600',
      iconColor: 'text-yellow-400',
      title: t('gaming.businessAdvice.originalDev.title'),
      description: t('gaming.businessAdvice.originalDev.desc'),
      features: [
        t('gaming.businessAdvice.originalDev.feature1'),
        t('gaming.businessAdvice.originalDev.feature2'),
        t('gaming.businessAdvice.originalDev.feature3'),
        t('gaming.businessAdvice.originalDev.feature4')
      ],
      contact: {
        label: t('gaming.businessAdvice.originalDev.contact'),
        value: 'sparkgametech@gmail.com',
        type: 'email',
        url: 'mailto:sparkgametech@gmail.com'
      }
    },
    
    // 逆向開發服務商
    {
      type: 'business-advice',
      icon: 'green',
      iconBg: 'bg-green-600',
      iconColor: 'text-green-400',
      title: t('gaming.businessAdvice.reverseDev.title'),
      description: t('gaming.businessAdvice.reverseDev.desc'),
      features: [
        t('gaming.businessAdvice.reverseDev.feature1'),
        t('gaming.businessAdvice.reverseDev.feature2'),
        t('gaming.businessAdvice.reverseDev.feature3'),
        t('gaming.businessAdvice.reverseDev.feature4')
      ],
      contact: {
        label: t('gaming.businessAdvice.reverseDev.contact'),
        value: 'merchant.jiligamesoft.com',
        type: 'website',
        url: 'https://merchant.jiligamesoft.com'
      }
    },
    
    // 老虎機遊戲資源包
    {
      type: 'business-advice',
      icon: 'purple',
      iconBg: 'bg-purple-600',
      iconColor: 'text-purple-400',
      title: t('gaming.businessAdvice.slotResources.title'),
      description: t('gaming.businessAdvice.slotResources.desc'),
      features: [
        t('gaming.businessAdvice.slotResources.feature1'),
        t('gaming.businessAdvice.slotResources.feature2'),
        t('gaming.businessAdvice.slotResources.feature3'),
        t('gaming.businessAdvice.slotResources.feature4')
      ],
      contact: {
        label: t('gaming.businessAdvice.slotResources.contact'),
        value: 't.me/pangamesoft_channel',
        type: 'telegram',
        url: 'https://t.me/pangamesoft_channel/56'
      }
    },
    
    // 試算表連結
    {
      type: 'link',
      icon: 'blue',
      iconBg: 'bg-blue-600',
      iconColor: 'text-blue-400',
      title: t('quickLinks.spreadsheet'),
      description: t('quickLinks.spreadsheetDesc'),
      url: 'https://docs.google.com/spreadsheets/d/1kWLg0gFgcmfZx86DjxSiKw0BYq9zKW0LdQ5OPDi2cWM/',
      external: true
    },
    
    // 聯繫我們
    {
      type: 'link',
      icon: 'green',
      iconBg: 'bg-green-600',
      iconColor: 'text-green-400',
      title: t('quickLinks.contact'),
      description: t('quickLinks.contactDesc'),
      url: 'mailto:allah2truth@gmail.com',
      external: false
    }
  ])
  
  return {
    businessCards
  }
}
