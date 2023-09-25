import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Contacts',
        path: '/contact',
        icon: <IoIcons.IoIosContact />,
        cName: 'nav-test'

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-test'

    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-test'

    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-test'

    },
    {
        title: 'Chatbot',
        path: '/chatbot',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-test'

    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-test'

    },

]