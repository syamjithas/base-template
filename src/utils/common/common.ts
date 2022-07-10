export function removeElementFromDOM () {
  const nativeElement: any = document.getElementById('init-loader')
  nativeElement.remove()
}
