export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag('event', action, params)
  }
}
