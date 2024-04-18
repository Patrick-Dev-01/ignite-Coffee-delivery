import { Routes, Route  } from 'react-router-dom';
import { Home } from './pages/home';
import { CheckOut } from './pages/Checkout';
import { Success } from './pages/Success';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/checkout' element={<CheckOut />}/>
            <Route path='/success' element={<Success />}/>
        </Routes>
    )
}