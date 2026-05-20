import LogInFrom from '@/Components/Auth/LogInFrom';
import React from 'react';
export const metadata = {
  title: "Login | MediQueue",
  description: "Log in to your MediQueue account to book sessions and manage your tutors.",
};
const LogInPage = () => {
    return (
        <div>
            <LogInFrom/>
        </div>
    );
};

export default LogInPage;