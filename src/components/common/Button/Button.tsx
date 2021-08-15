const Button = (props: Props) => {
  return (
    <span className = "material-icons material-icons-outlined"
      onClick = {() => props.onClick()}
    >
      {props.name}
    </span>
  )
}

type Props = {
  name: string,
  onClick: Function,
}

export default Button;