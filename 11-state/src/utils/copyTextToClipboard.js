function copyTextToClipboard(e) {
    let copyText = e.target
    //copy to clipboard
    navigator.clipboard.writeText(copyText.getAttribute('value'))
}
export default copyTextToClipboard
