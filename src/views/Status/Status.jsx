import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setLatestOrderId } from '../../slices/userSlice';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import OrderStatus from './OrderStatus/OrderStatus';
import './Status.scss';

export default function Status() {
  const location = useLocation();
  const [sessionId, setSessionId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('session_id');
    dispatch(
      setLatestOrderId({
        latestOrderId: id,
      })
    );
    setSessionId(id);
  }, [location.search]);

  return (
    <main className='container status'>
      <Header>
        <Nav />
      </Header>
      <article className='status__content'>
        <OrderStatus sessionId={sessionId} />

        <button
          className='button__large'
          onClick={() => {
            navigate('/orderhistory');
          }}
        >
          Ok, cool!
        </button>
      </article>
    </main>
  );
}
