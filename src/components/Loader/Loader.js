import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  );
}
