import logo from '../assets/images/logo.png';
import Navigator from './Navigator';

const styles = {
  imgStyle: {
    height: '64px'
  },
  titleStyle: {
    marginLeft: '12px'
  }
}

const AppHeader = () => {
  return (
    <header>
      <div className='left'>
        <img src={logo} alt='logo' style={styles.imgStyle} />
      </div>
      <div className='left' style={styles.titleStyle}>
        <h1>E-ducation</h1>
      </div>
      <div className='right'>
        <Navigator />
      </div>
    </header>
  );
}

export default AppHeader;