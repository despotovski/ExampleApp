const RadioTab = ({ values, name, onClick }) => {
  const { value, label } = values

  return (
    <div className='input-element input-radio-tab'>
      <div className='input-wrapper'>
        <input
          type='radio'
          id={`${name}-radio-input-${value}`}
          value={value.toString()}
          name={name}
          onClick={onClick}
        />
        <label htmlFor={`${name}-radio-input-${value}`}>{label}</label>
      </div>
    </div>
  )
}

export default RadioTab
