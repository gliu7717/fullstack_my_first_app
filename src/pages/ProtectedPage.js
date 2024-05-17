import React, { useEffect } from 'react';
import { Navigate  } from 'react-router-dom';

export const ProtectedPage = () => {
    //return <h1>Only authed users should see this!</h1>;

    const isAuthed = false
    // return isAuthed
    //     ? <h1>Only authed users should see this!</h1>
    //     : <Navigate to="/" />;
    //     ? <h1>Only authed users should see this!</h1>
    return <Navigate  to="/" />;

}
    