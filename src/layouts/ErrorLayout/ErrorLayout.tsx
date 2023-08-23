// import globalCss from 'css/global.module.css';
// import css from './styles/ErrorLayout.module.css';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ErrorLayout() {
    const navigate = useNavigate();
    useEffect(() => {
        // navigate('/');
    },[navigate]);
    return <p>Error: 404</p>
}