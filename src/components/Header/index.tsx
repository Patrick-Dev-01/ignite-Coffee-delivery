import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderCart, HeaderContainer, HeaderContent, HeaderInfo, HeaderLocation } from './styles';

import logoImg from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <NavLink to="/">
                    <img src={logoImg} alt="" />
                </NavLink>

                <HeaderInfo>
                    <HeaderLocation>
                        <MapPin size={24} weight='fill' color='#8047F8' />
                        <span>São Paulo, SP</span>
                    </HeaderLocation>

                    <HeaderCart>
                        <NavLink to={'/checkout'}>
                            <ShoppingCart size={24} weight='fill' color='#C47F17' />
                        </NavLink>
                    </HeaderCart>
                </HeaderInfo>
            </HeaderContent>
        </HeaderContainer>
    )
}