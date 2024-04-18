import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderCart, HeaderContainer, HeaderContent, HeaderInfo, HeaderLocation } from './styles';

import logoImg from '../../assets/Logo.svg';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <HeaderInfo>
                    <HeaderLocation>
                        <MapPin size={24} weight='fill' color='#8047F8' />
                        <span>São Paulo, SP</span>
                    </HeaderLocation>

                    <HeaderCart>
                        <ShoppingCart size={24} weight='fill' color='#C47F17' />
                    </HeaderCart>
                </HeaderInfo>
            </HeaderContent>
        </HeaderContainer>
    )
}