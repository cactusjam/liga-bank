const MenuItem = (props) => {
    
    const {title} = props;

    return (
      <li className='menu-item'>
        <a className='menu-item__link' href="/">{title}</a>
      </li>
    )
};

export default MenuItem;