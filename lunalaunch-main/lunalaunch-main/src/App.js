import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts';
import Landing from './pages/landing';
import TermsOfService from './pages/service';
import PrivacyPolicy from './pages/policy';
import CreateToken from './pages/createToken';
import Course from './pages/course';
import Payment from './pages/payment';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' Component={Landing} />
            <Route path='/terms-of-service' Component={TermsOfService} />
            <Route path='/privacy-policy' Component={PrivacyPolicy} />
            <Route path='/create-token' Component={CreateToken} />
            <Route path='/courses/memecoin-course' Component={Course} />
            <Route path='/payment' Component={Payment} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
