import React, { useEffect } from 'react';
import { Navigate, useNavigate  } from 'react-router-dom';

export const ProtectedPage = () => {

    const isAuthed = false;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthed) {
            navigate('/');
        }
    });
    //return <h1>Only authed users should see this!</h1>;

    // return isAuthed
    //     ? <h1>Only authed users should see this!</h1>
    //     : <Navigate to="/" />;
    //     ? <h1>Only authed users should see this!</h1>
    //return <Navigate  to="/" />;

}
    