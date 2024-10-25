
const Button = ({title , clas , click}) => {
  return (
    <div>
      <button className={clas} onClick={click}>{title}</button>
    </div>
  )
}

export default Button
