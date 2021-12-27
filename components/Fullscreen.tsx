
export default function FullScreen(props) {
  return (
    <div style={{
      height: '100%',
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: props.justifyContent
    }}>
      {props.children}
    </div>
  )
}