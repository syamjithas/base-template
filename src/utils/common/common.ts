export function removeElementFromDOM () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nativeElement: any = document.getElementById('init-loader')
  nativeElement.remove()
}
