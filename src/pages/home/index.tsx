import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffeDelivery from '../../assets/coffee-delivery-large.jpg';
import { ArticleIntroduction, CoffeeMixes, CoffeePresentation, CoffeesSection, DeliveryCares, DeliveryProcess, 
    MainContainer 
} from './styles';

import { CoffeCard } from './components/CoffeeCard';

import arabe from '../../assets/coffees/arabe.svg';
import americano from '../../assets/coffees/arabe.svg';
import cafeComLeite from '../../assets/coffees/cafe-com-leite.svg';
import cafeGelado from '../../assets/coffees/cafe-gelado.svg';
import capuccino from '../../assets/coffees/capuccino.svg';
import chocolateQuente from '../../assets/coffees/chocolate-quente.svg';
import cubano from '../../assets/coffees/cubano.svg';
import expressoCremoso from '../../assets/coffees/expresso-cremoso.svg';
import expresso from '../../assets/coffees/expresso.svg';
import havaiano from '../../assets/coffees/havaiano.svg';
import irlandes from '../../assets/coffees/irlandes.svg';
import latte from '../../assets/coffees/latte.svg';
import macchiato from '../../assets/coffees/macchiato.svg';
import mochaccino from '../../assets/coffees/mochaccino.svg';

export function Home(){
    return (
        <MainContainer>
            <ArticleIntroduction>
                <div>
                    <CoffeePresentation>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</h2>
                    </CoffeePresentation>

                    <DeliveryCares>
                        <DeliveryProcess variant="#C47F17">
                            <span>
                                <ShoppingCart weight='fill' color='#fff'/>
                            </span>
                            <p>Compra simples e segura</p>
                        </DeliveryProcess>

                        <DeliveryProcess variant="#403937">
                            <span>
                                <Package weight='fill' color='#fff'/>
                            </span>
                            <p>Embalagem mantém o café intacto</p>
                        </DeliveryProcess>

                        <DeliveryProcess variant="#DBAC2C">
                            <span>
                                <Timer weight='fill' color='#fff'/>
                            </span>
                            <p>Entrega rápida e rastreada</p>
                        </DeliveryProcess>

                        <DeliveryProcess variant="#8047F8">
                            <span>
                            <Coffee weight='fill' color='#fff'/>
                            </span>
                            <p>O café chega fresquinho até você</p>
                        </DeliveryProcess>

                    </DeliveryCares>
                </div>

                <img src={coffeDelivery} alt="" />
            </ArticleIntroduction>

            <CoffeesSection>
                <h1>Nossos cafés</h1>
                <CoffeeMixes>

                   <CoffeCard 
                      src={expresso}
                      tags={['Tradicional']}
                      title='Expresso Tradicional'
                      description='O tradicional café feito com água quente e grãos moídos'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={americano}
                      tags={['Tradicional']}
                      title='Expresso Americano'
                      description='Expresso diluído, menos intenso que o tradicional'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={expressoCremoso}
                      tags={['Tradicional']}
                      title='Expresso Cremoso'
                      description='Café expresso tradicional com espuma cremosa'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={cafeGelado}
                      tags={['Tradicional', 'Gelado']}
                      title='Expresso Gelado'
                      description='Bebida preparada com café expresso e cubos de gelo'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={cafeComLeite}
                      tags={['Tradicional', 'Com Leite']}
                      title='Café com Leite'
                      description='Meio a meio de expresso tradicional com leite vaporizado'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={latte}
                      tags={['Tradicional', 'Com Leite']}
                      title='Latte'
                      description='Uma dose de café expresso com o dobro de leite e espuma cremosa'
                      price={9.90}
                   />
                   
                   <CoffeCard 
                      src={capuccino}
                      tags={['Tradicional', 'Com Leite']}
                      title='Capuccino'
                      description='Bebida com canela feita de doses iguais de café, leite e espuma'
                      price={9.90}
                   />

                   <CoffeCard 
                      src={macchiato}
                      tags={['Tradicional', 'Com Leite']}
                      title='Macchiato'
                      description='Café expresso misturado com um pouco de leite quente e espuma'
                      price={9.90}
                   />

                    <CoffeCard 
                      src={mochaccino}
                      tags={['Tradicional', 'Com Leite']}
                      title='Mocaccino'
                      description='Café expresso com calda de chocolate, pouco leite e espuma'
                      price={9.90}
                   />

                    <CoffeCard 
                      src={chocolateQuente}
                      tags={['Especial', 'Com Leite']}
                      title='Chocolate Quente'
                      description='Bebida feita com chocolate dissolvido no leite quente e café'
                      price={9.90}
                    />

                    <CoffeCard 
                      src={cubano}
                      tags={['Especial', 'Alcoólico', 'Com Leite']}
                      title='Cubano'
                      description='Drink gelado de café expresso com rum, creme de leite e hortelã'
                      price={9.90}
                    />

                    <CoffeCard 
                      src={havaiano}
                      tags={['Especial', 'Com Leite']}
                      title='Havaiano'
                      description='Bebida adocicada preparada com café e leite de coco'
                      price={9.90}
                    />

                    <CoffeCard 
                      src={arabe}
                      tags={['Especial']}
                      title='Árabe'
                      description='Bebida preparada com grãos de café árabe e especiarias'
                      price={9.90}
                    />

                    <CoffeCard 
                      src={irlandes}
                      tags={['Especial', 'Alcoólico']}
                      title='Irlandês'
                      description='Bebida a base de café, uísque irlandês, açúcar e chantilly'
                      price={9.90}
                   />
                </CoffeeMixes>
            </CoffeesSection>
        </MainContainer>
    )
}