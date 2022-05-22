function IconSwitch({icon, onSwitch}) {
  return (
    <div className={'header'}>
      <span onClick={onSwitch} className="material-icons">
        {icon}
      </span>
    </div>
  );
}

export default IconSwitch;