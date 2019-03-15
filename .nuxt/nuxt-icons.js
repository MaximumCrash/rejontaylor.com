export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.dy0oxF6p0lI.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.dy0oxF6p0lI.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.dy0oxF6p0lI.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.dy0oxF6p0lI.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.dy0oxF6p0lI.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.dy0oxF6p0lI.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.dy0oxF6p0lI.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
