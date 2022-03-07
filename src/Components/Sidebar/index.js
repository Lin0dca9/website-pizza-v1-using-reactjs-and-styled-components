import React from 'react';
import {SidebarContainer,
    Icon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    CloseIcon} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
}
export default Sidebar;
