const Text = ({
  children,
  size = 18,
  opacity = 1,
  inline = false
}) => (
  <p
    style={{
      fontSize: size,
      opacity,
      fontFamily: 'Lato',
      color: 'white',
      display: inline ? 'inline' : 'block'
    }}
  >
    {children}
  </p>
)

export default Text;
