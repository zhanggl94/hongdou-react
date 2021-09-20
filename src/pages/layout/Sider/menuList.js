const menuList = [
  {
    type: 'submenu',
    key: 'bill',
    title: '账单',
    icon: 'icon-hd-bill',
    children: [
      {
        type: 'item',
        key: '/home/billtype',
        title: '账单类型',
        icon: 'icon-hd-billtype'
      },
      {
        type: 'item',
        key: '/home/paytype',
        title: '支付类型',
        icon: 'icon-hd-paytype'
      },
      {
        type: 'item',
        key: '/home/carbill',
        title: '汽车账单',
        icon: 'icon-hd-carbill',
      }
    ]
  },
]
export default menuList;